import FormInscricao from '@/components/FormInscricao'
import ThemeSwitcher from '@/components/ThemeSwither'
import Image from 'next/image'
import Link from 'next/link'

import ImageCard01 from '@/assets/lp_credcard_01.png';
import ImageCard02 from '@/assets/lp_credcard_02.png';
import ImageCard03 from '@/assets/lp_credcard_03.png';


export default function Home() {
  return (
    <main className="flex flex-col">

      <header className="flex items-center justify-between w-full py-10 px-8" >
        <span className="text-2xl font-black cursor-default" >SOLUTIONS</span>
        <nav className="flex gap-10" >
          <Link href="/" >início</Link>
          {/* <Link href="/sobre" >sobre</Link> */}
          <a href="#div_sobre">sobre</a>
          <Link href="/admin/subscribers" >inscritos</Link>
          <ThemeSwitcher />
        </nav>
      </header>

      <section className='flex flex-col justify-between text-center w-100 px-8 h-[calc(100vh-112px)]'>
        <div></div>
        <div className='grid grid-cols-1 md:grid-cols-2'>
          <div>
            <h1 className="text-4xl">
              Mergulhe no mundo do Front-End: Receba as últimas tendencias, dicas e truques toda senama!
            </h1>
            <p className='mt-8 text-lg'>
              Inscreva-se em nossa newsletter semanal para manter atualizado sobre os avanços mais recentes no desenvolvimento front-end, descubra novas ferramentas, aprimore suas habilidades e aprofunde seu conhecimento nesta área dinâmica.
            </p>
            <FormInscricao />
          </div>
          <div className='relative' >
            <Image alt='' src={ImageCard01} className='absolute' ></Image>
            <Image alt='' src={ImageCard02} className='absolute' ></Image>
            <Image alt='' src={ImageCard03} className='absolute' ></Image>
          </div>
        </div>
        <div className='mb-4' >
          <span>
            Ver mais
          </span>
          <br />
          <div className='rotate-90 text-xl' >{'>'}</div>
        </div>
      </section>

      <section id='div_sobre' className='text-center h-screen w-100 bg-slate-200'>
        <div>
          <h2>Sobre</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
      </section>

      <footer className="p-10">
        <p>Feito com Next.js 13.4</p>
      </footer>

    </main>
  )
}
