import TrackVisibility from 'react-on-screen';
import React, { useEffect, useRef, useState } from "react";
import TimelineObserver from "react-timeline-animation";

import highlight_01_pic from "../assets/highlight_card_01_img.png";
import highlight_07_pic from "../assets/highlight_card_07_img.png";
import highlight_08_pic from "../assets/highlight_card_08_img.png";
import highlight_09_pic from "../assets/highlight_card_09_img.png";
import highlight_10_pic from "../assets/highlight_card_10_img.png";

import {
    useRive,
    useStateMachineInput,
} from "@rive-app/react-canvas";


const Timeline = ({ setObserver, callback }) => {
    const [seenMessage1, setSeenMessage1] = useState("text-slate-300");
    const [seenMessage2, setSeenMessage2] = useState("text-slate-300");
    const [seenMessage3, setSeenMessage3] = useState("text-slate-300");
    const [seenMessage4, setSeenMessage4] = useState("text-slate-300");
    const [seenMessage5, setSeenMessage5] = useState("text-slate-300");
    const [seenMessage6, setSeenMessage6] = useState("text-slate-300");
    const [message1Width, setmessage1Width] = useState("w-[0%] opacity-0 h-[0px]");
    const [message2Width, setmessage2Width] = useState("w-[0%] opacity-0 h-[0px]");
    const [message3Width, setmessage3Width] = useState("w-[0%] opacity-0 h-[0px]");
    const [message4Width, setmessage4Width] = useState("w-[0%] opacity-0 h-[0px]");
    const [message5Width, setmessage5Width] = useState("w-[0%] opacity-0 h-[0px]");
    const [message6Width, setmessage6Width] = useState("w-[0%] opacity-0 h-[0px]");

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

    return (
        <div className="flex flex-col items-center">
            <div id="timeline1" ref={timeline1} className="timeline-bar" />
            <div className="relative flex flex-col">
                <div id="circle1" ref={circle1} className={"timeline-node self-center " + seenMessage1}>
                    15/11 - Welcome to Tokyo!
                </div>
                <div className={"whitespace-pre-line text-center bg-theme04 border border-theme02 transition-all duration-1000 " + (message1Width)}>
                    <div className="flex flex-row">
                        <img src={highlight_07_pic} alt="highlight_card_image" className="ms-4 h-auto w-auto max-h-[150px] max-w-[150px] my-8 border-4 border-theme02 rounded-[50%]" />
                        <div className="m-4 p-8 bg-theme02 inverted-corners font-palanquin font-normal text-lg text-theme07 text-start">
                            <span className="font-palanquin"><b className="font-palaquindark">Arrival in Tokyo:</b> Begin your journey with a warm welcome in Japan's vibrant capital.</span><br />
                            <span className="font-palanquin"><b className="font-palaquindark">Dinner:</b> Savour authentic Japanese cuisine at a local restuarant.</span><br />
                            <span className="font-palanquin"><b className="font-palaquindark">Accomodation:</b> Relax and unwind in a comfortable Tokyo hotel.</span>
                        </div>
                    </div>
                </div>
            </div>
            <div id="timeline2" ref={timeline2} className="timeline-bar" />
            <div className="relative flex flex-col">
                <div id="circle2" ref={circle2} className={"timeline-node self-center " + seenMessage2}>
                    16/11 - Mastering the Beat
                </div>
                <div className={"whitespace-pre-line text-center bg-theme04 border border-theme02 transition-all duration-1000 " + (message2Width)}>
                    <div className="flex flex-row">
                        <img src={highlight_01_pic} alt="highlight_card_image" className="ms-4 h-auto w-auto max-h-[150px] max-w-[150px] my-8 border-4 border-theme02 rounded-[50%]" />
                        <div className="m-4 p-8 bg-theme02 inverted-corners font-palanquin font-normal text-lg text-theme07 text-start">
                            <span className="font-palanquin"><b className="font-palaquindark">Attending a masterclass:</b> Learn from Professor Tomonori Kousaka 髙坂朋聖 at Musashino Academia Musicae and witness world-class musical expertise up close. Explore the institution's fascinating museum.</span><br />
                            <span className="font-palanquin"><b className="font-palaquindark">Lunch:</b> Savour authentic Japanese cuisine at a local restuarant.</span><br />
                            <span className="font-palanquin"><b className="font-palaquindark">Taiko Drum Experience:</b> Dive into the rhythmic world of traditional Japanese drumming. Feel the powerful beats resonate within your soul.</span><br />
                            <span className="font-palanquin"><b className="font-palaquindark">Dinner & Accomodation:</b> Return to your Tokyo hotel for a restful night. </span>
                        </div>
                    </div>
                </div>
            </div>
            <div id="timeline3" ref={timeline3} className="timeline-bar" />
            <div className="relative flex flex-col">
                <div id="circle3" ref={circle3} className={"timeline-node self-center " + seenMessage3}>
                    17/11 - Joint Concert Extravaganza in Yokohama
                </div>
                <div className={"whitespace-pre-line text-center bg-theme04 border border-theme02 transition-all duration-1000 " + (message3Width)}>
                    <div className="flex flex-row">
                        <img src={highlight_08_pic} alt="highlight_card_image" className="ms-4 h-auto w-auto max-h-[150px] max-w-[150px] my-8 border-4 border-theme02 rounded-[50%]" />
                        <div className="m-4 p-8 bg-theme02 inverted-corners font-palanquin font-normal text-lg text-theme07 text-start">
                            <span className="font-palanquin"><b className="font-palaquindark">Yokohama Museum of Art:</b> Begin your day with an inspiring visit to the Yokohama Museum of Art. Immerse yourself in captivating art exhibitions and see how music and visual art beautifully intertwine, sparking creativity and broadening your horizons.</span><br />
                            <span className="font-palanquin"><b className="font-palaquindark">Lunch & Joint Concert at Kiyoken:</b> Enjoy a sumptuous lunch at the iconic Kiyoken restaurant, renowned for its exquisite Japanese cuisine. Afterward, participate in an extraordinary joint concert with local Japanese students. You are invited to perform and collaborate with the Japanese peers, showcasing your musical talents in a harmonious celebration of cultural exchange. This concert offers a unique opportunity to connect through music, creating unforgettable memories and fostering lifelong friendships.</span><br />
                            <span className="font-palanquin"><b className="font-palaquindark">Dinner & Accomodation:</b> After a day of artistic discovery and musical celebration, settle into your comfortable hotel in Yokohama.</span>
                        </div>
                    </div>
                </div>
            </div>
            <div id="timeline4" ref={timeline4} className="timeline-bar" />
            <div className="relative flex flex-col">
                <div id="circle4" ref={circle4} className={"timeline-node self-center " + seenMessage4}>
                    18/11 - Workshops and Cultural Exchange
                </div>
                <div className={"whitespace-pre-line text-center bg-theme04 border border-theme02 transition-all duration-1000 " + (message4Width)}>
                    <div className="flex flex-row">
                        <img src={highlight_09_pic} alt="highlight_card_image" className="ms-4 h-auto w-auto max-h-[150px] max-w-[150px] my-8 border-4 border-theme02 rounded-[50%]" />
                        <div className="m-4 p-8 bg-theme02 inverted-corners font-palanquin font-normal text-lg text-theme07 text-start">
                            <span className="font-palanquin"><b className="font-palaquindark">Choir and Percussion Workshop at Yokohama Mint Hall:</b> Engage in hands-on workshops designed to enrich your musical skills and creativity. The coaches for these two workshops are veteran musicians in the music scene in Japan!</span><br />
                            <span className="font-palanquin"><b className="font-palaquindark">Lunch:</b> Relish a delightful meal in the heart of Yokohama.</span><br />
                            <span className="font-palanquin"><b className="font-palaquindark">School Exchange Program:</b> Participate in a cultural exchange with a local school. Share and learn from fellow music enthusiasts.</span><br />
                            <span className="font-palanquin"><b className="font-palaquindark">Dinner & Accomodation:</b> Enjoy a delightful dinner before returning to your Tokyo hotel, reflecting on the day’s enriching experiences.</span>
                        </div>
                    </div>
                </div>
            </div>
            <div id="timeline5" ref={timeline5} className="timeline-bar" />
            <div className="relative flex flex-col">
                <div id="circle5" ref={circle5} className={"timeline-node self-center " + seenMessage5}>
                    19/11 - Musical Extravaganza in Tokyo
                </div>
                <div className={"whitespace-pre-line text-center bg-theme04 border border-theme02 transition-all duration-1000 " + (message5Width)}>
                    <div className="flex flex-row">
                        <img src={highlight_10_pic} alt="highlight_card_image" className="ms-4 h-auto w-auto max-h-[150px] max-w-[150px] my-8 border-4 border-theme02 rounded-[50%]" />
                        <div className="m-4 p-8 bg-theme02 inverted-corners font-palanquin font-normal text-lg text-theme07 text-start">
                            <span className="font-palanquin"><b className="font-palaquindark">Tokyo School Exchange Program:</b> Experience first-hand the blend of traditional and contemporary Japanese music education. Additionally, you may have the opportunity to witness a thrilling music competition showcasing the talent of young musicians. Connect with students at a prestigious Tokyo school.</span><br />
                            <span className="font-palanquin"><b className="font-palaquindark">Lunch:</b> Enjoy a lunch that captures the essence of Tokyo's culinary diversity.</span><br />
                            <span className="font-palanquin"><b className="font-palaquindark">Min-on Music Museum:</b>  Explore Japan's musical heritage at this renowned museum.</span><br />
                            <span className="font-palanquin"><b className="font-palaquindark">Hibiya Park Grand Concert Hall:</b>  Explore the concert hall and marvel at its architecture while appreciating the surroundings.</span><br />
                            <span className="font-palanquin"><b className="font-palaquindark">Dinner:</b>  Share a meal and stories with fellow participants, celebrating the day's experiences.</span><br />
                            <span className="font-palanquin"><b className="font-palaquindark">Accomodation:</b> Return to your Tokyo hotel for a night of relaxation.</span>
                        </div>
                    </div>
                </div>
            </div>
            <div id="timeline6" ref={timeline6} className="timeline-bar" />
            <div className="relative flex flex-col">
                <div id="circle6" ref={circle6} className={"timeline-node self-center " + seenMessage6}>
                    20/11 - Return to Singapore
                </div>
                <div className={"whitespace-pre-line text-center bg-theme04 border border-theme02 transition-all duration-1000 " + (message6Width)}>
                    <div className="flex flex-row">
                        <img src={highlight_01_pic} alt="highlight_card_image" className="ms-4 h-auto w-auto max-h-[150px] max-w-[150px] my-8 border-4 border-theme02 rounded-[50%]" />
                        <div className="m-4 p-8 bg-theme02 inverted-corners font-palanquin font-normal text-lg text-theme07 text-start content-center">
                            <span className="font-palanquin"><b className="font-palaquindark">Flight home:</b> Bring back enriching and unforgettable memories from this invaluable musical experience in Japan.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const ItineraryComponent = () => {

    const { rive, RiveComponent: RCom } = useRive({
        src: "map.riv",
        stateMachines: "stateMachine",
        artboard: "artboard",
        autoplay: true,
    });

    return (
        <section id="itinerary" className="w-full bg-theme01">
            <TrackVisibility partialVisibility>
                {({ isVisible }) =>
                    <div className={"py-8 mx-6 lg:mx-[10rem] border-2 border-x-theme02 border-y-transparent flex flex-col transition-all duration-1000 " + (isVisible ? "opacity-100" : "opacity-0")}>
                        <div className="text-center py-14">
                            <h1 className="font-palanquindark font-medium text-6xl text-theme02">Tour Itinerary</h1>
                        </div>
                        <div className="flex flex-row items-center">
                            <div className="h-[500px] w-full">
                                <RCom />
                            </div>
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
                    </div>}
            </TrackVisibility>
        </section>
    )
}