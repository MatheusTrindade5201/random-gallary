import { useEffect, useState } from "react"
import { galleryImages } from "@/services/api"
import Card from "./card"
import { GalleryWrapper } from "./style"

const Gallery = ({setExpandedImage, setModalOpen}) => {

    const [gallery, setGallery] = useState([])

    useEffect(() => {
        galleryImages(setGallery)
    })

    return(
        <GalleryWrapper>
            {gallery.map(image => <Card setModalOpen={setModalOpen} setExpandedImage={setExpandedImage} key={image.id} author={image.author} source={image.download_url} />)}
        </GalleryWrapper>
    )
}

export default Gallery