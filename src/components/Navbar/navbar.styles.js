import styled from "styled-components"

export const Navbarcontainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 830px;
  backdrop-filter: invert(11%);
  padding: 39px 165px 0px 123px;
  text-transform: uppercase;
  @media (max-width: 1000px) {
    padding-right: 100px;
  }
  @media (max-width: 850px) {
    padding-right: 48px;
  }
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 39px 48px 0px 48px;
    #hind {
      width: 36px;
    }
    #dind {
      width: 50px;
    }
    #cind {
      width: 36px;
    }
    #tind {
      width: 50px;
    }
  }
  @media (max-width: 460px) {
    flex-direction: column;
    position: absolute;
    right: 0px;
    top: 0px;
    width: 254px;
    height: 100vh;
    backdrop-filter: blur(18px);
    z-index: 8;
  }
`
export const Hindicator = styled.div`
  height: 3px;
  width: 70px;
  border-color: #979797;
  background-color: white;
  margin-top: 36px;
`
export const Dindicator = styled.div`
  height: 3px;
  width: 85px;
  border-color: #979797;
  background-color: white;
  margin-top: 36px;
`
export const Cindicator = styled.div`
  height: 3px;
  width: 70px;
  border-color: #979797;
  background-color: white;
  margin-top: 36px;
`
export const Tindicator = styled.div`
  height: 3px;
  width: 85px;
  border-color: #979797;
  background-color: white;
  margin-top: 36px;
`
