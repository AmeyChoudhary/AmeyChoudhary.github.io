import React from 'react'

const FAQ = () => {
    return (
        <div id='faq' className='pt-[100px] mt-[50px]'>
            <section  className="border-4  dark:bg-gray-800 dark:text-gray-100 mb-10">
            <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                <h2 className="text-2xl font-semibold sm:text-4xl">Frequently Asked Questions</h2>
                <p className="mt-4 mb-8 dark:text-gray-400">These are the list of frequently asked questions by the patients </p>
                <div className="space-y-4">
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">Is Gastric Pain a Serious Disease ?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">Gastric Pain is one of the Diseases Which most of the people regard as not serious but it is the cause to various other Diseases like Cancer or early appendicitis and hence the Treatment for the same is very important  </p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">What are the clinic Timmings in Apollo Hospital ?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">The timmings are 9:00 Am to 12:00 Noon and 4:00 Pm to 7:00 Pm </p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">What is the Fees ?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">The fees Depends on Treatment to Treatment .The general Consultation fee is INR 1000 </p>
                    </details>
                </div>
            </div>
        </section></div>
    )
}

export default FAQ