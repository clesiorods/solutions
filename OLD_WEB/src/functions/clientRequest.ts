"use client"


import { getSession } from "next-auth/react";


export class ClientRequest {

    async get<T = unknown>(
        input: RequestInfo | URL,
        init?: RequestInit | undefined
    ) {
        const session = await getSession();

        const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${input}`, init ? init : {
            method: "GET",
            headers: {
                Authorization: `Bearer ${session?.token}`
            }
        });

        if (data.status == 401) {
            window.location.href = `http://${window.location.host}/app/logout`;
        }

        const result = await data.json();
        return result as T
    }
}

