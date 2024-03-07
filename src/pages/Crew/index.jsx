import React, { useState } from "react"
import {
  Crewcontainer,
  Imagecontainer,
  Infocontainer,
  Main,
  Namecontainer,
  Navcrew,
  Pagetitle,
  Paragrapah,
  Rolecontainer,
} from "../Crew/crew.styles"
import { useSelector } from "react-redux"

const Crew = () => {
  const [isDouglas, setIsDouglas] = useState(true)
  const [isMark, setIsMark] = useState(false)
  const [isVictor, setIsVictor] = useState(false)
  const [isAnousheh, setIsAnousheh] = useState(false)
  const productState = useSelector((store) => store.products)
  const data = productState.products
  var team = [
    {
      image: data[0].crew[0].images.png,
      name: data[0].crew[0].name,
      text: data[0].crew[0].bio,
      role: data[0].crew[0].role,
    },
    {
      image: data[0].crew[1].images.png,
      name: data[0].crew[1].name,
      text: data[0].crew[1].bio,
      role: data[0].crew[1].role,
    },
    {
      image: data[0].crew[2].images.png,
      name: data[0].crew[2].name,
      text: data[0].crew[2].bio,
      role: data[0].crew[2].role,
    },
    {
      image: data[0].crew[3].images.png,
      name: data[0].crew[3].name,
      text: data[0].crew[3].bio,
      role: data[0].crew[3].role,
    },
  ]
  return (
    <div>
      {isDouglas && (
        <div>
          <Pagetitle>
            <span id="number">02</span>
            <span id="title">Meet your crew</span>
          </Pagetitle>
          <Crewcontainer>
            <Infocontainer>
              <Main>
                <Rolecontainer>
                  {isDouglas && team[0].role}
                  {isMark && team[1].role}
                  {isVictor && team[2].role}
                  {isAnousheh && team[3].role}
                </Rolecontainer>
                <Namecontainer>
                  {isDouglas && team[0].name}
                  {isMark && team[1].name}
                  {isVictor && team[2].name}
                  {isAnousheh && team[3].name}
                </Namecontainer>
                <Paragrapah>
                  {isDouglas && team[0].text}
                  {isMark && team[1].text}
                  {isVictor && team[2].text}
                  {isAnousheh && team[3].text}
                </Paragrapah>
                <Navcrew>
                  <div
                    id="douglas"
                    className="selector"
                    onClick={() => {
                      setIsDouglas(true)
                      setIsMark(false)
                      setIsVictor(false)
                      setIsAnousheh(false)
                    }}
                  >
                    {isDouglas && (
                      <div
                        style={{
                          width: "100%",
                          height: "100%",
                          backgroundColor: "white",
                          borderRadius: "100%",
                        }}
                      ></div>
                    )}
                  </div>
                  <div
                    id="mark"
                    className="selector"
                    onClick={() => {
                      setIsDouglas(false)
                      setIsMark(true)
                      setIsVictor(false)
                      setIsAnousheh(false)
                    }}
                  >
                    {isMark && (
                      <div
                        style={{
                          width: "100%",
                          height: "100%",
                          backgroundColor: "white",
                          borderRadius: "100%",
                        }}
                      ></div>
                    )}
                  </div>
                  <div
                    id="victor"
                    className="selector"
                    onClick={() => {
                      setIsDouglas(false)
                      setIsMark(false)
                      setIsVictor(true)
                      setIsAnousheh(false)
                    }}
                  >
                    {isVictor && (
                      <div
                        style={{
                          width: "100%",
                          height: "100%",
                          backgroundColor: "white",
                          borderRadius: "100%",
                        }}
                      ></div>
                    )}
                  </div>
                  <div
                    id="ansari"
                    className="selector"
                    onClick={() => {
                      setIsDouglas(false)
                      setIsMark(false)
                      setIsVictor(false)
                      setIsAnousheh(true)
                    }}
                  >
                    {isAnousheh && (
                      <div
                        style={{
                          width: "100%",
                          height: "100%",
                          backgroundColor: "white",
                          borderRadius: "100%",
                        }}
                      ></div>
                    )}
                  </div>
                </Navcrew>
              </Main>
            </Infocontainer>
            <Imagecontainer>
              {isDouglas && <img src={team[0].image} alt="" />}
              {isMark && <img src={team[1].image} alt="" />}
              {isVictor && <img src={team[2].image} alt="" />}
              {isAnousheh && <img src={team[3].image} alt="" />}
              <div id="linemobile"></div>
            </Imagecontainer>
          </Crewcontainer>
        </div>
      )}
      {isMark && (
        <div>
          <Pagetitle>
            <span id="number">02</span>
            <span id="title">Meet your crew</span>
          </Pagetitle>
          <Crewcontainer>
            <Infocontainer>
              <Main>
                <Rolecontainer>{team[1].role}</Rolecontainer>
                <Namecontainer>{team[1].name}</Namecontainer>
                <Paragrapah>{team[1].text}</Paragrapah>
                <Navcrew>
                  <div
                    id="douglas"
                    className="selector"
                    onClick={() => {
                      setIsDouglas(true)
                      setIsMark(false)
                      setIsVictor(false)
                      setIsAnousheh(false)
                    }}
                  >
                    {isDouglas && (
                      <div
                        style={{
                          width: "100%",
                          height: "100%",
                          backgroundColor: "white",
                          borderRadius: "100%",
                        }}
                      ></div>
                    )}
                  </div>
                  <div
                    id="mark"
                    className="selector"
                    onClick={() => {
                      setIsDouglas(false)
                      setIsMark(true)
                      setIsVictor(false)
                      setIsAnousheh(false)
                    }}
                  >
                    {isMark && (
                      <div
                        style={{
                          width: "100%",
                          height: "100%",
                          backgroundColor: "white",
                          borderRadius: "100%",
                        }}
                      ></div>
                    )}
                  </div>
                  <div
                    id="victor"
                    className="selector"
                    onClick={() => {
                      setIsDouglas(false)
                      setIsMark(false)
                      setIsVictor(true)
                      setIsAnousheh(false)
                    }}
                  >
                    {isVictor && (
                      <div
                        style={{
                          width: "100%",
                          height: "100%",
                          backgroundColor: "white",
                          borderRadius: "100%",
                        }}
                      ></div>
                    )}
                  </div>
                  <div
                    id="ansari"
                    className="selector"
                    onClick={() => {
                      setIsDouglas(false)
                      setIsMark(false)
                      setIsVictor(false)
                      setIsAnousheh(true)
                    }}
                  >
                    {isAnousheh && (
                      <div
                        style={{
                          width: "100%",
                          height: "100%",
                          backgroundColor: "white",
                          borderRadius: "100%",
                        }}
                      ></div>
                    )}
                  </div>
                </Navcrew>
              </Main>
            </Infocontainer>
            <Imagecontainer>
              <img src={team[1].image} alt="" />
              <div id="linemobile"></div>
            </Imagecontainer>
          </Crewcontainer>
        </div>
      )}
      {isVictor && (
        <div>
          <Pagetitle>
            <span id="number">02</span>
            <span id="title">Meet your crew</span>
          </Pagetitle>
          <Crewcontainer>
            <Infocontainer>
              <Main>
                <Rolecontainer>{team[2].role}</Rolecontainer>
                <Namecontainer>{team[2].name}</Namecontainer>
                <Paragrapah>{team[2].text}</Paragrapah>
                <Navcrew>
                  <div
                    id="douglas"
                    className="selector"
                    onClick={() => {
                      setIsDouglas(true)
                      setIsMark(false)
                      setIsVictor(false)
                      setIsAnousheh(false)
                    }}
                  >
                    {isDouglas && (
                      <div
                        style={{
                          width: "100%",
                          height: "100%",
                          backgroundColor: "white",
                          borderRadius: "100%",
                        }}
                      ></div>
                    )}
                  </div>
                  <div
                    id="mark"
                    className="selector"
                    onClick={() => {
                      setIsDouglas(false)
                      setIsMark(true)
                      setIsVictor(false)
                      setIsAnousheh(false)
                    }}
                  >
                    {isMark && (
                      <div
                        style={{
                          width: "100%",
                          height: "100%",
                          backgroundColor: "white",
                          borderRadius: "100%",
                        }}
                      ></div>
                    )}
                  </div>
                  <div
                    id="victor"
                    className="selector"
                    onClick={() => {
                      setIsDouglas(false)
                      setIsMark(false)
                      setIsVictor(true)
                      setIsAnousheh(false)
                    }}
                  >
                    {isVictor && (
                      <div
                        style={{
                          width: "100%",
                          height: "100%",
                          backgroundColor: "white",
                          borderRadius: "100%",
                        }}
                      ></div>
                    )}
                  </div>
                  <div
                    id="ansari"
                    className="selector"
                    onClick={() => {
                      setIsDouglas(false)
                      setIsMark(false)
                      setIsVictor(false)
                      setIsAnousheh(true)
                    }}
                  >
                    {isAnousheh && (
                      <div
                        style={{
                          width: "100%",
                          height: "100%",
                          backgroundColor: "white",
                          borderRadius: "100%",
                        }}
                      ></div>
                    )}
                  </div>
                </Navcrew>
              </Main>
            </Infocontainer>
            <Imagecontainer>
              <img src={team[2].image} alt="" />
              <div id="linemobile"></div>
            </Imagecontainer>
          </Crewcontainer>
        </div>
      )}
      {isAnousheh && (
        <div>
          <Pagetitle>
            <span id="number">02</span>
            <span id="title">Meet your crew</span>
          </Pagetitle>
          <Crewcontainer>
            <Infocontainer>
              <Main>
                <Rolecontainer>{team[3].role}</Rolecontainer>
                <Namecontainer>{team[3].name}</Namecontainer>
                <Paragrapah>{team[3].text}</Paragrapah>
                <Navcrew>
                  <div
                    id="douglas"
                    className="selector"
                    onClick={() => {
                      setIsDouglas(true)
                      setIsMark(false)
                      setIsVictor(false)
                      setIsAnousheh(false)
                    }}
                  >
                    {isDouglas && (
                      <div
                        style={{
                          width: "100%",
                          height: "100%",
                          backgroundColor: "white",
                          borderRadius: "100%",
                        }}
                      ></div>
                    )}
                  </div>
                  <div
                    id="mark"
                    className="selector"
                    onClick={() => {
                      setIsDouglas(false)
                      setIsMark(true)
                      setIsVictor(false)
                      setIsAnousheh(false)
                    }}
                  >
                    {isMark && (
                      <div
                        style={{
                          width: "100%",
                          height: "100%",
                          backgroundColor: "white",
                          borderRadius: "100%",
                        }}
                      ></div>
                    )}
                  </div>
                  <div
                    id="victor"
                    className="selector"
                    onClick={() => {
                      setIsDouglas(false)
                      setIsMark(false)
                      setIsVictor(true)
                      setIsAnousheh(false)
                    }}
                  >
                    {isVictor && (
                      <div
                        style={{
                          width: "100%",
                          height: "100%",
                          backgroundColor: "white",
                          borderRadius: "100%",
                        }}
                      ></div>
                    )}
                  </div>
                  <div
                    id="ansari"
                    className="selector"
                    onClick={() => {
                      setIsDouglas(false)
                      setIsMark(false)
                      setIsVictor(false)
                      setIsAnousheh(true)
                    }}
                  >
                    {isAnousheh && (
                      <div
                        style={{
                          width: "100%",
                          height: "100%",
                          backgroundColor: "white",
                          borderRadius: "100%",
                        }}
                      ></div>
                    )}
                  </div>
                </Navcrew>
              </Main>
            </Infocontainer>
            <Imagecontainer>
              <img src={team[3].image} alt="" />
              <div id="linemobile"></div>
            </Imagecontainer>
          </Crewcontainer>
        </div>
      )}
    </div>
  )
}

export default Crew
