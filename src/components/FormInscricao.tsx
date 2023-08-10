"use client"

import { useState } from "react";

export default function FormInscricao() {

    const [email, setEmail] = useState('');
    const handleSubmit = async (e:any) => {
        e.preventDefault()
        alert(`Email ${email} cadastrado com sucesso!`)
    }

    return (
        <form 
            className="flex justify-center gap-4 p-4"
            onSubmit={handleSubmit}
        >
            <input
                type="mail"
                name="email"
                id="email"
                placeholder="Seu e-mail procipal"
                className="bg-slate-800 p-3 rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button className="bg-sky-700 p-3 rounded">
                Inscrever-se
            </button>
        </form>
    );
}