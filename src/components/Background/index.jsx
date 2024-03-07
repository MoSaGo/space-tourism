import React, { Children } from "react"
import {
  Backgroundcontainer,
  Crew,
  Destination,
  Home,
  Technology,
} from "./background.styles"
import { useLocation } from "react-router-dom"

const Background = (props) => {
  const { children, ...rest } = props
  var location = useLocation()
  return (
    <Backgroundcontainer>
      {location.pathname === "/" && <Home>{children}</Home>}
      {location.pathname === "/destination" && (
        <Destination>{children}</Destination>
      )}
      {location.pathname === "/crew" && <Crew>{children}</Crew>}
      {location.pathname === "/technology" && (
        <Technology>{children}</Technology>
      )}
    </Backgroundcontainer>
  )
}
export default Background
