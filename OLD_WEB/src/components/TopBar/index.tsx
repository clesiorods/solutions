import Link from "next/link";
import ThemeSwitcher from "../ThemeSwither";
import "./style.css";
import { getServerSession } from "next-auth"
import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import ButtonLogout from "../ButtonLogout";

export default async function TopBar() {

    const session = await getServerSession(nextAuthOptions)

    return (
        <nav id="top_bar">
            <ul id="ul_module_sections" >
                <li> <Link href={'/app/financeiro/'} className="active" >Dashboard</Link></li>
                <li> <Link href={'/app/financeiro/relatorios'} >Relatórios</Link></li>
                <li> <Link href={'/app/financeiro/configuracoes'} >Configurações</Link></li>
            </ul>

            <div className="flex gap-2">
                <ThemeSwitcher />
                <div>Olá, {session?.user.name}</div>
                <ButtonLogout />
            </div>
        </nav>
    );
}