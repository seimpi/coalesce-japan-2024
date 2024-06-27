import TrackVisibility from 'react-on-screen';

import logos from "../assets/Logo.png";

export const IntroComponent = () => {
    return (
        <section id="intro" className="w-full bg-theme01">
            <TrackVisibility partialVisibility>
                {({ isVisible }) =>
                    <div className={"py-8 mx-6 lg:mx-[10rem] border-2 border-x-theme02 border-y-transparent flex flex-col transition-all duration-1000 " + (isVisible ? "opacity-100" : "opacity-0")}>
                        <div className="text-center py-14 flex flex-col items-center">
                            <img src={logos} alt="logos" />
                        </div>
                        <div className="text-center py-14">
                            <h1 className="font-protestrevolution font-medium text-8xl text-theme02">Coalesce In Harmony</h1>
                            <h2 className="font-palanquin font-medium text-2xl text-theme02 mt-1">Discover the magic of musical exchange in Japan!</h2>
                        </div>

                        <div className="border border-theme02 m-8">
                            <div className="m-4 p-8 bg-theme02 inverted-corners">
                                <div className="flex flex-col text-center">
                                    <h2 className="mb-4 font-palanquindark font-medium text-2xl text-theme07">Dear Parents and Music Enthusiasts,</h2>
                                    <hr className="border border-theme07" />
                                    <div className="my-4 mx-2 font-palanquin font-normal text-xl text-theme07">
                                        <p>
                                            Are you ready to embark on an unforgettable musical adventure? Join us for
                                            Seimpi Education’s extraordinary educational tour to Japan, Coalesce!
                                        </p>
                                        <p>
                                            This exclusive trip is meticulously crafted to inspire, educate, and immerse
                                            you and your child in the rich cultural tapestry of Japan.
                                        </p>
                                        <p>
                                            Whether you’re a
                                            parent who wants the best for your young musician or a music lover
                                            eager for a unique experience, this tour promises a harmonious blend
                                            of learning and excitement
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