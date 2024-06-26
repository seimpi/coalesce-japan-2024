import TrackVisibility from 'react-on-screen';
import Tilt from 'react-parallax-tilt';

import { FaUniversalAccess } from "react-icons/fa6";
import { FaGlobeAsia } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";

export const FormComponent = () => {
    return (
        <section id="form" className="w-full bg-theme02">
            <TrackVisibility partialVisibility>
                {({ isVisible }) =>
                <div>
                    <div className={"py-8 mx-6 lg:mx-[10rem] border-2 border-x-theme01 border-y-transparent flex flex-col transition-all duration-1000 " + (isVisible ? "opacity-100" : "opacity-0")}>
                        <div className="text-center py-14">
                            <h1 className="font-palanquindark font-medium text-6xl text-theme01 mb-8">Why Join Us?</h1>
                            <div className="flex flex-row">
                                <div className="flex flex-col">
                                    <Tilt>
                                        <div className="border border-theme01 m-4">
                                            <div className="m-4 p-8 bg-theme01 inverted-corners text-theme05 flex items-center">
                                                <span><FaUniversalAccess className="inline-flex self-center me-2 mb-1" /><b className="font-palanquindark">Exclusive Access:  </b>Enjoy behind-the-scenes experiences and masterclasses at top musical institutions.</span>
                                            </div>
                                        </div>
                                    </Tilt>
                                    <Tilt>
                                        <div className="border border-theme01 m-4">
                                            <div className="m-4 p-8 bg-theme01 inverted-corners text-theme05 flex items-center">
                                                <span><FaGlobeAsia className="inline-flex self-center me-2 mb-1" /><b className="font-palanquindark">Cultural Immersion:  </b>Participate in workshops and exchange programs, fostering a deep connection with Japan's musical culture.</span>
                                            </div>
                                        </div>
                                    </Tilt>
                                    <Tilt>
                                        <div className="border border-theme01 m-4">
                                            <div className="m-4 p-8 bg-theme01 inverted-corners text-theme05 flex items-center">
                                                <span><FaHeart className="inline-flex self-center me-2 mb-1" /><b className="font-palanquindark">Memorable Experiences:  </b>From the vibrant beats of Taiko drums to the grandeur of Hibiya Park Grand Concert Hall, every moment is designed to inspire.</span>
                                            </div>
                                        </div>
                                    </Tilt>
                                    <Tilt>
                                        <div className="border border-theme01 m-4">
                                            <div className="m-4 p-8 bg-theme01 inverted-corners text-theme05 flex items-center">
                                                <span><FaPeopleGroup className="inline-flex self-center me-2 mb-1" /><b className="font-palanquindark">Community and Connection:  </b>Bond with fellow music enthusiasts and create lifelong memories together.</span>
                                            </div>
                                        </div>
                                    </Tilt>
                                </div>
                                <div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="py-8 border-2 border-y-theme01 border-x-transparent">
                        add graphic here
                        <h1 className="text-center text-8xl font-palanquindark font-semibold text-theme01 mt-12 mb-6">JOIN THE JOURNEY</h1>
                        <div className="text-center text-3xl font-palanquindark font-normal text-theme01 mx-16">
                            Secure your spot on this unique educational tour! Spaces are limited, and we expect high demand for this extraordinary opportunity.
                        </div>
                        <div className="border border-theme01 my-4 mx-16">
                            <div className="m-4 p-8 bg-theme01 inverted-corners text-theme05 flex items-center">
                                <div className="flex flex-col w-full items-center"> 
                                    For more details, and to sign up, contact us at:
                                    <span><BsFillTelephoneFill className="inline-flex self-center me-2 mb-1" /><b className="font-palanquindark">Telephone:  </b>6737 6731</span>
                                    <span><FaWhatsapp className="inline-flex self-center me-2 mb-1" /><b className="font-palanquindark">WhatsApp:  </b>9028 2308</span>
                                    <div className="my-4">or submit the form below:</div>
                                    <div className="bg-white p-4 rounded-sm">
                                        <iframe src="https://www.cognitoforms.com/f/cgyXnEfOjEexsxSjbf9bwA/36" className="w-[300px] md:w-[450px] lg:w-[600px] h-[700px]" title="coalesce-signup-form"></iframe>
                                    </div>  
                                </div>
                            </div>
                        </div>
                        logo logo
                    </div>
                </div>}
            </TrackVisibility>
        </section>
    )
}