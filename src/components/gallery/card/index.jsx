import { CardWrapper } from "./style"
import { BiExpandAlt } from "react-icons/bi"

const Card = ({author, source}) => {
    return(
        <CardWrapper>
            <BiExpandAlt className="expand"/>
            <img src={source} />
            <p>By: {author}</p>
        </CardWrapper>
    )
}

export default Card