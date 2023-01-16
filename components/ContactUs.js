import React from 'react'
import { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
const ContactUs = () => {
    const [Email, SetEmail] = useState("");
    const [Message, SetMessage] = useState("");
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
            from_name: Email,
            to_name: "Suyash",
            message: Message,
        }, 'PU7R1vgTMkNHRC1Ma')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    const Changehuya = (event) => {
        // console.log(Email)
        // console.log(Message)
        // console.log(event.target.value)
        if (event.target.id === "email") {
            SetEmail(event.target.value);
        }
        else {
            SetMessage(event.target.value)
        }

    };
    return (
        <div> <section className="flex text-600 body-font relative">

            <div className=" mapouter absolute inset-0  gmap_canvas"><iframe className=" gmap_iframe " width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" title="map" scrolling="no" src="https://maps.google.com/maps?width=590&height=400&hl=en&q=apollo hospital indore&t=&z=13&ie=UTF8&iwloc=B&output=embed" style={{ filter: ' contrast(1.2) opacity(0.7)' }}> </iframe>
            </div>

            <div className="container px-5 py-24 mx-auto flex">
                <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
                    <form ref={form} onSubmit={sendEmail}>
                        <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
                        <p className="leading-relaxed mb-5 text-gray-600">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
                        <div className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                            <input type="email" onChange={Changehuya} value={Email} id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                            <textarea id="message" onChange={Changehuya} value={Message} name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" defaultValue={""} />
                        </div>
                        <button onClick={sendEmail} className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                        <p className="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>

                    </form>
                </div>
            </div>

        </section></div>
    )
}

export default ContactUs