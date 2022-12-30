export async function imageBanner(setImage){
    try{
        const data = await fetch('https://picsum.photos/5000/3000')
        setImage(data.url);
    }
    catch (error) {
        console.log(error.message);
    }
   
   
}

export async function galleryImages (setGallery, page){
    try{
        const data = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=30`)
        const json = await data.json()
        setGallery(gallery => [...gallery, ...json])
    }
    catch (error) {
        console.log(error.message);
    }
}