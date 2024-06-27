import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const OverlayComponent = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const flowersY = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"])

    return (
        <div ref={ref} className="w-screen min-h-[200vh] absolute inset-0 grid place-items-center">
            <motion.div
                className="absolute inset-x-0 -top-8 bottom-0 z-[-5]"
                style={{
                    backgroundImage: `url("/header-bg-flowers.png")`,
                    backgroundPosition: "top",
                    backgroundSize: "cover",
                    y: flowersY
                }}
            />
        </div>
    )
}