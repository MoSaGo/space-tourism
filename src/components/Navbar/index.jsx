import React from "react"
import {
  Cindicator,
  Dindicator,
  Hindicator,
  Navbarcontainer,
  Tindicator,
} from "./navbar.styles"
import { Link, useLocation } from "react-router-dom"

const Navbar = () => {
  let location = useLocation()
  return (
    <Navbarcontainer>
      <Link style={{ textDecoration: "none", color: "white" }} to={"/"}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          00 Home
          {location.pathname === "/" && <Hindicator id="hind"></Hindicator>}
        </div>
      </Link>
      <Link
        style={{ textDecoration: "none", color: "white" }}
        to={"/destination"}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          01 Destination
          {location.pathname === "/destination" && (
            <Dindicator id="dind"></Dindicator>
          )}
        </div>
      </Link>
      <Link style={{ textDecoration: "none", color: "white" }} to={"/crew"}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          02 Crew
          {location.pathname === "/crew" && <Cindicator id="cind"></Cindicator>}
        </div>
      </Link>
      <Link
        style={{ textDecoration: "none", color: "white" }}
        to={"/technology"}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          03 Technology
          {location.pathname === "/technology" && (
            <Tindicator id="tind"></Tindicator>
          )}
        </div>
      </Link>
    </Navbarcontainer>
  )
}

export default Navbar
