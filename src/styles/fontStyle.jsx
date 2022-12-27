import { createGlobalStyle } from "styled-components";
import inter from '../assets/fonts/static/Inter-Regular.ttf'

const FontStyle = createGlobalStyle`
    @font-face {
        font-family: 'Inter';
        src: url(${inter});
    }
`

export default FontStyle