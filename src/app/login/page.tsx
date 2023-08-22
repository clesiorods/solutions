// export const metadata = {
//     title: "Sobre | Front-End Insights",
//     description: "A Front-End Insights é uma newslater semanal dedicada a fornecer conhecimentos valorosos sobre  omundo do desenvolvimento front-end.",
//     openGraph: {
//         title: "Sobre | Front-End Insights",
//         description: "A Front-End Insights é uma newslater semanal dedicada a fornecer conhecimentos valorosos sobre  omundo do desenvolvimento front-end."
//     }
// }


import Image from "next/image";
import Ilustration from "@/assets/bg-login.jpg";
import Link from "next/link";
import Icon from "@/components/Icon";
import ThemeSwitcher from "@/components/ThemeSwither";


export default function Login() {
    return (
        <div className="h-screen w-screen flex overflow-hidden">

            <Image src={Ilustration} alt="Ilustration" className="object-cover w-full sm:ml-[-100px] sm:mb-[-200px]" />

            <div className="absolute right-0 sm:w-2/3 w-full sm:m-0 min-h-full flex justify-center items-center bg-white dark:bg-[#020617f7] p-8 sm:p-20">
                <form className="w-full max-w-lg" >
                    <div className="header text-center mb-8">
                        <h2 className="text-3xl sm:text-5xl mt-6 mb-4 font-medium cursor-default">
                            Bem-vindo de volta ao
                            <br />
                            <strong className="sm:text-[2.5rem] text-brand font-black" >SOLUTIONS</strong>
                        </h2>
                        <sub className="text-sm" >não tem uma conta? <Link href="/" className="primary" >Clique aqui</Link></sub>
                    </div>
                    <div className="content">
                        <div className="form-group">
                            <label htmlFor="" className="block text-left" >E-mail</label>
                            <input
                                type="text"
                                placeholder="Seu e-mail principal"
                                className="primary"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="" className="flex justify-between" >
                                Senha
                                <Link href={"/esqueci-minha-senha"} className="primary" >esqueceu sua senha?</Link>
                            </label>
                            <input
                                type="password"
                                placeholder=""
                                className="primary"
                            />
                        </div>

                        <div className="form-group mt-4">
                            <button className="primary w-full" >Entrar</button>
                        </div>


                        <div className="border border-t-[1px solid] border-x-0 border-b-0 mt-12 py-8">
                            <p className="text-center" >Ou entre ultilizando suas redes sociais</p>
                            <div className="flex gap-4 mt-6" >
                                <div className="w-1/2" >
                                    <button className="secondary w-full flex items-center justify-center gap-2" >
                                        <Icon className="mt-[-2px]" icon={"ri:google-fill"} />
                                        Google
                                    </button>
                                </div>
                                <div className="w-1/2" >
                                    <button className="secondary w-full flex items-center justify-center gap-2" >
                                        <Icon className="mt-[-2px]" icon={"ri:facebook-fill"} />
                                        Facebook
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </form>
            </div>

            <div className="absolute right-0 p-4">
                <ThemeSwitcher />
            </div>

        </div>
    )
}