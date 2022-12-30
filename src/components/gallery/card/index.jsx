import { CardWrapper } from "./style"
import { BiExpandAlt } from "react-icons/bi"

const Card = ({author, source, setExpandedImage, setModalOpen}) => {
    return(
        <CardWrapper>
            <BiExpandAlt 
                onClick={(event) => {
                    setExpandedImage(source);
                    setModalOpen(true);
                }} 
                className="expand"/>
            <img src={source} />
            <p>By: {author}</p>
        </CardWrapper>
    )
}

export default Card