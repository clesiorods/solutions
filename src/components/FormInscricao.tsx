"use client"

import axios from "axios";
import { useState } from "react";

export default function FormInscricao() {

    const [email, setEmail] = useState('');
    const handleSubmit = async (e:any) => {
        e.preventDefault()
        axios.post('/api/inscritos', {
            email: email
        }).then(() => {
            alert(`Email ${email} cadastrado com sucesso!`)
        }).catch(() => {
            alert(`Algo de errado aconteceu. Não foi possível realizar a operação`)
        })
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
                placeholder="Seu e-mail principal"
                className="input_lg primary w-3/4"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button className="button_lg primary">
                Contacte-nos
            </button>
        </form>
    );
}