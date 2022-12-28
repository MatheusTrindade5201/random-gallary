import { useEffect, useState } from "react"
import { imageBanner } from "@/services/api"
import { BannerWrapper } from "./style"
import { AiOutlineReload } from 'react-icons/ai'

const Banner = () => {

    const [image, setImage] = useState(false)

    useEffect(() => {
        setImage(false)
        imageBanner(setImage)
    },[])

    return(
        <BannerWrapper>
            <div className="reload">
                <h2>T r y <span /> A n o t h e r <span /> I m a g e !</h2>
                <button onClick={() => {setImage(false)
                    imageBanner(setImage)}}><AiOutlineReload className="reload__icon"/></button>
            </div>
            {image === false ? <span className="loading"><span className="rotate"/></span> :  <img src={image} /> }
        </BannerWrapper>
    )
}

export default Banner