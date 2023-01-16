import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Testimonials from '../components/Testimonials'
import { motion, useScroll } from "framer-motion"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <Head>
        <title>Doc Web</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="text-gray-600 body-font h-fu">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Dr. Ashmeet Choudhary
        <br className="hidden lg:inline-block text-sm" />(MBBS , MD , DM (Gastroentrologist, AIIMS-Delhi))
      </h1>
      <p className="mb-8 leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quae recusandae dicta harum, aperiam commodi maiores voluptate iure ab iste dolorum culpa blanditiis numquam cupiditate distinctio vero excepturi ipsa sapiente?</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
    </div>
  </div>
</section>
    <Testimonials />
    </>
  )
}
