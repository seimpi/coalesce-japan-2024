import './App.css';
import { HeaderComponent } from './components/HeaderComponent';
import { OverlayComponent } from './components/OverlayComponent';
import { IntroComponent } from './components/IntroComponent';
import { HighlightsComponent } from './components/HighlightsComponent';
import { ItineraryComponent } from './components/ItineraryComponent';
import { FormComponent } from './components/FormComponent';
import { ProgressBarComponent } from './components/ProgressBarComponent';
import { useRef } from "react";

import { motion, useScroll, useTransform } from "framer-motion";

function App() {
  const formRef = useRef(null);

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const buttonY = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);
  const buttonOpacity = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);


  return (
    <div className="App">
      <ProgressBarComponent />
      <div ref={ref} className="w-full h-screen absolute inset-0 flex justify-center items-center mt-32">
        <motion.button className="z-30" style={{ y: buttonY, opacity: buttonOpacity }} onClick={() => formRef.current?.scrollIntoView({
          behavior: "smooth"
        })} whileHover={{ scale: 1.3 }}>
          <div className="border border-theme02 m-4">
            <div className="m-2 p-4 bg-theme02 inverted-corners">
              <div className="flex flex-col text-center font-protestrevolution px-16">
                Sign Up Now!
              </div>
            </div>
          </div>
        </motion.button>
      </div>
      <OverlayComponent />
      <HeaderComponent />
      <IntroComponent />
      <HighlightsComponent />
      <ItineraryComponent />
      <FormComponent innerRef={formRef} />
    </div>
  );
}

export default App;
