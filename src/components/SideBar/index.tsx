import Image from "next/image";
import Icon from "../Icon";
import "./style.css";
import Logo from "@/assets/logo_solutions.png";
import Link from "next/link";


export default function SideBar() {

    return (
        <nav id="side_bar">
            <header className="border-b border-dashed border-[#352c5e]" >
                <Image alt="" src={Logo} className="w-[30px] ml-1" />
                <h1 className="text-xl pl-3 font-semibold cursor-default w-full" >SOLUTIONS</h1>
                <div className="icon_case">
                    <Icon icon="ep:arrow-left-bold" />
                </div>
            </header>

            <ul id="ul_modules">
                <li className="">
                    <Link href={'/'} className="">
                        <Icon className="nav_icon" icon="solar:wad-of-money-line-duotone" />
                        <span className='nav_text'> Financeiro </span>
                    </Link>
                </li>

                <li className="">
                    <Link href={'/'} className="">
                        <Icon className="nav_icon" icon="solar:ticket-sale-bold-duotone" />
                        <span className='nav_text'> Vendas </span>
                    </Link>
                </li>

                <li className="">
                    <Link href={'/'} className="">
                        <Icon className="nav_icon" icon="solar:users-group-two-rounded-line-duotone" />
                        <span className='nav_text'> Horários </span>
                    </Link>
                </li>

                <li className="">
                    <Link href={'/'} className="">
                        <Icon className="nav_icon" icon="solar:users-group-two-rounded-line-duotone" />
                        <span className='nav_text'> Horários </span>
                    </Link>
                </li>

                <li className="">
                    <Link href={'/'} className="">
                        <Icon className="nav_icon" icon="solar:users-group-two-rounded-line-duotone" />
                        <span className='nav_text'> Horários </span>
                    </Link>
                </li>

                <li className="">
                    <Link href={'/'} className="">
                        <Icon className="nav_icon" icon="solar:users-group-two-rounded-line-duotone" />
                        <span className='nav_text'> Horários </span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}