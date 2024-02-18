"use client";
import React from 'react'
import { useDarkMode } from '../darkmode/darkmodecontext';

const Video = () => {
    const { darkMode } = useDarkMode()
    return (
        <div className={`flex justify-center flex-col items-center bg-primary ${darkMode && "bg-secondary"} pt-10 pb-10`}>
            <h1 className={`font-bold text-4xl tracking-tight text-primary ${darkMode && "text-secondary"} text-left w-5/6`}> Videos</h1>

            <div className='w-5/6 mt-5'>
                <iframe className={`w-full h-1/2 rounded-xl aspect-video`} src="https://www.youtube.com/embed/gpCf3qTcayY?si=mI_7Uu7Fa1dTklI9" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
        </div>
    )
}

export default Video