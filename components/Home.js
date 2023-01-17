import React, { useState, useEffect, useRef } from 'react'
import CELLS from 'vanta/dist/vanta.cells.min'
// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag
//  import * from THREE
import * as THREE from "three"


const Home = (props) => {
    const myRef = useRef(null)
    const [vantaEffect, setVantaEffect] = useState(null)
    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect
                (CELLS({
                    el: myRef.current,
                    THREE,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200.00,
                    minWidth: 200.00,
                    scale: 1.00,
                    color1: 0x2a4c89,
                    color2: 0x8aabd4,
                    size: 4.90
                }))
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])
    return <div ref={myRef} >
        <section className="text-gray-600 body-font h-fu">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">

                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Dr.Ashmeet Choudhary
                        <br className="hidden lg:inline-block text-sm" />
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
    </div>

}
// const Home = () => {
//     return (
//         <div>
//             <section className="text-gray-600 body-font h-fu">
//                 <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">

//                     <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
//                         <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Dr. Ashmeet Choudhary
//                             <br className="hidden lg:inline-block text-sm" />(MBBS , MD , DM (Gastroentrologist, AIIMS-Delhi))
//                         </h1>
//                         <p className="mb-8 leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quae recusandae dicta harum, aperiam commodi maiores voluptate iure ab iste dolorum culpa blanditiis numquam cupiditate distinctio vero excepturi ipsa sapiente?</p>
//                         <div className="flex justify-center">
//                             <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
//                             <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
//                         </div>
//                     </div>
//                     <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
//                         <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
//                     </div>
//                 </div>
//             </section>
//         </div>
//     )
// }

export default Home