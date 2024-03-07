import React, { useState } from "react"
import { Headercontainer, Line } from "./header.styles"
import Navbar from "../../components/Navbar"

const Header = () => {
  const [isMenu, setIsMenu] = useState(false)
  function changemenu() {
    setIsMenu((previousState) => !previousState)
  }
  return (
    <Headercontainer>
      <div id="image">
        <img src="/assets/Logo.svg" alt="" />
      </div>
      <Line id="line"></Line>
      <div id="nav">
        <Navbar />
      </div>
      <div id="burguer" onClick={changemenu}>
        <img src="/assets/shared/icon-hamburger.svg" alt="" />
      </div>
      {isMenu && (
        <div>
          <div id="close" onClick={changemenu}>
            <img src="/assets/shared/icon-close.svg" alt="" />
          </div>
          <Navbar />
        </div>
      )}
    </Headercontainer>
  )
}

export default Header
