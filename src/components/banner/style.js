import styled from "styled-components";

export const BannerWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 2rem 0 0 3vw;

    @keyframes rotation {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(359deg);
        }
    }

    img{
        width: 95%;
        height: 600px;
        box-shadow: -2px 0 20px 2px  rgb(0, 0, 0, .8);

    }

    .loading{
        width: 95%;
        height: 600px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .rotate{
            display:block;
            width: 200px;
            height: 200px;
            border-left: 2px solid white;
            border-top: 2px solid white;
            border-radius: 50%;
            animation: rotation 2s infinite linear;
        }
    }

    .reload {
        display: flex;
        justify-content: space-between;
        gap: 10px;
        flex-grow: 2;
        
        h2{
            display: flex;
            flex-direction:column;
            color: white;
            text-align: center;
            width: 10rem;
            flex-wrap: wrap;;
            align-self: center;

            span{
                height: 2rem
            }
        }

        button{
            width: 50px;
            box-sizing: border-box;;
            padding: 0;
            background-color: #B9C0FF;
            border-radius: 8px 0 0 8px;
            box-shadow: -2px 0 10px 2px  rgb(0, 0, 0, .8);
            border: none;
            cursor: pointer;
            z-index: 2
        }

        .reload__icon{
            font-size: 2rem;
            color: white;
        }
    }
`