"use client"
import React from 'react'
import Image from 'next/image';
import Redreflection from '../../../public/images/about/candid-photo.png'
import Abstract from '../../../public/images/about/abstract.png'
import { useDarkMode } from '../darkmode/darkmodecontext';


const AboutMe = () => {
    const { darkMode } = useDarkMode()
    return (
        <div className={` flex justify-center items-center  ${darkMode ? "bg-secondary text-secondary" : "bg-primary text-primary"}
         overflow-hidden`}>
            <div className='flex w-5/6 flex-col lg:flex-row h-screen sm:h-[65vh] items-center'>

                <div className='w-full lg:w-1/2'>
                    <h1 className={`z-10 font-bold text-4xl tracking-tight text-left`}> About Me </h1>
                    <p className={`text-left} max-lg:mt-5`}>My name is Stefano, Alcantara and I was born and raised in Lima, Peru. From a young age, my art was influenced by comic books, which led me to develop my passion for drawing. After graduating from the Peruvian Institute of Advertising in Graphic Design, I was first introduced to the art of tattooing at age eighteen and started my first tattoo shop in 1999. Through self-teaching as a tattoo artist, my strong dedication and skill set has allowed me to become recognized as one of the most sought-after tattoo artists in the industry today.</p>
                </div>

                <div className='relative flex w-full md:w-1/2 h-full justify-center items-center lg:order-first '>
                    <Image
                        className='absolute w-full object-contain'
                        src={Abstract}
                        alt="abstract-image"
                        sizes='1'
                        fill
                    />
                    <Image

                        className='absolute w-full object-contain'
                        src={Redreflection}
                        alt="redguy"
                        sizes='1'
                        fill
                    />
                </div>
            </div>
        </div>
    )
}

export default AboutMe