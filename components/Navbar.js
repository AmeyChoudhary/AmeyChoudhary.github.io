import React from 'react'
import Image from 'next/image'
import AnchorLink from "react-anchor-link-smooth-scroll";
const Navbar = () => {
  return (
    <div id='navbar' className="bg-gray-300 font-IBM fixed w-full z-10 top-0">

      <header className="text-gray-600 body-font ">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg> */}
                    <Image width={40} height={30} className="object-cover object-center rounded-[50%]" alt="hero" src="/docter_logo.png" />

            <span className="ml-3 text-xl"> <AnchorLink href='#start'>Home</AnchorLink>  </span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <AnchorLink href='#education' className="mr-5 hover:text-gray-900">Education</AnchorLink>
            <AnchorLink href='#achievments' className="mr-5 hover:text-gray-900">Achievments</AnchorLink>
            <AnchorLink href='#testimonials' className="mr-5 hover:text-gray-900">Tetimonials</AnchorLink>
            <AnchorLink href='#faq' className="mr-5 hover:text-gray-900">FAQ's</AnchorLink>
            <AnchorLink href='#feedback' className="mr-5 hover:text-gray-900">Feedback</AnchorLink>
          
          </nav>
          {/* <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button */}
            {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg> */}
          {/* </button> */}
        </div>
      </header>
    </div>
  )
}

export default Navbar