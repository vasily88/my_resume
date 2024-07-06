import { Routes,Route } from "react-router-dom"
import { useState } from "react"
import './App.css'

import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import MouseMove from "./components/MouseMove/MouseMove"
import HomePage from "./components/HomePage/HomePage"
import MyWorks from "./components/MyWorks/MyWorks"
import Resume from "./components/Resume/Resume"
import Sidebar from "./components/sidebar/Sidebar"

function App() {

  const [positionImage,setPositionImage] = useState({x:0,y:0})

  const getDataFromMouseMove = (dataFromMouse) => {

      setPositionImage({x:dataFromMouse.x/100,y:dataFromMouse.y/100*-1})
  }

  return (
    <>
      <div className="main">
        <div className="centerPage">

          <Header />

          <Routes>
            <Route path="" element={<HomePage positionImage={positionImage}/>} />
            <Route path="/my-works" element={<MyWorks />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>

          <Footer />

          <Sidebar />
        </div>
      </div>

      <MouseMove getDataFromMouseMove={getDataFromMouseMove}/>
    </>
  )
}

export default App
