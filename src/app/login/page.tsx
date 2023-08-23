// export const metadata = {
//     title: "Sobre | Front-End Insights",
//     description: "A Front-End Insights é uma newslater semanal dedicada a fornecer conhecimentos valorosos sobre  omundo do desenvolvimento front-end.",
//     openGraph: {
//         title: "Sobre | Front-End Insights",
//         description: "A Front-End Insights é uma newslater semanal dedicada a fornecer conhecimentos valorosos sobre  omundo do desenvolvimento front-end."
//     }
// }


import Image from "next/image";
import Ilustration from "@/assets/bg-login-cropped.jpg";
import Link from "next/link";
import Icon from "@/components/Icon";
import ThemeSwitcher from "@/components/ThemeSwither";
import FormLogin from "@/components/FormLogin";


export default function Login() {
    return (
        <div className="fixed h-screen w-screen flex justify-end bg-violet-950">

            <Image src={Ilustration} alt="Ilustration" className="fixed w-full object-cover blur-sm" />


            <div className="z-[2] right-0 sm:w-2/3 w-full sm:m-0 max-h-full overflow-auto flex justify-center items-center bg-white dark:bg-[#020617f7] p-8 sm:px-20">
                <div className="w-full max-w-lg" >
                    <div className="header text-center mb-8">
                        <h2 className="text-3xl sm:text-5xl mt-6 mb-1 font-medium cursor-default">
                            Bem-vindo ao
                            <br />
                            <strong className="sm:text-[2.5rem] text-brand font-black" >SOLUTIONS</strong>
                        </h2>
                        <sub className="text-sm" >não tem uma conta? <Link href="/" className="primary" >Clique aqui</Link></sub>
                    </div>
                    <div className="content">
                        
                        <FormLogin/>

                        <div className="border border-t-[1px solid] border-x-0 border-b-0 mt-11 py-8">
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
                </div>
            </div>

            <div className="z-[3] absolute right-0 p-4">
                <ThemeSwitcher />
            </div>

        </div>
    )
}