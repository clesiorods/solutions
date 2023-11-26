// authContext.tsx

import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import axios, { AxiosInstance } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BASE_URL } from '../consts';
import { IUser } from '../types/sessionProps';
import { useNavigation } from '@react-navigation/native';
import { StackTypes } from '../routes/app.router';


interface AuthContextProps {
  authState: AuthStateProps;
  login: (email: string, password: string) => (Promise<{ success: boolean, user: IUser }> | Promise<{ success: boolean, user: {} }>);
  logout: () => Promise<void>;
  api_auth: AxiosInstance;
}

interface AuthStateProps {
  user: IUser;
  token: string | null;
  refreshToken: string | null;
  loading: boolean;
  error: string | null;
}


const AuthContext = createContext<AuthContextProps | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [authState, setAuthState] = useState({} as AuthStateProps);

  useEffect(() => {
    const bootstrapAsync = async () => {
      try {
        const string_user = await AsyncStorage.getItem('user');
        const user = JSON.parse(string_user ? string_user : '{}');
        const token = await AsyncStorage.getItem('token');
        const refreshToken = await AsyncStorage.getItem('refreshToken');

        if (token && refreshToken && user) {
          setAuthState({ user, token, refreshToken, loading: false, error: null });
        } else {
          setAuthState({ user: {} as IUser, token: '', refreshToken: '', loading: false, error: null });
        }
      } catch (error) {
        setAuthState({ user: {} as IUser, token: '', refreshToken: '', loading: false, error: JSON.stringify(error) });
      }
    };

    bootstrapAsync();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const response = await axios.post(`${BASE_URL}/login`, { email, password });
      const { user, token, refreshToken } = response.data;
      await AsyncStorage.setItem('token', token);
      await AsyncStorage.setItem('refreshToken', refreshToken);
      await AsyncStorage.setItem('user', JSON.stringify(user));

      setAuthState({ user, token, refreshToken, loading: false, error: null });
      return { success: true, user };

    } catch (error) {
      setAuthState({ user: {} as IUser, token: '', refreshToken: '', loading: false, error: JSON.stringify(error) });
      return { success: false, user: {} };
    }
  };

  const logout = async () => {
    try {
      // Limpar AsyncStorage
      await AsyncStorage.removeItem('token');
      await AsyncStorage.removeItem('refreshToken');
      await AsyncStorage.removeItem('user');

      setAuthState({ user: {} as IUser, token: '', refreshToken: '', loading: false, error: null });
    } catch (error) {
      setAuthState({ user: {} as IUser, token: '', refreshToken: '', loading: false, error: JSON.stringify(error) });
    }
  };

  const api_auth = axios.create({
    // baseURL: `http://localhost:3344`,
    baseURL: BASE_URL,
  });

  api_auth.interceptors.request.use(
    async (config) => {
      // Adicionar o token de autenticação à solicitação se disponível
      const token = authState.token;
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  api_auth.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      const originalRequest = error.config;
      // Se o erro for de autenticação e o token expirou, tentar renovar o token
      if (error?.response?.status === 401 && !originalRequest._retry && authState.refreshToken) {
        originalRequest._retry = true;

        try {
          const response = await axios.post(`${BASE_URL}/refresh-token`, {
            refresh_token: authState.refreshToken,
          });

          const { user, token, refreshToken } = response.data;
          await AsyncStorage.setItem('token', token);
          await AsyncStorage.setItem('refreshToken', refreshToken);
          await AsyncStorage.setItem('user', JSON.stringify(user));

          setAuthState({ user, token, refreshToken, loading: false, error: null });
          originalRequest.headers.Authorization = `Bearer ${token}`;
          return axios(originalRequest);

        } catch (refreshError) {
          await logout();
          throw refreshError;
        }

      } else if ((error?.response?.status === 401 && originalRequest._retry) || !authState.refreshToken) {
        await logout();
      }

      return Promise.reject(error);
    }
  );

  const contextValue: AuthContextProps = {
    authState,
    login,
    logout,
    api_auth,
  };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};

export { AuthProvider, useAuth };
