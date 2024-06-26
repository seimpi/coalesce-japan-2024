import TrackVisibility from 'react-on-screen';

export const HeaderComponent = () => {

    return( 
        <section id="header">
            <TrackVisibility partialVisibility>
                {({ isVisible }) =>
                <div className={"transition-all duration-1000 " + (isVisible ? "opacity-100" : "opacity-0")}>
                    <section id="title" className="bg-theme02 py-[300px]">
                        <h1 className="font-bebasneue text-9xl text-theme01 text-center">Coalesce</h1>
                    </section>
                </div>}
            </TrackVisibility>
        </section>
        
    )
}