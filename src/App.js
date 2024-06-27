import './App.css';
import { HeaderComponent } from './components/HeaderComponent';
import { OverlayComponent } from './components/OverlayComponent';
import { IntroComponent } from './components/IntroComponent';
import { HighlightsComponent } from './components/HighlightsComponent';
import { ItineraryComponent } from './components/ItineraryComponent';
import { FormComponent } from './components/FormComponent';
import { ProgressBarComponent } from './components/ProgressBarComponent';
import { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { motion, useScroll, useTransform } from "framer-motion";

function App() {
  const formRef = useRef(null);
  const { t, i18n: {changeLanguage, language} } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(language)
  const [rerender, setrerender] = useState(0)

  const handleChangeLanguage = () => {
    const newLanguage = currentLanguage === "en" ? "zh" : "en";
    setCurrentLanguage(newLanguage);
    changeLanguage(newLanguage);
    setrerender(Math.random());
  }

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const buttonY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);



  return (
    <div className="App">
      <ProgressBarComponent />
      <div ref={ref} className="w-full h-screen absolute inset-0 flex flex-col md:flex-row self-end justify-end md:justify-center items-center md:items-end">
        <motion.button className="z-30 mb-4" style={{ y: buttonY }} onClick={() => formRef.current?.scrollIntoView({
          behavior: "smooth"
        })} whileHover={{ scale: 1.3 }}>
          <div className="border border-theme02 m-4">
            <div className="m-2 p-4 bg-theme02 inverted-corners">
              <div className="flex flex-col text-center font-protestrevolution px-16">
                {t('signUp')}
              </div>
            </div>
          </div>
        </motion.button>
        <motion.button className="z-30 mb-4" style={{ y: buttonY }} onClick={handleChangeLanguage} whileHover={{ scale: 1.3 }}>
          <div className="border border-theme02 m-4">
            <div className="m-2 p-4 bg-theme02 inverted-corners">
              <div className="flex flex-col text-center font-protestrevolution px-16">
                {t('switchLang')}
              </div>
            </div>
          </div>
        </motion.button>
      </div>
      <OverlayComponent />
      <HeaderComponent key={currentLanguage}/>
      <IntroComponent />
      <HighlightsComponent />
      <ItineraryComponent />
      <FormComponent key={rerender} innerRef={formRef} />
    </div>
  );
}

export default App;
