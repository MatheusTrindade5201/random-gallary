import styled from "styled-components";

export const GalleryWrapper = styled.div`
    margin: 3vw;
    display: flex;
    flex-wrap: wrap;
    column-gap: 4rem;
    row-gap: 1rem;
    justify-content: center;
`

export const LoadMore = styled.button`
    margin-left: calc(50% - 100px) ;
    margin-bottom: 2rem;
    padding: .5rem 1rem;
    font-size: 2rem;
    width: 200px;
    background-color: #B9C0FF;
    border: none;
    transition: .2s;

    &:hover{
        opacity: .8;
        cursor: pointer;
    }
`