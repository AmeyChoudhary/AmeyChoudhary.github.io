import React from 'react'
import { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';

const ContactUs2 = () => {
    const [Email, SetEmail] = useState("");
    const [Message, SetMessage] = useState("");
    const [Name, SetName] = useState("");
    const [Btn, SetBtn] = useState("Send");

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        console.log(Email)
        console.log(Message)
        // var values = {
        //     from_name: Email,
        //     to_name: "Suyash",
        //     message: Message,
        // };
        emailjs.send('service_l8r5blo', 'template_1pvicnt', {
            from_name: Name,
            to_name: "Suyash",
            message: Message,
            from_mail: Email
        }, 'PU7R1vgTMkNHRC1Ma')
            .then((result) => {
                console.log(result.text);
                SetName("");
                SetEmail("");
                SetMessage("");

                SetBtn("Sent!!")
                document.getElementById('sendbtn').className = "text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
                setTimeout(function () {
                    SetBtn("Send")
                    document.getElementById('sendbtn').className = "text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"

                }, 3000)
            }, (error) => {
                console.log(error.text);
                SetBtn("ERROR")
                document.getElementById('sendbtn').className = "text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg"
                setTimeout(function () {
                    SetBtn("Send")
                    document.getElementById('sendbtn').className = "text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"

                }, 3000)
            });


    };

    const Changehuya = (event) => {
        // console.log(Email)
        // console.log(Message)
        // console.log(event.target.value)
        if (event.target.id === "email") {
            SetEmail(event.target.value);
        }
        else if (event.target.id === "message") {
            SetMessage(event.target.value)
        }
        else {
            SetName(event.target.value)
        }

    };
    useEffect(() => {
        AOS.init({
            // Global settings:
            disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
            startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
            initClassName: 'aos-init', // class applied after initialization
            animatedClassName: 'aos-animate', // class applied on animation
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
        <div><section className="text-gray-600 body-font relative">
            <h1 class="text-3xl font-medium title-font text-gray-900 mb-12 text-center">Feedback</h1>
            <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                    <iframe data-aos="fade-right" className=" gmap_iframe absolute inset-0" width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" title="map" scrolling="no" src="https://maps.google.com/maps?width=590&height=400&hl=en&q=apollo hospital indore&t=&z=13&ie=UTF8&iwloc=B&output=embed" style={{ filter: ' contrast(1.2) opacity(0.7)' }}> </iframe>                    <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">


                        <div className="lg:w-1/2 px-6">
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                            <p className="mt-1">Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter</p>
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                            <a className="text-indigo-500 leading-relaxed">example@email.com</a>

                        </div>
                        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">Timmings</h2>
                            <p className="mt-1">00:00 - 00:00 AM</p>
                            <p className="mt-1">00:00 - 00:00 PM</p>

                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                            <p className="leading-relaxed">123-456-7890</p>
                        </div>

                    </div>
                </div>
                <div data-aos="fade-left" className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                    <form ref={form} onSubmit={sendEmail}>
                        <div>

                            <h2  className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
                            <p className="leading-relaxed mb-5 text-gray-600">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
                            <div className="relative mb-4">
                                <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                                <input type="text" onChange={Changehuya} id="name" name="name" value={Name} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div className="relative mb-4">
                                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                                <input type="email" onChange={Changehuya} id="email" placeholder="docter@patient.com" name="email" value={Email} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div className="relative mb-4">
                                <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                                <textarea id="message" onChange={Changehuya} name="message" value={Message} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" defaultValue={""} />
                            </div>
                            <button id='sendbtn' onClick={sendEmail} className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">{Btn}</button>
                            <p className="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
                        </div>
                    </form>

                </div>
            </div>
        </section></div>
    )
}

export default ContactUs2