
import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { getSession } from "next-auth/react";


export async function getData<T = unknown>(
    input: RequestInfo | URL,
    init?: RequestInit | undefined
) {
    // const session = await getSession();
    const session = await getServerSession(nextAuthOptions);

    const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${input}`, init ? init : {
        headers: {
            Authorization: `Bearer ${session?.token}`
        }
    });
    const result = await data.json();
    return result as T
}

// DARE UM JETRO DE SALVAR O TOKEN NO LOCALSTORAGE AO FAZER O LOGIN!!!!!!!!!!!!!!!!
// OU CRIAR UM CONTEXTO PARA SALVAR O TOKEN NO LOCAL STORAGE!!!!!!!!!!!!!!!!


export class ServerRequest {

    async getData<T = unknown>(
        input: RequestInfo | URL,
        init?: RequestInit | undefined
    ) {
        // const session = await getSession();
        const session = await getServerSession(nextAuthOptions);

        const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${input}`, init ? init : {
            headers: {
                Authorization: `Bearer ${session?.token}`
            }
        });
        const result = await data.json();
        return result as T
    }
}

