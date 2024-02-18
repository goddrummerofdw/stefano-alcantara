"use client";
import React from 'react'
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion'
import { imageArray } from './images'
import { useDarkMode } from '../darkmode/darkmodecontext';


const Masonry = () => {
    const [showImage, setShowImage] = React.useState(false)
    const [info, setinfo] = React.useState<any>();
    const { darkMode } = useDarkMode()

    const variants = {
        visible: {
            transition: { duration: 1, type: "spring", stiffness: 50 },
            overflow: "hidden"

        },
        hidden: {
            scale: 1,
            opacity: 0,
            transition: { duration: 1, type: "spring", stiffness: 50 }
        },

    }; 

    return (
        <div id="masonry" className={`flex justify-center items-center flex-col bg-primary ${darkMode && "bg-secondary"}`}>

            <h1 className={`z-10 font-bold text-4xl tracking-tight text-primary ${darkMode && "text-secondary"} text-left w-5/6`}> Gallery</h1>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-5/6 mt-10 ">

                {imageArray.map((e: any, i: number) => {
                    return <motion.div key={i}>
                        <motion.div  >
                            <Image
                                className="w-full h-auto rounded-xl "
                                src={e.image}
                                alt="masonry-image"
                                width="500"
                                height="500"
                                onClick={() => {
                                    // document.body.classList.add('overflow-hidden'),
                                        setShowImage(!showImage)
                                    setinfo(e)
                                }}
                            />

                        </motion.div>

{/*                         
                        <AnimatePresence>
                            {showImage && (

                                <div className='flex fixed w-full h-screen top-0 left-0 bg-zinc-900 justify-center items-center cursor-pointer z-10  '
                                    onClick={() => {
                                        setShowImage(!showImage)
                                        document.body.classList.remove('overflow-hidden')
                                    }}>
                                    <div className='grid w-full bg-white grid-cols-1 sm:grid-cols-2 rounded-xl h-3/4'>
                                      
                                        <motion.div
                                            variants={variants}
                                            animate={showImage ? "visible" : "hidden"}
                                            exit={{ scale: 1, opacity: 0 }}
                                            className='relative w-full h-auto'
                                        >

                                            <Image
                                                className='absolute max-lg:rounded-t-xl lg:rounded-l-xl w-full object-cover'
                                                src={info.image.src}
                                                alt="masonry-image"                                    
                                                fill
                                                onClick={() => {
                                                    document.body.classList.remove('overflow-hidden');
                                                    setShowImage(!showImage)
                                                }}
                                            />
                                        </motion.div>
                                
                                        <div className='h-64 p-8'>
                                            <h2 className='font-bold'>{info.title}</h2>
                                            <p className=''>{info.text}</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </AnimatePresence> */}
                    </motion.div>

                })}
            </div>
        </div>
    )
}

export default Masonry