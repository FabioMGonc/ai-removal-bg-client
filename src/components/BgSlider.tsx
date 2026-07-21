import { useState } from "react";
import { assets } from "../assets/assets";

const BgSlider = () => {
    
    const [sliderPosition, setSliderPosition] = useState(50);
    
    const sliderChange = (e:any) => {
        setSliderPosition(e.target.value)
    }

    return (
        <div>
            <h1 className="text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-linear-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent">
                Remova o fundo de suas fotos com <br />alta qualidade e precisão
            </h1>

            <div>
                <img src={assets.image_w_bg} style={{clipPath: `inset(0 ${100.2 - sliderPosition}% 0 0)`}} alt="" />
            </div>
        </div>
    )
}

export default BgSlider;
