import { ModalWrapper } from "./style"

const ModalWindow = ({expandedImage, open, setModalOpen}) => {

    window.onclick = (event) => {
        if(!event.target.classList.contains('modal') && !event.target.classList.contains('expand')){
            setModalOpen(false)
        }
    }

    return (
        <ModalWrapper className="modal" open={open}>
            <button onClick={() => {
                setModalOpen(false)
            }} className="close">X</button>
            <img className="modal" src={expandedImage}/> 
        </ModalWrapper>
    )
}

export default ModalWindow