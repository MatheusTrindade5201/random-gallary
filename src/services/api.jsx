export async function imageBanner(setImage){
    try{
        const data = await fetch('https://picsum.photos/5000/3000')
        setImage(data.url);
    }
    catch (error) {
        console.log(error.message);
    }
   
   
}