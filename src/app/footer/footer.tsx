"use client";
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

// Images
import Logo from '../../../public/images/navbar/logo.jpg'
import LogoDark from '../../../public/images/navbar/logo-dark.jpg'
import Facebook from '../../../public/images/socialmedia/facebook.png'
import { useDarkMode } from '../darkmode/darkmodecontext';
const Footer = () => {
    const { darkMode } = useDarkMode()
    return (
        <div className={`flex justify-center flex-col items-center pt-10 ${darkMode ? "bg-secondary text-secondary" : "bg-primary text-primary"} text-center`}>
            <Link href={"/"} >
                <Image
                    className='h-auto w-auto'
                    src={darkMode ? Logo : LogoDark}
                    alt="logo"
                    width="150"
                    height="150"
                />
            </Link>


            <p>© Copyright  2023, Stefano Alcantara.
                All rights reserved</p>

        </div>
    )
}

export default Footer