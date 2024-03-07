import styled from "styled-components"

export const Destinationcontainer = styled.div`
  padding: 76px 165px;
  #bigline {
    margin: 32px 0px 32px 0px;
  }
  @media (max-width: 768px) {
    padding: 40px;
  }
  @media (max-width: 440px) {
    padding: 15px 24px;
  }
`
export const Pagetitle = styled.div`
  font-family: ${(props) => props.theme.typography.families.Subheading};
  font-size: 28px;
  letter-spacing: 4.72px;
  color: #fff;
  display: flex;
  gap: 28px;
  #number {
    color: gray;
    font-weight: bold;
  }
  #title {
    text-transform: uppercase;
  }
  @media (max-width: 440px) {
    font-size: 16px;
    display: flex;
    justify-content: center;
  }
`
export const Maincontainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 64px;
  padding-left: 64px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0px;
    * {
      width: 100%;
      text-align: center;
    }
    Infocontainer {
      padding: 0px;
    }
  }
  @media (max-width: 375px) {
    margin-top: 32px;
  }
`
export const Infocontainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 40%;
  color: white;
  @media (max-width: 768px) {
    margin-top: 53px;
    justify-content: center;
    align-items: center;
    width: 80%;
  }
  @media (max-width: 768px) {
    margin-top: 26px;
  }
`
export const Imagecontainer = styled.div`
  width: 40%;
  img {
    width: 100%;
  }
`
export const Navbarcontainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: ${(props) => props.theme.typography.families.Subheading};
  font-size: 16px;
  color: white;
  text-transform: uppercase;
  letter-spacing: 2.7px;
  span {
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: center;
    &:hover {
      cursor: pointer;
    }
  }
  @media (max-width: 768px) {
    width: 285px;
  }
  @media (max-width: 440px) {
    font-size: 14px;
  }
`
export const Line = styled.div`
  height: 3px;
  width: 100%;
  background-color: white;
  @media (max-width: 768px) {
    width: 60%;
  }
`
export const Star = styled.div`
  font-size: 100px;
  text-transform: uppercase;
  color: white;
  margin-top: 37px;
  @media (max-width: 440px) {
    font-size: 56px;
  }
`
export const Paragraph = styled.div`
  font-size: 18px;
  line-height: 32px;
  color: #d0d6f9;
  font-family: ${(props) => props.theme.typography.families.Subheading};
  @media (max-width: 440px) {
    font-size: 15px;
  }
`
export const Datacontainer = styled.div`
  display: flex;
  justify-content: space-between;
  div > span {
    display: flex;
    flex-direction: column;
  }
  .title {
    font-family: ${(props) => props.theme.typography.families.Subheading};
    font-size: 18px;
    letter-spacing: 2.36px;
    text-align: left;
  }
  #dis {
    width: 60%;
  }
  #tim {
    width: 40%;
  }
  @media (max-width: 768px) {
    #dis {
      display: flex;
      justify-content: left;
      flex-direction: column;
    }
    #tim {
      display: flex;
      justify-content: left;
      flex-direction: column;
    }
  }
  @media (max-width: 440px) {
    flex-direction: column;
    align-items: center;
    .title {
      font-size: 14px;
      text-align: center;
    }
    #dis {
      font-size: 28px;
    }
    #tim {
      font-size: 28px;
      margin-top: 32px;
    }
  }
`
export const Time = styled.div`
  font-size: 28px;
  text-align: left;
  margin-top: 12px;
  @media (max-width: 440px) {
    text-align: center;
  }
`
export const Distance = styled.div`
  font-size: 28px;
  text-align: left;
  margin-top: 12px;
  @media (max-width: 440px) {
    text-align: center;
  }
`
