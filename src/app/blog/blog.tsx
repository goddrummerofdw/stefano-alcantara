"use client";
import React from 'react'
import { imageArray } from './blogdata'
import Image from 'next/image';
import { motion } from "framer-motion";
import { useDarkMode } from '../darkmode/darkmodecontext';
const Blog = () => {
    let carousel: any = React.useRef()
    const { darkMode } = useDarkMode()


    return (
        <div className={`flex flex-col justify-center items-center  bg-primary text-primary ${darkMode && "bg-secondary text-secondary "}`}>
            <div className='w-5/6 '>
                <h1 className={`z-10 font-bold text-4xl tracking-tight text-primary${darkMode && "text-secondary"} text-left`}> Latest <span className='text-main'>Blog</span></h1>

                <p className='text-left'>Sed nec pharetra felis, in ultrices neque. Phasellus varius semper tellus, ac imperdiet erat commodo id. Aenean lobortis justo et velit ornare malesuada.</p>
            </div>

            <div ref={carousel} className='flex justify-center'>
                <div className='flex w-5/6 justify-between items-center max-lg:flex-col'>
                    {imageArray.map((e: { src: string, title: string, text: string }, i: number) => {
                        return <motion.div
                            key={i}
                            className='w-[30%] max-lg:w-full mt-6'>
                            <Image
                                className='w-full'
                                src={e.src}
                                alt="blog-image"
                                height="500"
                                width="500"
                            />
                            <div className={`shadow-xl rounded-3xl ${darkMode && "shadow-slate-600 shadow-md"} `}>
                                <h2 className='pl-6 pt-2 font-bold'>{e.title}</h2>
                                <p className='p-6'>{e.text}</p>
                            </div>
                        </motion.div>
                    })}
                </div>
            </div >
        </div>
    )
}
export default Blog