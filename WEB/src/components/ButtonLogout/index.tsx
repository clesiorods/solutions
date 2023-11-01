"use client"

import "./style.css";
import { ReactNode } from "react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation"


interface CardProps {
    children: ReactNode;
    className?: string;
}


export default function ButtonLogout() {

    const router = useRouter()

    async function logOut() {
        await signOut({
            redirect: false
        })
        router.replace('/login')
    }

    return (
        <a href="#" onClick={() => logOut()} >sair</a>
    );
}