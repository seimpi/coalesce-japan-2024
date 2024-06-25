import TrackVisibility from 'react-on-screen';

export const FormComponent = () => {
    return(
        <section id="form" className="w-full bg-theme02">
            <TrackVisibility partialVisibility>
            {({ isVisible }) =>
            <div className={"py-8 mx-[10rem] border-2 border-x-theme01 border-y-transparent flex flex-col transition-all duration-1000 " + (isVisible ? "opacity-100" : "opacity-0")}>
                <div className="text-center py-14">
                    <h1 className="font-palanquindark font-medium text-6xl text-theme01">Why Join Us?</h1>
                </div>
            </div>}
            </TrackVisibility>
        </section>
    )
}