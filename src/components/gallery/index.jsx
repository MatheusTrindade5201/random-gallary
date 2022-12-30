import { useEffect, useState } from "react"
import { galleryImages } from "@/services/api"
import Card from "./card"
import { GalleryWrapper, LoadMore } from "./style"

const Gallery = ({setExpandedImage, setModalOpen}) => {

    const [gallery, setGallery] = useState([])
    const [page, setPage] = useState(1);

    useEffect(() => {
        galleryImages(setGallery, page);
    }, [page])

    return(
        <>
            <GalleryWrapper>
                {gallery.map(image => <Card setModalOpen={setModalOpen} setExpandedImage={setExpandedImage} key={image.id} author={image.author} source={image.download_url} />)}
            </GalleryWrapper>
            <LoadMore className="loadMore" onClick={() => {
                setPage(page+1);
                }}>Load more</LoadMore>
        </>
    )
}

export default Gallery