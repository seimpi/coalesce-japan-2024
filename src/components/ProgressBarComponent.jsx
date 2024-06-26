
import { motion, useScroll, useSpring } from "framer-motion";

export const ProgressBarComponent = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 30,
        damping: 10,
        restDelta: 0.001
      });

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-[5px] bg-theme04 origin-[0%] z-[100]" 
            style={{ scaleX }}
        >

        </motion.div>
    )
}