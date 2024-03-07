import React, { useEffect, useState } from "react"
import {
  Datacontainer,
  Destinationcontainer,
  Distance,
  Imagecontainer,
  Infocontainer,
  Line,
  Maincontainer,
  Navbarcontainer,
  Pagetitle,
  Paragraph,
  Star,
  Time,
} from "./destination.styles"
import { useSelector } from "react-redux"

const Destination = () => {
  const [isMoon, setIsMoon] = useState(true)
  const [isMars, setIsMars] = useState(false)
  const [isEuropa, setIsEuropa] = useState(false)
  const [isTitan, setIsTitan] = useState(false)

  const productState = useSelector((store) => store.products)
  const data = productState.products
  var planet = [
    {
      image: data[0].destinations[0].images.png,
      star: data[0].destinations[0].name,
      text: data[0].destinations[0].description,
      distance: data[0].destinations[0].distance,
      time: data[0].destinations[0].travel,
    },
    {
      image: data[0].destinations[1].images.png,
      star: data[0].destinations[1].name,
      text: data[0].destinations[1].description,
      distance: data[0].destinations[1].distance,
      time: data[0].destinations[1].travel,
    },
    {
      image: data[0].destinations[2].images.png,
      star: data[0].destinations[2].name,
      text: data[0].destinations[2].description,
      distance: data[0].destinations[2].distance,
      time: data[0].destinations[2].travel,
    },
    {
      image: data[0].destinations[3].images.png,
      star: data[0].destinations[3].name,
      text: data[0].destinations[3].description,
      distance: data[0].destinations[3].distance,
      time: data[0].destinations[3].travel,
    },
  ]
  return (
    <div>
      {isMoon && (
        <Destinationcontainer>
          <Pagetitle>
            <span id="number">01</span>
            <span id="title">Pick your destination</span>
          </Pagetitle>
          <Maincontainer>
            <Imagecontainer>
              <img src={planet[0].image} alt="" />
            </Imagecontainer>
            <Infocontainer>
              <Navbarcontainer>
                <span
                  id="moon"
                  onClick={() => {
                    setIsMoon(true)
                    setIsMars(false)
                    setIsEuropa(false)
                    setIsTitan(false)
                  }}
                >
                  Moon
                  {isMoon && <Line></Line>}
                </span>
                <span
                  id="mars"
                  onClick={() => {
                    setIsMoon(false)
                    setIsMars(true)
                    setIsEuropa(false)
                    setIsTitan(false)
                  }}
                >
                  Mars
                  {isMars && <Line></Line>}
                </span>
                <span
                  id="europa"
                  onClick={() => {
                    setIsMoon(false)
                    setIsMars(false)
                    setIsEuropa(true)
                    setIsTitan(false)
                  }}
                >
                  Europa
                  {isEuropa && <Line></Line>}
                </span>
                <span
                  id="titan"
                  onClick={() => {
                    setIsMoon(false)
                    setIsMars(false)
                    setIsEuropa(false)
                    setIsTitan(true)
                  }}
                >
                  Titan
                  {isTitan && <Line></Line>}
                </span>
              </Navbarcontainer>
              <Star>{planet[0].star}</Star>
              <Paragraph>{planet[0].text}</Paragraph>
              <div
                id="bigline"
                style={{
                  width: "100%",
                  height: "1px",
                  backgroundColor: "#979797",
                  borderColor: "#383B4B",
                }}
              ></div>
              <Datacontainer>
                <div id="dis">
                  <span className="title">AVG. DISTANCE</span>
                  <Distance>{planet[0].distance}</Distance>
                </div>
                <div id="tim">
                  <span className="title">Est. travel time</span>
                  <Time>{planet[0].time}</Time>
                </div>
              </Datacontainer>
            </Infocontainer>
          </Maincontainer>
        </Destinationcontainer>
      )}
      {isMars && (
        <Destinationcontainer>
          <Pagetitle>
            <span id="number">01</span>
            <span id="title">Pick your destination</span>
          </Pagetitle>
          <Maincontainer>
            <Imagecontainer>
              <img src={planet[1].image} alt="" />
            </Imagecontainer>
            <Infocontainer>
              <Navbarcontainer>
                <span
                  id="moon"
                  onClick={() => {
                    setIsMoon(true)
                    setIsMars(false)
                    setIsEuropa(false)
                    setIsTitan(false)
                  }}
                >
                  Moon
                  {isMoon && <Line></Line>}
                </span>
                <span
                  id="mars"
                  onClick={() => {
                    setIsMoon(false)
                    setIsMars(true)
                    setIsEuropa(false)
                    setIsTitan(false)
                  }}
                >
                  Mars
                  {isMars && <Line></Line>}
                </span>
                <span
                  id="europa"
                  onClick={() => {
                    setIsMoon(false)
                    setIsMars(false)
                    setIsEuropa(true)
                    setIsTitan(false)
                  }}
                >
                  Europa
                  {isEuropa && <Line></Line>}
                </span>
                <span
                  id="titan"
                  onClick={() => {
                    setIsMoon(false)
                    setIsMars(false)
                    setIsEuropa(false)
                    setIsTitan(true)
                  }}
                >
                  Titan
                  {isTitan && <Line></Line>}
                </span>
              </Navbarcontainer>
              <Star>{planet[1].star}</Star>
              <Paragraph>{planet[1].text}</Paragraph>
              <div
                id="bigline"
                style={{
                  width: "100%",
                  height: "1px",
                  backgroundColor: "#979797",
                  borderColor: "#383B4B",
                }}
              ></div>
              <Datacontainer>
                <div id="dis">
                  <span className="title">AVG. DISTANCE</span>
                  <Distance>{planet[1].distance}</Distance>
                </div>
                <div id="tim">
                  <span className="title">Est. travel time</span>
                  <Time>{planet[1].time}</Time>
                </div>
              </Datacontainer>
            </Infocontainer>
          </Maincontainer>
        </Destinationcontainer>
      )}
      {isEuropa && (
        <Destinationcontainer>
          <Pagetitle>
            <span id="number">01</span>
            <span id="title">Pick your destination</span>
          </Pagetitle>
          <Maincontainer>
            <Imagecontainer>
              <img src={planet[2].image} alt="" />
            </Imagecontainer>
            <Infocontainer>
              <Navbarcontainer>
                <span
                  id="moon"
                  onClick={() => {
                    setIsMoon(true)
                    setIsMars(false)
                    setIsEuropa(false)
                    setIsTitan(false)
                  }}
                >
                  Moon
                  {isMoon && <Line></Line>}
                </span>
                <span
                  id="mars"
                  onClick={() => {
                    setIsMoon(false)
                    setIsMars(true)
                    setIsEuropa(false)
                    setIsTitan(false)
                  }}
                >
                  Mars
                  {isMars && <Line></Line>}
                </span>
                <span
                  id="europa"
                  onClick={() => {
                    setIsMoon(false)
                    setIsMars(false)
                    setIsEuropa(true)
                    setIsTitan(false)
                  }}
                >
                  Europa
                  {isEuropa && <Line></Line>}
                </span>
                <span
                  id="titan"
                  onClick={() => {
                    setIsMoon(false)
                    setIsMars(false)
                    setIsEuropa(false)
                    setIsTitan(true)
                  }}
                >
                  Titan
                  {isTitan && <Line></Line>}
                </span>
              </Navbarcontainer>
              <Star>{planet[2].star}</Star>
              <Paragraph>{planet[2].text}</Paragraph>
              <div
                id="bigline"
                style={{
                  width: "100%",
                  height: "1px",
                  backgroundColor: "#979797",
                  borderColor: "#383B4B",
                }}
              ></div>
              <Datacontainer>
                <div id="dis">
                  <span className="title">AVG. DISTANCE</span>
                  <Distance>{planet[2].distance}</Distance>
                </div>
                <div id="tim">
                  <span className="title">Est. travel time</span>
                  <Time>{planet[2].time}</Time>
                </div>
              </Datacontainer>
            </Infocontainer>
          </Maincontainer>
        </Destinationcontainer>
      )}
      {isTitan && (
        <Destinationcontainer>
          <Pagetitle>
            <span id="number">01</span>
            <span id="title">Pick your destination</span>
          </Pagetitle>
          <Maincontainer>
            <Imagecontainer>
              <img src={planet[3].image} alt="" />
            </Imagecontainer>
            <Infocontainer>
              <Navbarcontainer>
                <span
                  id="moon"
                  onClick={() => {
                    setIsMoon(true)
                    setIsMars(false)
                    setIsEuropa(false)
                    setIsTitan(false)
                  }}
                >
                  Moon
                  {isMoon && <Line></Line>}
                </span>
                <span
                  id="mars"
                  onClick={() => {
                    setIsMoon(false)
                    setIsMars(true)
                    setIsEuropa(false)
                    setIsTitan(false)
                  }}
                >
                  Mars
                  {isMars && <Line></Line>}
                </span>
                <span
                  id="europa"
                  onClick={() => {
                    setIsMoon(false)
                    setIsMars(false)
                    setIsEuropa(true)
                    setIsTitan(false)
                  }}
                >
                  Europa
                  {isEuropa && <Line></Line>}
                </span>
                <span
                  id="titan"
                  onClick={() => {
                    setIsMoon(false)
                    setIsMars(false)
                    setIsEuropa(false)
                    setIsTitan(true)
                  }}
                >
                  Titan
                  {isTitan && <Line></Line>}
                </span>
              </Navbarcontainer>
              <Star>{planet[3].star}</Star>
              <Paragraph>{planet[3].text}</Paragraph>
              <div
                id="bigline"
                style={{
                  width: "100%",
                  height: "1px",
                  backgroundColor: "#979797",
                  borderColor: "#383B4B",
                }}
              ></div>
              <Datacontainer>
                <div id="dis">
                  <span className="title">AVG. DISTANCE</span>
                  <Distance>{planet[3].distance}</Distance>
                </div>
                <div id="tim">
                  <span className="title">Est. travel time</span>
                  <Time>{planet[3].time}</Time>
                </div>
              </Datacontainer>
            </Infocontainer>
          </Maincontainer>
        </Destinationcontainer>
      )}
    </div>
  )
}

export default Destination
