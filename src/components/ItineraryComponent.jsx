import TrackVisibility from 'react-on-screen';

export const ItineraryComponent = () => {
    return(
        <section id="itinerary" className="w-full bg-theme01">
            <TrackVisibility partialVisibility>
            {({ isVisible }) =>
            <div className={"py-8 mx-[10rem] border-2 border-x-theme02 border-y-transparent flex flex-col transition-all duration-1000 " + (isVisible ? "opacity-100" : "opacity-0")}>
                <div className="text-center py-14">
                    <h1 className="font-palanquindark font-medium text-6xl text-theme02">Tour Itinerary</h1>
                </div>
            </div>}
            </TrackVisibility>
        </section>
    )
}