import styled from "styled-components"

export const Homecontainer = styled.div`
  color: white;
  display: flex;
  padding: 249px 165px 100px 160px;
  justify-content: space-between;
  @media (max-width: 1100px) {
    padding: 200px 39px;
  }
  @media (max-width: 940px) {
    padding: 106px 39px 0px 39px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    #info * {
      text-align: center;
    }
    #info {
      padding-bottom: 156px;
    }
  }
  @media (max-width: 460px) {
    padding: 48px 24px 48px 24px;
  }
`
export const Circle = styled.div`
  width: 274px;
  height: 274px;
  background-color: white;
  color: black;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Bellefair;
  font-size: 32px;
  letter-spacing: 2px;
  @media (max-width: 900px) {
    width: 240px;
    height: 240px;
  }
  @media (max-width: 460px) {
    font-size: 20px;
    width: 150px;
    height: 150px;
  }
`
export const Bigcircle = styled.div`
  width: 450px;
  height: 450px;
  backdrop-filter: invert(0%);
  color: black;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Bellefair;
  font-size: 32px;
  letter-spacing: 2px;
  cursor: pointer;
  &:hover {
    backdrop-filter: invert(11%);
  }
  @media (max-width: 900px) {
    width: 350px;
    height: 350px;
  }
  @media (max-width: 460px) {
    width: 250px;
    height: 250px;
  }
`
export const Subtitle = styled.div`
  font-family: Barlow Condensed;
  font-size: 28px;
  letter-spacing: 4.72px;
  margin-bottom: 24px;
  @media (max-width: 768px) {
    font-size: 20px;
  }
  @media (max-width: 460px) {
    font-size: 16px;
    margin-bottom: 0px;
  }
`
export const Title = styled.div`
  font-family: Bellefair;
  font-size: 150px;
  margin-bottom: 24px;
  @media (max-width: 768px) {
    text-align: center;
  }
  @media (max-width: 600px) {
    font-size: 110px;
  }
  @media (max-width: 460px) {
    font-size: 80px;
    margin-bottom: 0px;
  }
`
export const Paragraph = styled.div`
  font-family: Barlow;
  font-size: 18px;
  line-height: 32px;
  font-weight: lighter;
  @media (max-width: 768px) {
    font-size: 16px;
  }
  @media (max-width: 460px) {
    font-size: 15px;
    width: 100%;
  }
`
export const Infocontainer = styled.div`
  width: 440px;
  @media (max-width: 768px) {
    width: 70%;
  }
  @media (max-width: 440px) {
    width: 100%;
  }
`
export const Circlecontainer = styled.div`
  display: flex;
  align-items: end;
  margin-top: -140px;
`
