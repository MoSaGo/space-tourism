import styled from "styled-components"

export const Backgroundcontainer = styled.div``
export const Home = styled.div`
  background-image: url("/assets/home/background-home-desktop.jpg");
  @media (max-width: 768px) {
    background-image: url("/assets/home/background-home-tablet.jpg");
  }
  @media (max-width: 375px) {
    background-image: url("/assets/home/background-home-mobile.jpg");
  }
`
export const Destination = styled.div`
  background-image: url("/assets/destination/background-destination-desktop.jpg");
  @media (max-width: 768px) {
    background-image: url("/assets/destination/background-destination-tablet.jpg");
  }
  @media (max-width: 375px) {
    background-image: url("/assets/destination/background-destination-mobile.jpg");
  }
`
export const Crew = styled.div`
  background-image: url("/assets/crew/background-crew-desktop.jpg");
  @media (max-width: 768px) {
    background-image: url("/assets/crew/background-crew-tablet.jpg");
  }
  @media (max-width: 375px) {
    background-image: url("/assets/crew/background-crew-mobile.jpg");
  }
`
export const Technology = styled.div`
  background-image: url("/assets/technology/background-technology-desktop.jpg");
  @media (max-width: 768px) {
    background-image: url("/assets/technology/background-technology-tablet.jpg");
  }
  @media (max-width: 375px) {
    background-image: url("/assets/technology/background-technology-mobile.jpg");
  }
`
