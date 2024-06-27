import TrackVisibility from 'react-on-screen';
import { useEffect, useRef, useState } from "react";
import TimelineObserver from "react-timeline-animation";
import { useTranslation } from "react-i18next";
import highlight_01_pic from "../assets/highlight_card_01_img.png";
import highlight_07_pic from "../assets/highlight_card_07_img.png";
import highlight_08_pic from "../assets/highlight_card_08_img.png";
import highlight_09_pic from "../assets/highlight_card_09_img.png";
import highlight_10_pic from "../assets/highlight_card_10_img.png";

import {
    useRive,
    useStateMachineInput,
} from "@rive-app/react-canvas";

import Tilt from 'react-parallax-tilt';

const itineraryLink = "https://www.seimpi.edu.sg/_files/ugd/3bd640_4c4d67a3407a46ea92594282a4000660.pdf";
const pricingLink = "https://www.seimpi.edu.sg/_files/ugd/3bd640_54c9fe5c37094896894c926d1fb5714d.pdf";

const Timeline = ({ setObserver, callback }) => {
    const [seenMessage1, setSeenMessage1] = useState("text-slate-300");
    const [seenMessage2, setSeenMessage2] = useState("text-slate-300");
    const [seenMessage3, setSeenMessage3] = useState("text-slate-300");
    const [seenMessage4, setSeenMessage4] = useState("text-slate-300");
    const [seenMessage5, setSeenMessage5] = useState("text-slate-300");
    const [seenMessage6, setSeenMessage6] = useState("text-slate-300");
    const [message1Width, setmessage1Width] = useState("w-[100%] opacity-100");
    const [message2Width, setmessage2Width] = useState("w-[100%] opacity-100");
    const [message3Width, setmessage3Width] = useState("w-[100%] opacity-100");
    const [message4Width, setmessage4Width] = useState("w-[100%] opacity-100");
    const [message5Width, setmessage5Width] = useState("w-[100%] opacity-100");
    const [message6Width, setmessage6Width] = useState("w-[100%] opacity-100");

    const timeline1 = useRef(null);
    const timeline2 = useRef(null);
    const timeline3 = useRef(null);
    const timeline4 = useRef(null);
    const timeline5 = useRef(null);
    const timeline6 = useRef(null);
    const circle1 = useRef(null);
    const circle2 = useRef(null);
    const circle3 = useRef(null);
    const circle4 = useRef(null);
    const circle5 = useRef(null);
    const circle6 = useRef(null);

    const { RiveComponent: MapRivPlay } = useRive({
        src: "map.riv",
        stateMachines: "stateMachine",
        artboard: "artboard",
        autoplay: true,
    });



    const callback1 = () => {
        setSeenMessage1("text-theme02")
        setmessage1Width("w-[100%] opacity-100")
    };

    const callback2 = () => {
        setSeenMessage2("text-theme02")
        setmessage2Width("w-[100%] opacity-100")
    };

    const callback3 = () => {
        setSeenMessage3("text-theme02")
        setmessage3Width("w-[100%] opacity-100")
    };

    const callback4 = () => {
        setSeenMessage4("text-theme02")
        setmessage4Width("w-[100%] opacity-100")
    };

    const callback5 = () => {
        setSeenMessage5("text-theme02")
        setmessage5Width("w-[100%] opacity-100")
    };

    const callback6 = () => {
        setSeenMessage6("text-theme02")
        setmessage6Width("w-[100%] opacity-100")
    };

    useEffect(() => {
        setObserver(timeline1.current);
        setObserver(timeline2.current);
        setObserver(timeline3.current);
        setObserver(timeline4.current);
        setObserver(timeline5.current);
        setObserver(timeline6.current);
        setObserver(circle1.current, callback1);
        setObserver(circle2.current, callback2);
        setObserver(circle3.current, callback3);
        setObserver(circle4.current, callback4);
        setObserver(circle5.current, callback5);
        setObserver(circle6.current, callback6);
    }, []);

    const { t } = useTranslation();

    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-col items-center">
                <Tilt>
                    <div className="border bg-theme04 border-theme02 mx-8 mb-8">
                        <div className="m-4 p-8 bg-theme02 inverted-corners">
                            <div className="flex flex-col text-center font-palanquindark text-theme07 text-lg">
                                {t("itineraryDate")}
                            </div>
                        </div>
                    </div>
                </Tilt>
                <div className={"items-center h-[323px] w-[352px] md:h-[500px] md:w-[544.89px] "}>
                    <MapRivPlay />
                </div>
            </div>
            <div id="timeline1" ref={timeline1} className="timeline-bar" />
            <div className="relative flex flex-col">
                <div id="circle1" ref={circle1} className={"timeline-node self-center " + seenMessage1}>
                    {t("itineraryNodeTitle01")}
                </div>
                <div className={"whitespace-pre-line text-center bg-theme04 border border-theme02 transition-all duration-1000 " + (message1Width)}>
                    <div className="flex flex-col md:flex-row">
                        <img src={highlight_07_pic} alt="highlight_card_image" className="ms-4 h-auto w-auto max-h-[150px] max-w-[150px] my-8 border-4 border-theme02 rounded-[50%]" />
                        <div className="m-4 p-8 bg-theme02 inverted-corners font-palanquin font-normal text-lg text-theme07 text-start">
                            <span className="font-palanquin"><b className="font-palaquindark">{t("itineraryNode01Bold01")}</b>{t("itineraryNode01Text01")}</span><br />
                            <span className="font-palanquin"><b className="font-palaquindark">{t("itineraryNode01Bold02")}</b>{t("itineraryNode01Text02")}</span><br />
                            <span className="font-palanquin"><b className="font-palaquindark">{t("itineraryNode01Bold03")}</b>{t("itineraryNode01Text03")}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div id="timeline2" ref={timeline2} className="timeline-bar" />
            <div className="relative flex flex-col">
                <div id="circle2" ref={circle2} className={"timeline-node self-center " + seenMessage2}>
                    {t("itineraryNodeTitle02")}
                </div>
                <div className={"whitespace-pre-line text-center bg-theme04 border border-theme02 transition-all duration-1000 " + (message2Width)}>
                    <div className="flex flex-col md:flex-row">
                        <img src={highlight_01_pic} alt="highlight_card_image" className="ms-4 h-auto w-auto max-h-[150px] max-w-[150px] my-8 border-4 border-theme02 rounded-[50%]" />
                        <div className="m-4 p-8 bg-theme02 inverted-corners font-palanquin font-normal text-lg text-theme07 text-start">
                            <span className="font-palanquin"><b className="font-palaquindark">{t("itineraryNode02Bold01")}</b>{t("itineraryNode02Text01")}</span><br />
                            <span className="font-palanquin"><b className="font-palaquindark">{t("itineraryNode02Bold02")}</b>{t("itineraryNode02Text02")}</span><br />
                            <span className="font-palanquin"><b className="font-palaquindark">{t("itineraryNode02Bold03")}</b>{t("itineraryNode02Text03")}</span><br />
                            <span className="font-palanquin"><b className="font-palaquindark">{t("itineraryNode02Bold04")}</b>{t("itineraryNode02Text04")}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div id="timeline3" ref={timeline3} className="timeline-bar" />
            <div className="relative flex flex-col">
                <div id="circle3" ref={circle3} className={"timeline-node self-center " + seenMessage3}>
                    {t("itineraryNodeTitle03")} 
                </div>
                <div className={"whitespace-pre-line text-center bg-theme04 border border-theme02 transition-all duration-1000 " + (message3Width)}>
                    <div className="flex flex-col md:flex-row">
                        <img src={highlight_08_pic} alt="highlight_card_image" className="ms-4 h-auto w-auto max-h-[150px] max-w-[150px] my-8 border-4 border-theme02 rounded-[50%]" />
                        <div className="m-4 p-8 bg-theme02 inverted-corners font-palanquin font-normal text-lg text-theme07 text-start">
                            <span className="font-palanquin"><b className="font-palaquindark">{t("itineraryNode03Bold01")}</b>{t("itineraryNode03Text01")}</span><br />
                            <span className="font-palanquin"><b className="font-palaquindark">{t("itineraryNode03Bold02")}</b>{t("itineraryNode03Text02")}</span><br />
                            <span className="font-palanquin"><b className="font-palaquindark">{t("itineraryNode03Bold03")}</b>{t("itineraryNode03Text03")}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div id="timeline4" ref={timeline4} className="timeline-bar" />
            <div className="relative flex flex-col">
                <div id="circle4" ref={circle4} className={"timeline-node self-center " + seenMessage4}>
                    {t("itineraryNodeTitle04")}
                </div>
                <div className={"whitespace-pre-line text-center bg-theme04 border border-theme02 transition-all duration-1000 " + (message4Width)}>
                    <div className="flex flex-col md:flex-row">
                        <img src={highlight_09_pic} alt="highlight_card_image" className="ms-4 h-auto w-auto max-h-[150px] max-w-[150px] my-8 border-4 border-theme02 rounded-[50%]" />
                        <div className="m-4 p-8 bg-theme02 inverted-corners font-palanquin font-normal text-lg text-theme07 text-start">
                            <span className="font-palanquin"><b className="font-palaquindark">{t("itineraryNode04Bold01")}</b>{t("itineraryNode04Text01")}</span><br />
                            <span className="font-palanquin"><b className="font-palaquindark">{t("itineraryNode04Bold02")}</b>{t("itineraryNode04Text02")}</span><br />
                            <span className="font-palanquin"><b className="font-palaquindark">{t("itineraryNode04Bold03")}</b>{t("itineraryNode04Text03")}</span><br />
                            <span className="font-palanquin"><b className="font-palaquindark">{t("itineraryNode04Bold04")}</b>{t("itineraryNode04Text04")}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div id="timeline5" ref={timeline5} className="timeline-bar" />
            <div className="relative flex flex-col">
                <div id="circle5" ref={circle5} className={"timeline-node self-center " + seenMessage5}>
                    {t("itineraryNodeTitle05")}
                </div>
                <div className={"whitespace-pre-line text-center bg-theme04 border border-theme02 transition-all duration-1000 " + (message5Width)}>
                    <div className="flex flex-col md:flex-row">
                        <img src={highlight_10_pic} alt="highlight_card_image" className="ms-4 h-auto w-auto max-h-[150px] max-w-[150px] my-8 border-4 border-theme02 rounded-[50%]" />
                        <div className="m-4 p-8 bg-theme02 inverted-corners font-palanquin font-normal text-lg text-theme07 text-start">
                            <span className="font-palanquin"><b className="font-palaquindark">{t("itineraryNode05Bold01")}</b>{t("itineraryNode05Text01")}</span><br />
                            <span className="font-palanquin"><b className="font-palaquindark">{t("itineraryNode05Bold02")}</b>{t("itineraryNode05Text02")}</span><br />
                            <span className="font-palanquin"><b className="font-palaquindark">{t("itineraryNode05Bold03")}</b>{t("itineraryNode05Text03")}</span><br />
                            <span className="font-palanquin"><b className="font-palaquindark">{t("itineraryNode05Bold04")}</b>{t("itineraryNode05Text04")}</span><br />
                            <span className="font-palanquin"><b className="font-palaquindark">{t("itineraryNode05Bold05")}</b>{t("itineraryNode05Text05")}</span><br />
                            <span className="font-palanquin"><b className="font-palaquindark">{t("itineraryNode05Bold06")}</b>{t("itineraryNode05Text06")}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div id="timeline6" ref={timeline6} className="timeline-bar" />
            <div className="relative flex flex-col">
                <div id="circle6" ref={circle6} className={"timeline-node self-center " + seenMessage6}>
                    {t("itineraryNodeTitle06")}
                </div>
                <div className={"whitespace-pre-line text-center bg-theme04 border border-theme02 transition-all duration-1000 " + (message6Width)}>
                    <div className="flex flex-col md:flex-row">
                        <img src={highlight_01_pic} alt="highlight_card_image" className="ms-4 h-auto w-auto max-h-[150px] max-w-[150px] my-8 border-4 border-theme02 rounded-[50%]" />
                        <div className="m-4 p-8 bg-theme02 inverted-corners font-palanquin font-normal text-lg text-theme07 text-start content-center">
                            <span className="font-palanquin"><b className="font-palaquindark">{t("itineraryNode06Bold01")}</b>{t("itineraryNode06Text01")}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const ItineraryComponent = () => {
    const { t } = useTranslation();

    return (
        <section id="itinerary" className="w-full bg-theme01">
            <TrackVisibility>
                {({ isVisible }) =>
                    <div className={"py-8 mx-6 lg:mx-[10rem] border-2 border-x-theme02 border-y-transparent flex flex-col transition-all duration-1000 "}>
                        <div className="text-center py-14">
                            <h1 className="font-protestrevolution font-medium text-6xl text-theme02">{t("itineraryHeader")}</h1>
                        </div>
                        <div className="mb-12">
                            <TimelineObserver
                                initialColor="#FFEFD7"
                                fillColor="#41819F"
                                handleObserve={(setObserver) => (
                                    <Timeline
                                        className="h-[300px] w-[5px]"
                                        setObserver={setObserver}
                                    />
                                )}
                            />
                        </div>
                        <div className="flex flex-col md:flex-row justify-center">
                            <Tilt>
                                <a href={itineraryLink}>
                                    <div className="border border-theme02 mx-8 mb-8">
                                        <div className="m-4 p-8 bg-theme02 inverted-corners">
                                            <div className="flex flex-col text-center font-palanquindark text-theme07 text-lg">
                                                {t("itineraryDownload")}
                                            </div>
                                        </div>
                                    </div>
                                </a>

                            </Tilt>
                            <Tilt>
                                <a href={pricingLink}>
                                    <div className="border border-theme02 mx-8 mb-8" >
                                        <div className="m-4 p-8 bg-theme02 inverted-corners">
                                            <div className="flex flex-col text-center font-palanquindark text-theme07 text-lg">
                                                {t("itineraryPricing")}
                                            </div>
                                        </div>
                                    </div>
                                </a>

                            </Tilt>
                        </div>
                    </div>}
            </TrackVisibility>
        </section>
    )
}