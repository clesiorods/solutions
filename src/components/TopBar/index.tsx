import ThemeSwitcher from "../ThemeSwither";
import "./style.css";


export default function TopBar() {
    return(
        <nav id="top_bar">
            <ThemeSwitcher/>
        </nav>
    );
}