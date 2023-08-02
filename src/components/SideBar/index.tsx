import { Icon as NavIcon } from '@iconify/react';

import Logo from './../assets/cosps-logo-green.svg';
import Brand from './../assets/corps-brand-green.png';
import { useCallback, useEffect, useState } from 'react';


const Nav = styled.nav`

    * {
        transition: .3s all;
    }

    div#sibeBar_content {

        background-color: #ffffff;
        height: 100vh;
        width: 240px;
        transition: .3s all;
        padding: 16px;
        z-index: 102;
        overflow-x: hidden;

        img.main_logo {
            margin-top: 0px;
            height: 40px;
        }

        div#pin_icon {
            cursor: pointer;
            color: #888888;
            margin-top: 6px;
            margin-right: -4px;
            font-size: 16px;

            .pin_close {
                display: none;
            }
        }

        div.nav_header {
            margin: 8px;
        }

        .div_logo {
            margin-left: -6px;
            display: grid;
            grid-template-columns: 1fr 1fr ;
            width: 100px;
        }

        img.brand-text {
            animation: fadein .3s cubic-bezier(.25,.8,.25,1) 0s 1 normal forwards;
            width: 128px;
            margin-top: 0px;
            margin-left: 6px;
        }
        
        ul {
            margin-top: 12px;
            list-style: none;
            font-size: 16.5px;
            padding: 0px;

            li {
                padding: 8px 16px;
                border-radius: 5px;
                margin-top: 4px;
                cursor: pointer;
                transform: .3s all;
                white-space: nowrap;
            }
            .hover:hover {
                transition: .1s all;
                background-color: #f1f1f1;
            }

            .menu_section {
                font-size: 10px;
                padding-bottom: 0px;
                color: var(--dark-green);
            }

            svg {
                margin-right: 8px;
                margin-top: -5px;
                transition: .2s all;
                font-size: 20px;
            }

            .active {
                li {
                    background: linear-gradient(118deg,#00a11b,rgba(12, 211, 45, 0.7));
                box-shadow: rgba(6, 145, 1, 0.219) 0px 0px 10px 1px;
                }

                span, svg {
                    color: white !important;
                }
            }
        }

        a {
            text-decoration: none;
            color: #494949;
            cursor: pointer;
        }

    }


    /* @media screen and (max-width: 1200px) { */
        div#sibeBar_content.compactedSideBar {
            width: 70px;
            
            .div_logo {
                margin-left: -6px;
            }

            img.brand-text {
                margin-left: -10px;
                opacity: 0;
            }

            div#pin_icon {
                display: none;
            }
            
            .div_menu {
                margin: 0px 0px;
                display: flex;
                justify-content: center;
            }

            .icon {
                margin: 5px 0px !important;
                font-size: 24px !important;
            }

            .nav_text {
                display: none;
            }

            ul {
                margin-top: 0px;
                li {
                    text-align: center;
                    span.menu_section {
                        display: none;
                    }
                }
                .active {
                    li {
                        box-shadow: none;
                    }
                }
            }
        }
    /* } */


    /* @media screen and (max-width: 800px) { */
        div#sibeBar_content.hiddenSideBar {
            position: absolute;
            margin-left: -240px;
            .brand-text {
                margin-left: 2px;
            }
        }
    /* } */


    div#sibeBar_content.hiddenSideBar.mobileSideBar {
        position: absolute;
        box-shadow: 0px 0px 34px rgba(0, 0, 0, 0.5);
        margin-left: 0px;
        .pin_icon_content {
            display: none;
        }

        div#pin_icon {
            .pin_close {
                display: block;
            }
        }
    }
    
`;


const BtnMenu = styled.div`
    display: none;

    @media screen and (max-width: 800px) {
        display: block;
        position: absolute;
        z-index: 101;
        top: 0;
        right: -50px;
        font-size: 32px;
        color: #f5f5f5;
        margin-top: -1px;
    }
`;

export function SideBar() {

    const [sideBarClass, setSideBarClass] = useState("");
    const [fixedSideBar, setFixedSideBar] = useState(false);
    const [hoverSideBar, setHoverSideBar] = useState(false);
    const [mobileSideBar, setMobileSideBar] = useState("");

    const { user } = useAuth();

    const handleFixBar = useCallback(() => {
        localStorage.setItem('fixedSideBar', fixedSideBar ? '0' : '1');
        setFixedSideBar(!fixedSideBar);
    }, [fixedSideBar])


    const handleResize = useCallback(() => {

        if (fixedSideBar) {
            setSideBarClass('');
            if (window.innerWidth < 800) {
                setSideBarClass('hiddenSideBar');
                setMobileSideBar('mobileSideBar');
            } else {
                setMobileSideBar('');
            }
        } else {
            if (hoverSideBar && (window.innerWidth > 800)) {
                setSideBarClass('');
            } else {
                if (window.innerWidth < 800) {
                    setSideBarClass('hiddenSideBar');
                } else if (window.innerWidth < 1200) {
                    setSideBarClass('compactedSideBar');
                } else {
                    setSideBarClass('');
                }
            }
        }

    }, [fixedSideBar, hoverSideBar]);


    useEffect(() => {
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [fixedSideBar, hoverSideBar, handleResize]);


    useEffect(() => {
        const fixed = Number(localStorage.getItem('fixedSideBar'));
        if (fixed && (window.innerWidth >= 800)) {
            setFixedSideBar(true);
        }
    }, [])


    return (
        <div style={{ position: 'relative' }}>

            <BtnMenu onClick={() => { handleFixBar() }} >
                <NavIcon className="icon" icon="eva:menu-fill" />
            </BtnMenu>

            <Nav>
                <div id="sibeBar_content" className={`${sideBarClass} ${mobileSideBar}`} onMouseEnter={() => setHoverSideBar(true)} onMouseLeave={() => setHoverSideBar(false)}>
                    <div className="nav_header navbar-nav flex-row justify-content-between">
                        <NavLink to={'/'} className='div_logo'>
                            <span className="brand-logo">
                                <img className='main_logo' src={Logo} alt="logo" />
                            </span>
                            <img className='brand-text' src={Brand} alt="logo" />
                        </NavLink>
                        <div id="pin_icon" title='Fixar barra lateral' onClick={() => { handleFixBar() }}>
                            {
                                fixedSideBar
                                    ?
                                    <NavIcon className="icon pin_icon_content" icon="ri:pushpin-fill" />
                                    :
                                    <NavIcon className="icon pin_icon_content" icon="ri:pushpin-line" />
                            }
                            <div onClick={() => { setMobileSideBar('') }} >
                                <NavIcon className="icon pin_close" style={{ fontSize: '23px' }} icon="uil:multiply" />
                            </div>

                        </div>
                    </div>

                    <div className="div_menu" >
                        <ul className="">

                            <li className='pb-0' >
                                <span className='menu_section'>
                                    CADASTROS
                                </span>
                            </li>

                            <NavLink data-bs-toggle="" to="/" aria-expanded="true" aria-controls="sidebarDashboards" className=" ">
                                <li className="hover">
                                    <NavIcon className="icon" icon="uil:home-alt" />
                                    <span className=" nav_text"> Home </span>
                                </li>
                            </NavLink>

                            {/* {
                            user.is_admin ?
                                <NavLink data-bs-toggle="" to="/empresas" aria-expanded="false" aria-controls="sidebarCrm" className="">
                                    <li className="hover">
                                        <NavIcon className="icon" icon="uil:building" />
                                        <span className='nav_text'> Empresas </span>
                                    </li>
                                </NavLink>
                                :
                                ''
                            } */}

                            <NavLink data-bs-toggle="" to="/cargos" aria-expanded="false" aria-controls="sidebarCrm" className="">
                                <li className="hover">
                                    <NavIcon className="icon" icon="uil:bag" />
                                    <span className='nav_text'> Cargos </span>
                                </li>
                            </NavLink>

                            <NavLink to="/funcoes" className="">
                                <li className="hover">
                                    <NavIcon className="icon" icon="uil:user-md" />
                                    <span className='nav_text'> Funções </span>
                                </li>
                            </NavLink>

                            <NavLink to="/horarios" className="">
                                <li className="hover">
                                    <NavIcon className="icon" icon="uil:clock-eight" />
                                    <span className='nav_text'> Horários </span>
                                </li>
                            </NavLink>

                            <li className='pb-0'>
                                <span className='menu_section'>
                                    ADMIN
                                </span>
                            </li>

                            {
                                user.is_admin ?
                                    <NavLink data-bs-toggle="" to="/usuarios" aria-expanded="false" aria-controls="sidebarCrm" className="">
                                        <li className="hover">
                                            <NavIcon className="icon" icon="uil:users-alt" />
                                            <span className='nav_text'> Usuários </span>
                                        </li>
                                    </NavLink>
                                    :
                                    ''
                            }

                            <NavLink data-bs-toggle="" to="/profile" aria-expanded="false" aria-controls="sidebarEcommerce" className="">
                                <li className="hover">
                                    <NavIcon className="icon" icon="uil:user-circle" />
                                    <span className='nav_text'> Minha Conta </span>
                                </li>
                            </NavLink>

                            {
                                user.is_admin ?
                                    <NavLink data-bs-toggle="" to="/relatorio" aria-expanded="false" aria-controls="sidebarCrm" className="">
                                        <li className="hover">
                                            <NavIcon className="icon" icon="uil:file-search-alt" />
                                            <span className='nav_text'> Relatório </span>
                                        </li>
                                    </NavLink>
                                    :
                                    ''
                            }
                        </ul>
                    </div>
                </div>
            </Nav>

        </div>
    );
}