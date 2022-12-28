import { HeaderWrapper } from "./style"
import logo from '../../assets/images/logo.svg'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

const Header = () => {
    return(
        <HeaderWrapper>
            <img src={logo} />
            <div className="social">
                <a href="https://github.com/MatheusTrindade5201" target='_blank'><AiFillGithub /></a>
                <a href="https://www.linkedin.com/in/matheus-trindade5201/" target='_blank'><AiFillLinkedin /></a>
            </div>
        </HeaderWrapper>
    )
}

export default Header