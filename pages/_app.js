import Footer from '@/components/Footer'
import styles from '../styles/globals.css'
import Navbar from '../components/Navbar'
import { motion, useScroll } from "framer-motion";
import * as THREE from "three";
import { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Component {...pageProps} key={router.asPath} />
    </AnimatePresence>
  );
}
export default function App({ Component, pageProps }) {
  const { scrollYProgress } = useScroll()

  useEffect(() => {

    const threeScript = document.createElement("script");
    threeScript.setAttribute("id", "threeScript");
    threeScript.setAttribute(
      "src",
      "https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
    );
    document.getElementsByTagName("head")[0].appendChild(threeScript);
    return () => {
      if (threeScript) {
        threeScript.remove();
      }
    };
  }, [])

  return (<>
    <motion.div
      className='fixed top-0 left-0 right-0 h-1 bg-indigo-500 origin-left'
      style={{ scaleX: scrollYProgress }}
    ></motion.div>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </>)
}
``