import Footer from '@/components/Footer'
import styles from '../styles/globals.css'
import Navbar from '../components/Navbar'
import { motion, useScroll  } from "framer-motion";

export default function App({ Component, pageProps }) {
  const { scrollYProgress } = useScroll()

  return (<>
    <motion.div
    className='fixed top-0 left-0 right-0 h-1 bg-red-600 origin-left'
      style={{ scaleX: scrollYProgress }}
    ></motion.div> 
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </>)
}
``