'use client';
import React from 'react'
import { motion } from "framer-motion";
import { useDarkMode } from '../darkmode/darkmodecontext';
import Image from 'next/image';
import Abstract from '../../../public/images/about/abstract.png'

//Image Source
import heroImage from '../../../public/images/hero/hero.png'

const Hero = () => {
    const { darkMode } = useDarkMode()

    const scrollToSection = () => {
        const targetElement = document.getElementById("form");
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start', // Adjust this based on your layout needs
            });
        }
    };


    return (
        <div className={`flex  ${darkMode ? "bg-secondary" : "bg-primary"} justify-center items-center overflow-hidden`}>

            <div className="w-5/6 grid grid-cols-1 lg:grid-cols-2  md:h-[90vh] ">
                {/* Col-1 */}
                <div className=' flex justify-end mb-10 flex-col order-2 lg:order-1 lg:justify-center lg:mb-0 2xl:pl-16'>
                    <h1 className={`z-10 font-bold text-4xl tracking-tight text-primary ${darkMode && "text-secondary"} `}>Stefano Alcantara</h1>

                    <p className={`z-10 max-lg:mt-5 text-primary ${darkMode && "text-secondary"}`}>Welcome to my tattoo portfolio gallery, where I blend the world of fine arts with the mastery of tattooing. With the skin as my canvas, and the needle as my brush, each stroke tells a unique story, creating a tapestry of personalized, captivating artistry.</p>

                    <div className='text-center lg:text-left'>
                        <motion.button
                            onClick={scrollToSection}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            whileHover={{ scale: 1.05 }}
                            className={` z-10 w-full lg:w-48 rounded-2xl bg-main mt-5 ${darkMode && "bg-primary text-primary"} px-3.5 py-4 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`} >Get in Touch
                        </motion.button>
                    </div>

                </div>
                {/* This is col-2 */}
                <div className='relative flex items-center justify-center order-1 lg:order-2 overflow-hidden max-lg:h-[60vh] mt-2'>

                    <Image
                        className='absolute w-full object-contain'
                        src={Abstract}
                        alt="abstract-image"
                        sizes='1'
                        fill
                    />
                    <Image

                        className='absolute w-full object-contain'
                        src={heroImage}
                        alt="redguy"
                        sizes='1'
                        fill
                    />
                </div>
            </div>
        </div >
    )
}
export default Hero