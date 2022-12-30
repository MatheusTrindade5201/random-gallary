import Banner from "@/components/banner"
import Gallery from "@/components/gallery"
import Header from "@/components/header"
import GlobalStyle from "@/styles/globalStyle"
import ModalWindow from "@/components/modal"
import { useState } from "react"

function App() {

  const [expandedImage, setExpandedImage] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="App">
      <Header />
      <Banner />
      <ModalWindow setModalOpen={setModalOpen} open={modalOpen} expandedImage={expandedImage}/>
      <Gallery setModalOpen={setModalOpen} setExpandedImage={setExpandedImage}/>
      <GlobalStyle />
    </div>
  )
}

export default App
