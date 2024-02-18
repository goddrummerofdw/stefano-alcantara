"use client"
import React from "react";
import { motion } from "framer-motion";
import { useDarkMode } from "./darkmodecontext";

const DarkModeSwitch = () => {
    const [isOn, setIsOn] = React.useState(false);
    const { darkMode, setDarkMode } = useDarkMode()
    const spring = {
        type: "spring",
        stiffness: 700,
        damping: 30
    };

    const toggleSwitch = () => {
        setIsOn(!isOn);
        setDarkMode((prev) => !prev)
    }
    // ${isOn && "justify-end"}
    return (
        <div
            className={`flex justify-start rounded-full cursor-pointer box-border absolute right-2 top-3 w-14 h-8 p-2 ${darkMode ? "bg-primary" : "bg-main"}`}
            onClick={toggleSwitch}
        >
            <motion.div className={`w-4 h-4 rounded-full ${darkMode ? "bg-main" : "bg-primary"}`} layout transition={spring} />
        </div>
    );
}


export default DarkModeSwitch