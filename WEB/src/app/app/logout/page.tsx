"use client"

import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route"
import Card from "@/components/Card"
import CircleChart from "@/components/CircleChart"
import Footer from "@/components/Footer"
import { getServerSession } from "next-auth"
import { signOut } from "next-auth/react"
import { useRouter } from "next/navigation"



export default function Resume() {

    const router = useRouter()

 signOut({
        redirect: true
    })
    // router.replace('/login')

    return (
        <main className="p-[18px] w-full ml-0 overflow-y-auto">
            <h2>Saindo...</h2>
        </main>
    )
}