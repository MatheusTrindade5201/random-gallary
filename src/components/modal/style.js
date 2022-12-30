import styled from "styled-components";

export const ModalWrapper = styled.div`
    width: 80vw;
    height: 80vh;
    z-index: 2;
    position: fixed;
    top: 10vh;
    left: 10vw;
    background-color: #154580;
    padding: 2rem;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
    display: ${({open}) => open ? 'flex' : 'none'};

    img{
        width: 77vw;
        height: 76vh
    }

    .close{
        position: absolute;
        top: 0;
        right: 0;
        background-color: #B9C0FF;
        border: none;
        padding: .5rem 1rem;
        font-size: 2rem;
        opacity: .8;
        transition: .2s
    }

    .close:hover{
        opacity: 1;
        cursor: pointer;
    }
`