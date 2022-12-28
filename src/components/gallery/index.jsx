import { useEffect, useState } from "react"
import { galleryImages } from "@/services/api"
import Card from "./card"
import { GalleryWrapper } from "./style"

const Gallery = () => {

    const [gallery, setGallery] = useState([])

    useEffect(() => {
        galleryImages(setGallery)
    })

    return(
        <GalleryWrapper>
            {gallery.map(image => <Card author={image.author} source={image.download_url} />)}
        </GalleryWrapper>
    )
}

export default Gallery