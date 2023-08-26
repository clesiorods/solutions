import ThemeSwitcher from "../ThemeSwither";
import "./style.css";


export default function TopBar() {
    return(
        <nav id="top_bar">
            <ul id="ul_module_sections" >
                <li>Dashboard</li>
                <li>Relatórios</li>
                <li>Configurações</li>
            </ul>
            <ThemeSwitcher/>
        </nav>
    );
}