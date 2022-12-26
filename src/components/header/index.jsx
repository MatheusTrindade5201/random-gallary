import { HeaderWrapper } from "./style"
import logo from '../../assets/images/logo.svg'

const Header = () => {
    return(
        <HeaderWrapper>
            <img src={logo} />
        </HeaderWrapper>
    )
}

export default Header