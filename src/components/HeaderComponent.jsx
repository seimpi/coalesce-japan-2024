import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { useRef } from "react";
import splitStringUsingRegex from "../utils/splitStringUsingRegex";
import { useTranslation } from "react-i18next";
import taiko_01 from "../assets/banner-child-01.png";
import taiko_02 from "../assets/banner-child-02.png";

export const HeaderComponent = () => {
    const ref = useRef(null);
    const { t } = useTranslation();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "150%"])
    const subtextY = useTransform(scrollYProgress, [0, 1], ["0%", "150%"])

    const headingSplitWithRegex = splitStringUsingRegex(t("BannerHeading"));
    const subheadingSplitWithRegex = splitStringUsingRegex(t("BannerSubheading"));


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
                    <div className="flex flex-row gap-x-8">
                        <motion.img
                            className="hidden lg:block"
                            src={taiko_01}
                            alt=""
                            whileInView="reveal"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 0.8 }} />
                        <div className="flex flex-col justify-center">
                            <motion.h1
                                className="font-protestrevolution text-7xl md:text-9xl text-white text-center z-[-15]"
                                style={{ y: textY }}
                                initial="hidden"
                                whileInView="reveal"
                                transition={{ staggerChildren: 0.02 }}
                                whileHover={{ scale: 1.3 }}
                            >
                                {headingSplitWithRegex.map(char => (
                                    <motion.span key={char} transition={{ duration: 0.5 }} variants={charVariants}>{char}</motion.span>
                                ))}
                                <div className="flex flex-row lg:hidden gap-x-4 justify-center">
                                    <motion.img
                                        className="w-[75px] h-auto"
                                        src={taiko_01}
                                        alt=""
                                        whileInView="reveal"
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }} />
                                    <motion.img
                                        className="w-[75px] h-auto"
                                        src={taiko_02}
                                        alt=""
                                        whileInView="reveal"
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }} />
                                </div>
                                <motion.p
                                    className="text-2xl text-white text-center z-[-15]"
                                    style={{ y: subtextY }}
                                    initial="hidden"
                                    whileInView="reveal"
                                    transition={{ staggerChildren: 0.02 }}
                                    whileHover={{ scale: 1.3 }}
                                >
                                    {subheadingSplitWithRegex.map(char => (
                                        <motion.span key={char} transition={{ duration: 0.5 }} variants={charVariants}>{char}</motion.span>
                                    ))}
                                </motion.p>
                            </motion.h1>
                        </div>
                        <motion.img
                            className="hidden lg:block"
                            src={taiko_02}
                            alt=""
                            whileInView="reveal"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 0.8 }} />
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