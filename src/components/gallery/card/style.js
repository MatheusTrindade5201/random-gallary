import styled from "styled-components";

export const CardWrapper = styled.div`
    position: relative;
    width: fit-content;

    img{
        width: 500px;
        height: 333px;
    }

    p, .expand{
        position: absolute;
        color: white;
        background-color: #154580;
    }

    p{
        bottom: 0;
        right: 0;
        padding: .2rem 1rem;
        opacity: .8;
    }

    .expand{
        top: 0;
        right: 0;
        padding: .5rem;
        font-size: 1.5rem;
        transition: .2s
    }

    .expand:hover{
        font-size: 2rem;
        cursor: pointer;
    }
`