import NextAuth, { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

const nextAuthOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: {label:'email', type:'text'},
                password: {label:'password', type:'password'}
            },

            async authorize(credentials, req) {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`,{
                    method:'POST',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        email: credentials?.email,
                        password: credentials?.password
                    })
                });

                const user = await response.json();
                // console.log(process.env.API_URL);

                if(user && response.ok) {
                    return user
                } else {
                    return null
                }
            },
        })
    ],

    pages: {
        signIn: '/login'
    },

     callbacks: {
        async jwt({token, user}) {
            user && (token.user = user)
            return {...token, ...user}
        },
        async session({session, token, user}) {
            session = token as any
            return session
        }
     }
}

const handler = NextAuth(nextAuthOptions);

export { handler as GET, handler as POST, nextAuthOptions }