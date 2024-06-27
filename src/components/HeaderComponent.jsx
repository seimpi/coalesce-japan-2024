import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { useRef } from "react";
import splitStringUsingRegex from "../utils/splitStringUsingRegex";

const heading = "Coalesce"
const subheading = "2024 Japan Musical Immersion Experience"

export const HeaderComponent = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "150%"])
    const subtextY = useTransform(scrollYProgress, [0, 1], ["0%", "150%"])

    const headingSplitWithRegex = splitStringUsingRegex(heading);
    const subheadingSplitWithRegex = splitStringUsingRegex(subheading);


    const charVariants = {
        hidden: {
            opacity: 0
        },
        reveal: {
            opacity: 1
        }
    }

    return (
        <section id="header">
            <div>
                <div ref={ref} className={"transition-all duration-1000 w-full h-screen overflow-hidden relative grid place-items-center"}>
                    <div className="flex flex-col">
                        <motion.h1
                            className="font-protestrevolution text-6xl md:text-9xl text-white text-center z-[-15]"
                            style={{ y: textY }}
                            initial="hidden"
                            whileInView="reveal"
                            transition={{ staggerChildren: 0.02 }}
                            whileHover={{ scale: 1.3}}
                        >
                            {headingSplitWithRegex.map(char => (
                                <motion.span key={char} transition={{ duration: 0.5 }} variants={charVariants}>{char}</motion.span>
                            ))}
                            <motion.p
                                className= "text-2xl text-white text-center z-[-15]"
                                style={{ y: subtextY }}
                                initial="hidden"
                                whileInView="reveal"
                                transition={{ staggerChildren: 0.02 }}
                                whileHover={{ scale: 1.3}}
                            >
                                {subheadingSplitWithRegex.map(char => (
                                    <motion.span key={char} transition={{ duration: 0.5 }} variants={charVariants}>{char}</motion.span>
                                ))}
                            </motion.p>
                        </motion.h1>

                    </div>

                    <motion.div
                        className="absolute inset-0 z-[-20]"
                        style={{
                            backgroundImage: `url("/header-bg-sky.png")`,
                            backgroundPosition: "top",
                            backgroundSize: "cover",
                            y: backgroundY
                        }}
                    />
                    <div
                        className="absolute inset-x-0 top-0 -bottom-36 z-[-10]"
                        style={{
                            backgroundImage: `url("/header-bg-mountains.png")`,
                            backgroundPosition: "bottom",
                            backgroundSize: "cover"
                        }}
                    />

                </div>
            </div>
        </section>

    )
}