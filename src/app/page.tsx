import './landingpage.css';

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

      <div className="z-[-1] absolute left-0 bottom-0 h-[288px] w-[726px] -translate-x-3/4 bg-purple-500 opacity-40 rounded-full blur-full" />
      <div className="z-[-1] absolute right-0 top-1/4 h-[388px] w-[626px] -translate-y-1/2 bg-purple-500 opacity-30 rounded-full blur-full" />

      <section className='flex flex-col justify-between text-center w-100 px-8 h-screen'>
        
        <header className="flex items-center justify-between w-full pt-8 pb-4 px-8" >
          <span className="text-2xl font-black cursor-default text-brand" >SOLUTIONS</span>
          <nav className="flex gap-10" >
            <Link href="/" >início</Link>
            {/* <Link href="/sobre" >sobre</Link> */}
            <a href="#div_sobre">sobre</a>
            <Link href="/admin/subscribers" >inscritos</Link>
            <Link href="/login" >login</Link>
            <ThemeSwitcher />
          </nav>
        </header>

        <div className='grid grid-cols-1 md:grid-cols-2'>
          <div className='pl-12'>
            <h1 className="text-5xl font-medium">
              Um pacote completo de soluções para sua empresa!
            </h1>
            <p className='mt-8 text-lg'>
              Otimize sua empresa com nosso software de gestão. Controle finanças, estoque e recursos de forma integrada. Decisões mais precisas e colaboração facilitada. Experimente agora e impulsione seu sucesso!
            </p>
            <FormInscricao />
          </div>
          <div className='relative flex items-center justify-center' >
            <Image alt='' src={ImageCard01} className='absolute w-[80%]' ></Image>
            <Image alt='' src={ImageCard02} className='absolute w-[80%]' ></Image>
            <Image alt='' src={ImageCard03} className='absolute w-[80%]' ></Image>
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

      <section id='div_sobre' className='text-center h-screen w-100'>
        <div>
          <h2>Sobre</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
      </section>

      {/* <footer className="p-10">
        <p>Feito com Next.js 13.4</p>
      </footer> */}

    </main>
  )
}
