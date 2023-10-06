"use client"

import Link from "next/link";
import { useState } from "react";

export default function FormLogin() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e: any) => {
        e.preventDefault()
    }

    return (
        <form className="" onSubmit={handleSubmit} >
            <div className="form-group">
                <label htmlFor="" className="block text-left" >E-mail</label>
                <input
                    type="mail"
                    name="email"
                    id="input_email"
                    placeholder="Informe seu email"
                    className="primary"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="" className="flex justify-between" >
                    Senha
                    <Link href={"/esqueci-minha-senha"} className="primary" >esqueceu sua senha?</Link>
                </label>
                <input
                    type="password"
                    placeholder="Informe sua senha"
                    className="primary"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <div className="form-group mt-4">
                <Link href={"/app/financeiro"}>
                    <button className="primary w-full" style={{background:'linear-gradient(106deg, rgb(71 36 164) 0%, rgb(102 58 193) 51%, rgb(139 33 202) 100%)'}} >Entrar</button>
                </Link>
            </div>

        </form>
    );
}