import TrackVisibility from 'react-on-screen';
import "react-multi-carousel/lib/styles.css";
import { HighlightsCardComponent } from './HighlightsCardComponent';
import highlight_01_pic from "../assets/highlight_card_01_img.png";
import highlight_02_pic from "../assets/highlight_card_02_img.png";
import highlight_03_pic from "../assets/highlight_card_03_img.png";
import highlight_04_pic from "../assets/highlight_card_04_img.png";
import highlight_05_pic from "../assets/highlight_card_05_img.png";
import highlight_06_pic from "../assets/highlight_card_06_img.png";

export const HighlightsComponent = () => {
    return(
        <section id="highlights" className="w-full bg-theme02">
            <TrackVisibility partialVisibility>
            {({ isVisible }) =>
            <div className={"transition-all duration-1000 " + (isVisible ? "opacity-100" : "opacity-0")}>
                <div className="py-8 mx-6 lg:mx-[10rem] border-2 border-x-theme01 border-y-transparent flex flex-col">
                    <div className="text-center py-14">
                        <h1 className="font-protestrevolution font-medium text-6xl text-theme01">Highlights</h1>
                    </div>
                </div>
                <div className="py-8 border-2 border-y-theme01 border-x-transparent">
                    <div className="hidden lg:flex flex-row justify-center">
                        <div>
                            <HighlightsCardComponent text={"Masterclass with University Professor"} image={highlight_01_pic}/>
                        </div>
                        <div>
                            <HighlightsCardComponent text={"Attend Concerts performed in Japan"} image={highlight_02_pic}/>
                        </div>
                        <div>
                            <HighlightsCardComponent text={"Immersion with local Japanese students"} image={highlight_03_pic}/>
                        </div>
                    </div>
                    <div className="hidden lg:flex flex-row justify-center">
                        <div>
                            <HighlightsCardComponent text={"Visit museums and go on local educational tours"} image={highlight_04_pic}/>
                        </div>
                        <div>
                            <HighlightsCardComponent text={"Aural & Percussion Workshops by local teachers"} image={highlight_05_pic}/>
                        </div>
                        <div>
                            <HighlightsCardComponent text={"Learn traditional Japanese instruments"} image={highlight_06_pic}/>
                        </div>
                    </div>
                    <div className="flex lg:hidden flex-col justify-center items-center">
                        <div>
                            <HighlightsCardComponent text={"Masterclass with University Professor"} image={highlight_01_pic}/>
                        </div>
                        <div>
                            <HighlightsCardComponent text={"Attend Concerts performed in Japan"} image={highlight_02_pic}/>
                        </div>
                        <div>
                            <HighlightsCardComponent text={"Immersion with local Japanese students"} image={highlight_03_pic}/>
                        </div>
                        <div>
                            <HighlightsCardComponent text={"Visit museums and go on local educational tours"} image={highlight_04_pic}/>
                        </div>
                        <div>
                            <HighlightsCardComponent text={"Aural & Percussion Workshops by local teachers"} image={highlight_05_pic}/>
                        </div>
                        <div>
                            <HighlightsCardComponent text={"Learn traditional Japanese instruments"} image={highlight_06_pic}/>
                        </div>
                    </div>
                </div>
                <div className="py-8 mx-6 lg:mx-[10rem] border-2 border-x-theme01 border-y-transparent">
                    
                </div>
            </div>}
            </TrackVisibility>
        </section>
    )
}