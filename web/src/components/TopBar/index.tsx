import Link from "next/link";
import ThemeSwitcher from "../ThemeSwither";
import "./style.css";


export default function TopBar() {
    return(
        <nav id="top_bar">
            <ul id="ul_module_sections" >
                <li> <Link href={'/app/financeiro/'} className="active" >Dashboard</Link></li>
                <li> <Link href={'/app/financeiro/relatorios'} >Relatórios</Link></li>
                <li> <Link href={'/app/financeiro/configuracoes'} >Configurações</Link></li>
            </ul>
            <ThemeSwitcher/>
        </nav>
    );
}