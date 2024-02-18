'use client'
import React from 'react'
import { motion } from "framer-motion";
import Image from 'next/image'
import Link from 'next/link';
import { useDarkMode } from '../darkmode/darkmodecontext';
// Images
import Logo from '../../../public/images/navbar/logo.jpg'
import LogoDark from '../../../public/images/navbar/logo-dark.jpg'

const Navbar = () => {
    const [isOpen, toggleOpen] = React.useState(false);
    const hoverColor = `#FD5956`
    const hoverScale = 1.1
    const { darkMode } = useDarkMode()
    return (
        <div className={`grid grid-cols-3  ${darkMode ? "bg-secondary" : "bg-primary"}`}>
            {/* This is col1 */}
            <div className='flex items-center justify-center pl-10 order-1 xl:justify-start'>
                <Link href={"/"} >
                    <Image
                        className='h-auto w-48'
                        src={darkMode ? Logo : LogoDark}
                        alt="logo"
                        width="150"
                        height="150"
                    />
                </Link>
            </div>

            {/* This is col2 */}
            <div className='h-20 w-full flex items-center xl:justify-center xl:order-1'>
                <ul className={`hidden xl:flex flex-center space-x-5  ${darkMode ? " text-primary" : "text-secondary"}`}>
                    {/* <motion.li whileHover={{ scale: hoverScale }} >Contact</motion.li> */}
                </ul>

                <button className='ml-4' onClick={() => { toggleOpen(!isOpen) }}>
                    <svg width="30px" viewBox="0 0 24 24" fill="none" className='xl:hidden'>
                        <path d="M4 18L20 18" stroke="#FD5956" strokeWidth="2"
                            strokeLinecap="round" />
                        <path d="M4 12L20 12" stroke="#FD5956" strokeWidth="2" strokeLinecap="round" />
                        <path d="M4 6L20 6" stroke="#FD5956" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default Navbar


