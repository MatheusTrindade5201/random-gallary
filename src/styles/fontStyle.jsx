import { createGlobalStyle } from "styled-components";
import inter from '../assets/fonts/static/Inter-Regular.ttf'

const FontStyle = createGlobalStyle`
    @font-face {
        font-family: 'Inter';
        src: local('Inter')
        url(${inter}) format('truetype');
        font-weight: 500;
        font-display: swap
    }
`

export default FontStyle