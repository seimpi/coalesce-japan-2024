import Tilt from 'react-parallax-tilt';

export const HighlightsCardComponent = ({text, image}) => {
    return(
        <Tilt>
            <div className="border-2 border-theme01 mx-8 my-4 max-w-[300px]">
                <div className="bg-theme01 inverted-corners m-4">
                    <div className="flex flex-col items-center py-4">
                        <div className="border-2 border-theme02 rounded-[50%] px-8 mb-4">
                            <img src={image} alt="highlight_card_image" className="h-auto w-auto max-h-[150px] max-w-[150px] my-8 border-4 border-theme02 rounded-[50%]"/>
                        </div>
                        <div className="font-palanquindark font-medium text-2xl text-theme05 pb-4 px-4 text-center">{text}</div>
                    </div>
                </div>
            </div>
        </Tilt>
    )
}