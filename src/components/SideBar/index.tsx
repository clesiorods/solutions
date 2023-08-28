import Image from "next/image";
import Icon from "../Icon";
import "./style.css";
import Logo from "@/assets/logo_solutions.png";
import Link from "next/link";
import PinSideBar from "../PinSideBar";


export default function SideBar() {

    return (
        <nav id="side_bar">
            <header className="border-b border-dashed border-[#352c5e]" >
                <Image alt="" src={Logo} className="w-[30px] ml-1" />
                <h1 className="text-xl pl-3 font-semibold cursor-default w-full" >SOLUTIONS</h1>
                <div className="icon_case">
                    <PinSideBar />
                </div>
            </header>

            <h6 className="mt-4 ml-[32px] text-[10px] opacity-50 header_group">MÓDULOS</h6>

            <ul id="ul_modules">
                <li className="active">
                    <Link href={'/'} className="">
                        <Icon className="nav_icon" icon="solar:wallet-money-bold-duotone" />
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
                        <span className='nav_text'> CRM </span>
                    </Link>
                </li>

                <li className="">
                    <Link href={'/'} className="">
                        <Icon className="nav_icon" icon="solar:checklist-minimalistic-bold-duotone" />
                        <span className='nav_text'> Minhas Tarefas </span>
                    </Link>
                </li>

                <li className="">
                    <Link href={'/'} className="">
                        <Icon className="nav_icon" icon="solar:chat-square-call-line-duotone" />
                        <span className='nav_text'> Chat </span>
                    </Link>
                </li>
            </ul>

            <h6 className="mt-4 ml-[32px] text-[10px] opacity-50 header_group">APPS</h6>

            <ul id="ul_modules">
                <li className="">
                    <Link href={'/'} className="">
                        <Icon className="nav_icon" icon="solar:calculator-minimalistic-bold-duotone" />
                        <span className='nav_text'> Calculadora </span>
                    </Link>
                </li>

                <li className="">
                    <Link href={'/'} className="">
                        <Icon className="nav_icon" icon="solar:calendar-bold-duotone" />
                        <span className='nav_text'> Calendário </span>
                    </Link>
                </li>
            </ul>

        </nav>
    );
}