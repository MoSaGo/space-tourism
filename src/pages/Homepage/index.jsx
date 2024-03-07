import React from "react"
import {
  Bigcircle,
  Circle,
  Circlecontainer,
  Homecontainer,
  Infocontainer,
  Paragraph,
  Subtitle,
  Title,
} from "./homepage.styles"
import { useSelector } from "react-redux"

const Homepage = () => {
  const productState = useSelector((store) => store.products)
  const data = productState.products

  return (
    <Homecontainer>
      <Infocontainer id="info">
        <Subtitle>SO, YOU WANT TO TRAVEL TO</Subtitle>
        <br />
        <Title>SPACE</Title>
        <br />
        <Paragraph>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </Paragraph>
      </Infocontainer>
      <Circlecontainer>
        <Bigcircle>
          <Circle>EXPLORE</Circle>
        </Bigcircle>
      </Circlecontainer>
    </Homecontainer>
  )
}

export default Homepage
