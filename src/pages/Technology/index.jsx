import React, { useState } from "react"
import {
  Datacontainer,
  Imagecontainer,
  Infocontainer,
  Main,
  Navcontainer,
  Pagetitle,
  Paragraph,
  Subtitle,
  Technologycontainer,
  Title,
} from "./technology.styles"
import { useSelector } from "react-redux"

const Technology = () => {
  const [isLaunch, setIsLaunch] = useState(true)
  const [isSpaceport, setIsSpaceport] = useState(false)
  const [isCapsule, setIsCapsule] = useState(false)
  const productState = useSelector((store) => store.products)
  const data = productState.products
  var technology = [
    {
      image: data[0].technology[0].images.png,
      name: data[0].technology[0].name,
      text: data[0].technology[0].description,
    },
    {
      image: data[0].technology[1].images.png,
      name: data[0].technology[1].name,
      text: data[0].technology[1].description,
    },
    {
      image: data[0].technology[2].images.png,
      name: data[0].technology[2].name,
      text: data[0].technology[2].description,
    },
  ]
  return (
    <div>
      {isLaunch && (
        <Technologycontainer>
          <Pagetitle>
            <span id="number">03</span>
            <span id="title">SPACE LAUNCH 101</span>
          </Pagetitle>
          <Main>
            <Infocontainer>
              <Navcontainer>
                <div
                  className="selector"
                  onClick={() => {
                    setIsLaunch(true)
                    setIsSpaceport(false)
                    setIsCapsule(false)
                  }}
                >
                  {!isLaunch && 1}
                  {isLaunch && (
                    <div
                      style={{
                        backgroundColor: "white",
                        height: "100%",
                        width: "100%",
                        borderRadius: "100%",
                        color: "black",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      1
                    </div>
                  )}
                </div>
                <div
                  className="selector"
                  onClick={() => {
                    setIsLaunch(false)
                    setIsSpaceport(true)
                    setIsCapsule(false)
                  }}
                >
                  {!isSpaceport && 2}
                  {isSpaceport && (
                    <div
                      style={{
                        backgroundColor: "white",
                        height: "100%",
                        width: "100%",
                        borderRadius: "100%",
                        color: "black",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      2
                    </div>
                  )}
                </div>
                <div
                  className="selector"
                  onClick={() => {
                    setIsLaunch(false)
                    setIsSpaceport(false)
                    setIsCapsule(true)
                  }}
                >
                  {!isCapsule && 3}
                  {isCapsule && (
                    <div
                      style={{
                        backgroundColor: "white",
                        height: "100%",
                        width: "100%",
                        borderRadius: "100%",
                        color: "black",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      3
                    </div>
                  )}
                </div>
              </Navcontainer>
              <Datacontainer>
                <Subtitle>THE TERMINOLOGY…</Subtitle>
                <Title>{technology[0].name}</Title>
                <Paragraph>{technology[0].text}</Paragraph>
              </Datacontainer>
            </Infocontainer>
            <Imagecontainer>
              <div style={{ width: "100%" }}>
                <img
                  id="desktop"
                  src={data[0].technology[0].images.portrait}
                  alt=""
                />
                <img
                  id="tablet"
                  src={data[0].technology[0].images.landscape}
                  alt=""
                />
              </div>
            </Imagecontainer>
          </Main>
        </Technologycontainer>
      )}
      {isSpaceport && (
        <Technologycontainer>
          <Pagetitle>
            <span id="number">03</span>
            <span id="title">SPACE LAUNCH 101</span>
          </Pagetitle>
          <Main>
            <Infocontainer>
              <Navcontainer>
                <div
                  className="selector"
                  onClick={() => {
                    setIsLaunch(true)
                    setIsSpaceport(false)
                    setIsCapsule(false)
                  }}
                >
                  {!isLaunch && 1}
                  {isLaunch && (
                    <div
                      style={{
                        backgroundColor: "white",
                        height: "100%",
                        width: "100%",
                        borderRadius: "100%",
                        color: "black",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      1
                    </div>
                  )}
                </div>
                <div
                  className="selector"
                  onClick={() => {
                    setIsLaunch(false)
                    setIsSpaceport(true)
                    setIsCapsule(false)
                  }}
                >
                  {!isSpaceport && 2}
                  {isSpaceport && (
                    <div
                      style={{
                        backgroundColor: "white",
                        height: "100%",
                        width: "100%",
                        borderRadius: "100%",
                        color: "black",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      2
                    </div>
                  )}
                </div>
                <div
                  className="selector"
                  onClick={() => {
                    setIsLaunch(false)
                    setIsSpaceport(false)
                    setIsCapsule(true)
                  }}
                >
                  {!isCapsule && 3}
                  {isCapsule && (
                    <div
                      style={{
                        backgroundColor: "white",
                        height: "100%",
                        width: "100%",
                        borderRadius: "100%",
                        color: "black",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      3
                    </div>
                  )}
                </div>
              </Navcontainer>
              <Datacontainer>
                <Subtitle>THE TERMINOLOGY…</Subtitle>
                <Title>{technology[1].name}</Title>
                <Paragraph>{technology[1].text}</Paragraph>
              </Datacontainer>
            </Infocontainer>
            <Imagecontainer>
              <div style={{ width: "100%" }}>
                <img
                  id="desktop"
                  src={data[0].technology[1].images.portrait}
                  alt=""
                />
                <img
                  id="tablet"
                  src={data[0].technology[1].images.landscape}
                  alt=""
                />
              </div>
            </Imagecontainer>
          </Main>
        </Technologycontainer>
      )}
      {isCapsule && (
        <Technologycontainer>
          <Pagetitle>
            <span id="number">03</span>
            <span id="title">SPACE LAUNCH 101</span>
          </Pagetitle>
          <Main>
            <Infocontainer>
              <Navcontainer>
                <div
                  className="selector"
                  onClick={() => {
                    setIsLaunch(true)
                    setIsSpaceport(false)
                    setIsCapsule(false)
                  }}
                >
                  {!isLaunch && 1}
                  {isLaunch && (
                    <div
                      style={{
                        backgroundColor: "white",
                        height: "100%",
                        width: "100%",
                        borderRadius: "100%",
                        color: "black",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      1
                    </div>
                  )}
                </div>
                <div
                  className="selector"
                  onClick={() => {
                    setIsLaunch(false)
                    setIsSpaceport(true)
                    setIsCapsule(false)
                  }}
                >
                  {!isSpaceport && 2}
                  {isSpaceport && (
                    <div
                      style={{
                        backgroundColor: "white",
                        height: "100%",
                        width: "100%",
                        borderRadius: "100%",
                        color: "black",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      2
                    </div>
                  )}
                </div>
                <div
                  className="selector"
                  onClick={() => {
                    setIsLaunch(false)
                    setIsSpaceport(false)
                    setIsCapsule(true)
                  }}
                >
                  {!isCapsule && 3}
                  {isCapsule && (
                    <div
                      style={{
                        backgroundColor: "white",
                        height: "100%",
                        width: "100%",
                        borderRadius: "100%",
                        color: "black",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      3
                    </div>
                  )}
                </div>
              </Navcontainer>
              <Datacontainer>
                <Subtitle>THE TERMINOLOGY…</Subtitle>
                <Title>{technology[2].name}</Title>
                <Paragraph>{technology[2].text}</Paragraph>
              </Datacontainer>
            </Infocontainer>
            <Imagecontainer>
              <div style={{ width: "100%" }}>
                <img
                  id="desktop"
                  src={data[0].technology[2].images.portrait}
                  alt=""
                />
                <img
                  id="tablet"
                  src={data[0].technology[2].images.landscape}
                  alt=""
                />
              </div>
            </Imagecontainer>
          </Main>
        </Technologycontainer>
      )}
    </div>
  )
}

export default Technology
