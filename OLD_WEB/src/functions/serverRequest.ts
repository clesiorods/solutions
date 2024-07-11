
import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
// import { getSession } from "next-auth/react";


export class ServerRequest {

    async get<T = unknown>(
        input: RequestInfo | URL,
        init?: RequestInit | undefined
    ) {
        // const session = await getSession();
        const session = await getServerSession(nextAuthOptions);

        const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${input}`, init ? init : {
            method: "GET",
            headers: {
                Authorization: `Bearer ${session?.token}`
            }
        });
        
        if(data.status == 401) {

        }

        const result = await data.json();
        return result as T
    }
}

