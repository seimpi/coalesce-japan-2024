import TrackVisibility from 'react-on-screen';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { HighlightsCardComponent } from './HighlightsCardComponent';
import highlight_01_pic from "../assets/highlight_card_01_img.png";
import highlight_02_pic from "../assets/highlight_card_02_img.png";
import highlight_03_pic from "../assets/highlight_card_03_img.png";
import highlight_04_pic from "../assets/highlight_card_04_img.png";
import highlight_05_pic from "../assets/highlight_card_05_img.png";
import highlight_06_pic from "../assets/highlight_card_06_img.png";

const responsive = {
    lg: {
        breakpoint: { max: 1024, min: 768 },
        items: 3,
        slidesToSlide: 1 // optional, default to 1.
      },
      md: {
        breakpoint: { max: 768, min: 640 },
        items: 2,
        slidesToSlide: 1 // optional, default to 1.
      },
      sm: {
        breakpoint: { max: 640, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
      }
  };

export const HighlightsComponent = () => {
    return(
        <section id="highlights" className="w-full bg-theme02">
            <TrackVisibility partialVisibility>
            {({ isVisible }) =>
            <div className={"transition-all duration-1000 " + (isVisible ? "opacity-100" : "opacity-0")}>
                <div className="py-8 mx-[10rem] border-2 border-x-theme01 border-y-transparent flex flex-col">
                    <div className="text-center py-14">
                        <h1 className="font-palanquindark font-medium text-6xl text-theme01">Highlights</h1>
                    </div>
                </div>
                <div className="py-8 border-2 border-y-theme01 border-x-transparent">
                    <Carousel 
                    responsive={responsive} 
                    infinite={true}
                    swipeable={true}
                    draggable={true}
                    showDots={false}
                    >
                        <div>
                            <HighlightsCardComponent text={"Masterclass with University Professor"} image={highlight_01_pic}/>
                        </div>
                        <div>
                            <HighlightsCardComponent text={"Attend Concerts performed in Japan"} image={highlight_02_pic}/>
                        </div>
                        <div>
                            <HighlightsCardComponent text={"Immersion with Local Japanese Students"} image={highlight_03_pic}/>
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
                    </Carousel>;
                </div>
                <div className="py-8 mx-[10rem] border-2 border-x-theme01 border-y-transparent">
                    
                </div>
            </div>}
            </TrackVisibility>
        </section>
    )
}