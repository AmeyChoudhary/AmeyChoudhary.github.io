import React from 'react'
import AOS from 'aos';
import { useEffect } from 'react';
import Image from 'next/image'
import 'aos/dist/aos.css';
const Testimonials = () => {
  useEffect(() => {
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // className applied after initialization
      animatedClassName: 'aos-animate', // className applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 250, // offset (in px) from the original trigger point
      delay: 300, // values from 0 to 3000, with step 50ms
      duration: 500, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

    });

  }, [])

  return (
    <div id="testimonials">

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center">Testimonials</h1>
          <div className="flex flex-wrap -m-4">

            <div data-aos="fade-right" className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://dummyimage.com/300x300" />
                <p className="leading-relaxed">I am Premanshu Garg from Indore & My treatment has been going on for 1 year, and I feel comfortable with the Dr Ashmeet Choudhary Gastroenterologist in INDORE(M.P) and I am more than satisfied with his work .</p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4" />
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">PREMANSHU GARG</h2>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">43</h2>
                <p className="text-gray-500">BUSINESSMAN</p>
              </div>
            </div>
            <div data-aos="fade-up" className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                {/* <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="../public/amey.jpeg" /> */}
                <Image width={40} height={30} className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100 object-cover object-center rounded-[50%]" alt="hero" src="/amey.jpg" />

                <p className="leading-relaxed">Not only the best Docter But the Best Dad ever . <br></br>Happy Birthday Papa !!!!!</p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4" />
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">AMEY CHOUDHARY</h2>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">19</h2>

                <p className="text-gray-500">STUDENT</p>
              </div>

            </div>
            <div data-aos="fade-left" className="lg:w-1/3 lg:mb-0 p-4">
              <div className="h-full text-center">
                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://dummyimage.com/305x305" />
                <p className="leading-relaxed">I had a very severe gastric problem which I thought could never be resolved completely , but then I started my treatment with Dr. Ashmeet and since then my road recovery had been phenomenon </p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4" />
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">Rajesh Avasthi</h2>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">58</h2>

                <p className="text-gray-500">Product Manager </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Testimonials