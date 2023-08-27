"use client"


import { createContext, useCallback, useContext, useEffect, useState } from "react";

interface User {
    id: string
    name: string
    email: string
    is_admin: number
}

interface IResponsiveSideBar {
    handleFixBar: () => void;
    sideBarClass: string;
}

export const SideBarContext = createContext<IResponsiveSideBar>({} as IResponsiveSideBar);


export const SideBarProvider = ({ children }: any) => {






    const [sideBarClass, setSideBarClass] = useState("");
    const [fixedSideBar, setFixedSideBar] = useState(false);
    const [hoverSideBar, setHoverSideBar] = useState(false);
    const [mobileSideBar, setMobileSideBar] = useState("");

    const handleFixBar = useCallback(() => {
        localStorage.setItem('fixedSideBar', fixedSideBar ? '0' : '1');
        setFixedSideBar(!fixedSideBar);
    }, [fixedSideBar])


    const handleResize = useCallback(() => {

        if (fixedSideBar) {
            setSideBarClass('');
            if (window.innerWidth < 800) {
                setSideBarClass('hiddenSideBar');
                setMobileSideBar('mobileSideBar');
            } else {
                setMobileSideBar('');
            }
        } else {
            if (hoverSideBar && (window.innerWidth > 800)) {
                setSideBarClass('');
            } else {
                if (window.innerWidth < 800) {
                    setSideBarClass('hiddenSideBar');
                } else if (window.innerWidth < 1200) {
                    setSideBarClass('compactedSideBar');
                } else {
                    setSideBarClass('');
                }
            }
        }

    }, [fixedSideBar, hoverSideBar]);


    useEffect(() => {
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [fixedSideBar, hoverSideBar, handleResize]);


    useEffect(() => {
        const fixed = Number(localStorage.getItem('fixedSideBar'));
        if (fixed && (window.innerWidth >= 800)) {
            setFixedSideBar(true);
        }
    }, [])









    return (
        <SideBarContext.Provider value={{ sideBarClass, handleFixBar }} >
            {children}
        </SideBarContext.Provider>
    )
}

export const useResponsiveClass = () => {
    const context = useContext(SideBarContext)
    return context;
}