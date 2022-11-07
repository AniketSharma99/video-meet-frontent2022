import React from 'react'
import More from "../../resources/images/Icons/More2.svg"
const Morebtn = () => {

const handleClick=()=>{
    console.log("more is click");
}

    return (
        <div className='video_button_container ' >
            <img
                className="video_button_image"
                onClick={handleClick}
                src={More}
                alt="img"
            />
        </div>
    )
}

export default Morebtn