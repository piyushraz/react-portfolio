import "./second.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Second = () => {
    const text = "As a dedicated Honours BSc candidate at the University of Toronto, specializing in Computer Science and Geographic Information Science and Cartography, my academic journey is intertwined with practical experience. At Environment and Climate Change Canada, I thrived as a Software Developer, where I honed my skills in cloud computing, DevOps, and automation. I'm passionate about leveraging technology for solving solutions, a commitment that fueled my work in developing and contributing significantly to our team's efficiency. My educational pursuits are carefully aligned with my career objectives, preparing me to innovate at the intersection of technology and sustainability.";

    const [key, setKey] = useState(0);  // Key to force re-render of the component

    // Define the animation for each character
    const letterAnimation = {
        hidden: { opacity: 0 },
        visible: (custom) => ({
            opacity: 1,
            transition: { delay: custom * 0.03 } // each letter appears after a delay
        }),
    };

    useEffect(() => {
        const totalAnimationTime = text.length * 0.03 + 2; // Total duration for one full cycle
        const timer = setTimeout(() => {
            setKey(prevKey => prevKey + 1);  // Increment key to re-render component
        }, totalAnimationTime * 1000); // Convert time to milliseconds

        return () => clearTimeout(timer);
    }, [key, text.length]);

    return (
        <div className="second" key={key}>
            <motion.h2
                className="header2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                About Me
            </motion.h2>
            <motion.p
                initial="hidden"
                animate="visible"
                style={{ whiteSpace: "pre-wrap" }}
            >
                {text.split("").map((char, index) => (
                    <motion.span
                        key={index}
                        custom={index}
                        variants={letterAnimation}
                        style={{ display: "inline-block" }}
                    >
                        {char}
                    </motion.span>
                ))}
            </motion.p>
        </div>
    );
}

export default Second;
