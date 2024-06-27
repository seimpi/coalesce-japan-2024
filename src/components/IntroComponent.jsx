import TrackVisibility from 'react-on-screen';
import { useTranslation } from "react-i18next";

import logos from "../assets/Logo.png";

export const IntroComponent = () => {
    const { t } = useTranslation();

    return (
        <section id="intro" className="w-full bg-theme01">
            <TrackVisibility partialVisibility>
                {({ isVisible }) =>
                    <div className={"py-8 mx-6 lg:mx-[10rem] border-2 border-x-theme02 border-y-transparent flex flex-col transition-all duration-1000 " + (isVisible ? "opacity-100" : "opacity-0")}>
                        <div className="text-center px-4 md:px-0 py-14 flex flex-col items-center">
                            <img src={logos} alt="logos" />
                        </div>
                        <div className="text-center py-14">
                            <h1 className="font-protestrevolution font-medium text-6xl md:text-8xl text-theme02">{t("introHeader")}</h1>
                            <h2 className="font-palanquin font-medium text-xl md:text-2xl text-theme02 mt-1">{t("introSubtitle")}</h2>
                        </div>

                        <div className="border border-theme02 m-8">
                            <div className="m-4 p-8 bg-theme02 inverted-corners">
                                <div className="flex flex-col text-center">
                                    <h2 className="mb-4 font-palanquindark font-medium text-2xl text-theme07">{t("introBoxHeader")}</h2>
                                    <hr className="border border-theme07" />
                                    <div className="md:my-4 md:mx-2 font-palanquin font-normal text-lg md:text-xl text-theme07 whitespace-pre-line">
                                        <p>
                                            {t("introBoxText01")}
                                        </p>
                                        <br />
                                        <p>
                                            {t("introBoxText02")}
                                        </p>
                                        <br />
                                        <p>
                                            {t("introBoxText03")}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>}
            </TrackVisibility>
        </section>
    )
}