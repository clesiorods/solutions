import Icon from "../Icon";
import "./style.css";


export default function SideBar() {

    return (
        <nav id="side_bar">
            <header>
                <h1 className="text-2xl font-black cursor-default text-brand" >SOLUTIONS</h1>
                <div className="icon_case">
                    <Icon icon="ep:arrow-left-bold" />
                </div>

            </header>
        </nav>
    );
}