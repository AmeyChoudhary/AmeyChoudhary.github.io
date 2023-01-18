import Footer from '@/components/Footer'
import styles from '../styles/globals.css'
import Navbar from '../components/Navbar'
import { motion, useScroll } from "framer-motion";
import * as THREE from "three";
import { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion'
import Image from 'next/image';
<div>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
  <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300&display=swap" rel="stylesheet" />
</div>

function MyApp({ Component, pageProps, router }) {
  // AOS.init();
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
    <motion.div id='rollingbar'
      className='fixed top-0 bg-indigo-900 left-0 right-0 h-2  origin-left z-10'
      style={{ scaleX: scrollYProgress }}
    >
    </motion.div>
    {/* <Navbar /> */}
    <Component {...pageProps} />
    <Footer />
  </>)
}
``