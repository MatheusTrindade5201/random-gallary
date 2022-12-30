#Random Gallary

Esse é um projeto desenvolvido com React.js e styled-components, consumindo a [Lorem Picsum](https://picsum.photos/), uma API com uma galeria de fotos, com o intuido de me familiarizar mais com a biblioteca de estilos, e exertcitar a estruturização de pastas em projetosn e componentização do React.

  - Link do Site-solução: [Random Gallary](https://random-gallary.vercel.app/)

## Preview do produto final

![Captura de tela de 2022-12-30 15-40-39](https://user-images.githubusercontent.com/104238483/210102510-649ea3e0-b6df-4fa2-9d4e-f85740a45a71.png)


## Detalhes do projeto: 

##### Estilo global:

```
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        min-height: 100vh;
        background-image: linear-gradient(#041833, #154580);
        box-sizing: border-box;
        font-family: 'Inter' , sans-serif
    }

`

export default GlobalStyle
```

#### Metodos para consumo da API
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
```
Foi usado o metodo de spread no State da Galleria para que todas vez que ele seja executado, inclua as novas imagens na lista já existente

#### Hooks

Para o controle de renderização da página e chamada da API, usamos os Hooks useState e useEffect. 

#### Desenvolvimento 

Caso queira fazer o clone do repositório, por favor usar o comando abaixo para download das dependencias:
```
npm intall
```
