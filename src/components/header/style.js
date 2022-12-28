import styled from "styled-components";

export const HeaderWrapper = styled.header`
    padding: 2rem 3vw;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img{
        width: 360px
    }

    .social {
        display: flex;
        gap: 1rem
    }

    a{
        font-size: 3rem;
        color: white;
        transition: .2s
    }

    a:hover{
        color: #B9C0FF;
        cursor: pointer;
    }
`