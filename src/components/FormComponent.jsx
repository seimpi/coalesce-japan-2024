import TrackVisibility from 'react-on-screen';
import Tilt from 'react-parallax-tilt';
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { useRef } from "react";
import splitStringUsingRegex from "../utils/splitStringUsingRegex";
import { useTranslation } from "react-i18next";

import { FaUniversalAccess } from "react-icons/fa6";
import { FaGlobeAsia } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";

import logos from "../assets/Logo.png";

export const FormComponent = ({ innerRef }) => {
    const ref = useRef(null);
    const { t } = useTranslation();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
    const cityY = useTransform(scrollYProgress, [0, 1], ["0%", "110%"])
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "150%"])
    const subtextY = useTransform(scrollYProgress, [0, 1], ["0%", "150%"])

    const headingSplitWithRegex = splitStringUsingRegex(t("FormBannerHeading"));
    const subheadingSplitWithRegex = splitStringUsingRegex(t("FormBannerSubheading"));

    const charVariants = {
        hidden: {
            opacity: 0
        },
        reveal: {
            opacity: 1
        }
    }


    return (
        <section id="form" className="w-full bg-theme02">
            <TrackVisibility partialVisibility>
                {({ isVisible }) =>
                    <div>
                        <div className={"py-8 mx-6 lg:mx-[10rem] border-2 border-x-theme01 border-y-transparent flex flex-col transition-all duration-1000 " + (isVisible ? "opacity-100" : "opacity-0")}>
                            <div className="text-center py-14">
                                <h1 className="font-protestrevolution font-medium text-6xl text-theme01 mb-8">{t("FormHeader")}</h1>
                                <div className="flex flex-row justify-center">
                                    <div className="flex flex-col items-center">
                                        <Tilt>
                                            <div className="border border-theme01 m-4 w-fit">
                                                <div className="m-4 p-8 bg-theme01 inverted-corners text-theme05 flex items-center">
                                                    <span><FaUniversalAccess className="inline-flex self-center me-2 mb-1" /><b className="font-palanquindark">{t("FormNode01Bold")}</b>{t("FormNode01Text")}</span>
                                                </div>
                                            </div>
                                        </Tilt>
                                        <Tilt>
                                            <div className="border border-theme01 m-4">
                                                <div className="m-4 p-8 bg-theme01 inverted-corners text-theme05 flex items-center">
                                                    <span><FaGlobeAsia className="inline-flex self-center me-2 mb-1" /><b className="font-palanquindark">{t("FormNode02Bold")}</b>{t("FormNode02Text")}</span>
                                                </div>
                                            </div>
                                        </Tilt>
                                        <Tilt>
                                            <div className="border border-theme01 m-4">
                                                <div className="m-4 p-8 bg-theme01 inverted-corners text-theme05 flex items-center">
                                                    <span><FaHeart className="inline-flex self-center me-2 mb-1" /><b className="font-palanquindark">{t("FormNode03Bold")}</b>{t("FormNode03Text")}</span>
                                                </div>
                                            </div>
                                        </Tilt>
                                        <Tilt>
                                            <div className="border border-theme01 m-4">
                                                <div className="m-4 p-8 bg-theme01 inverted-corners text-theme05 flex items-center">
                                                    <span><FaPeopleGroup className="inline-flex self-center me-2 mb-1" /><b className="font-palanquindark">{t("FormNode04Bold")}</b>{t("FormNode04Text")}</span>
                                                </div>
                                            </div>
                                        </Tilt>
                                    </div>
                                    <div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div ref={innerRef} className="pb-8 border-2 border-y-theme01 border-x-transparent">
                            <div ref={ref} className={"transition-all duration-1000 w-full h-screen overflow-hidden relative grid place-items-center"}>
                                <div className="flex flex-col">
                                    <motion.h1
                                        className="font-protestrevolution text-6xl md:text-9xl text-white text-center z-[20] drop-shadow-xl"
                                        style={{ y: textY }}
                                        initial="hidden"
                                        whileInView="reveal"
                                        transition={{ staggerChildren: 0.02 }}
                                    >
                                        {headingSplitWithRegex.map(char => (
                                            <motion.span key={char} transition={{ duration: 0.5 }} variants={charVariants}>{char}</motion.span>
                                        ))}
                                        <motion.p
                                            className="text-2xl text-white text-center z-[30] mx-8 md:mx-32 whitespace-pre-line drop-shadow-xl"
                                            style={{ y: subtextY }}
                                            initial="hidden"
                                            whileInView="reveal"
                                            transition={{ staggerChildren: 0.02 }}
                                        >
                                            {subheadingSplitWithRegex.map(char => (
                                                <motion.span key={char} transition={{ duration: 0.02 }} variants={charVariants}>{char}</motion.span>
                                            ))}
                                        </motion.p>
                                    </motion.h1>

                                </div>

                                <motion.div
                                    className="absolute inset-0 z-[0]"
                                    style={{
                                        backgroundImage: `url("/header-bg-sky-02.png")`,
                                        backgroundPosition: "top",
                                        backgroundSize: "cover",
                                        y: backgroundY
                                    }}
                                />
                                <div
                                    className="absolute inset-x-0 top-0 -bottom-36 z-[15]"
                                    style={{
                                        backgroundImage: `url("/header-bg-city.png")`,
                                        backgroundPosition: "bottom",
                                        backgroundSize: "cover",
                                        y: cityY,
                                        opacity: 0.5
                                    }}
                                />


                            </div>
                            <div className="border border-theme01 my-4 mx-0 md:mx-16">
                                <div className="m-4 p-8 bg-theme01 inverted-corners text-theme05 flex items-center">
                                    <div className="flex flex-col w-full items-center">
                                        {t("FormCTA01")}
                                        <span><BsFillTelephoneFill className="inline-flex self-center me-2 mb-1" /><b className="font-palanquindark">{t("FormTel")}</b>6737 6731</span>
                                        <span><FaWhatsapp className="inline-flex self-center me-2 mb-1" /><b className="font-palanquindark">{t("FormWA")}</b>9028 2308</span>
                                        <div className="my-4">{t("FormCTA02")}</div>
                                        <div className="bg-white p-4 rounded-sm">
                                            <iframe src="https://www.cognitoforms.com/f/cgyXnEfOjEexsxSjbf9bwA/36" className="w-[300px] md:w-[450px] lg:w-[600px] h-[700px]" title="coalesce-signup-form"></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center py-14 flex flex-col items-center">
                                <img src={logos} alt="logos" />
                            </div>
                        </div>
                    </div>}
            </TrackVisibility>
        </section >
    )
}