import styled from "styled-components"

export const Pagetitle = styled.div`
  font-family: ${(props) => props.theme.typography.families.Subheading};
  font-size: 28px;
  letter-spacing: 4.72px;
  color: #fff;
  display: flex;
  gap: 28px;
  margin: 76px 166px 0px 166px;
  #number {
    color: gray;
    font-weight: bold;
  }
  #title {
    text-transform: uppercase;
  }
  @media (max-width: 1100px) {
    margin-left: 100px;
  }
  @media (max-width: 768px) {
    margin: 40px 38.5px 60px 38.5px;
    font-size: 20px;
  }
  @media (max-width: 375px) {
    margin-bottom: 32px;
    font-size: 16px;
    display: flex;
    justify-content: center;
  }
`
export const Crewcontainer = styled.div`
  padding: 62px 137px 0px 166px;
  display: flex;
  margin-top: -100px;
  @media (max-width: 1100px) {
    padding: 62px 90px 0px 90px;
  }
  @media (max-width: 768px) {
    margin-top: 0px;
    padding: 0px 38px 0px 38px;
    flex-direction: column;
  }
  @media (max-width: 375px) {
    padding-left: 24px;
    padding-right: 24px;
  }
`
export const Infocontainer = styled.div`
  width: 50%;
  padding-right: 100px;
  padding-top: 150px;
  @media (max-width: 768px) {
    padding-top: 0px;
    width: 100%;
    padding-right: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 375px) {
    padding-right: 0px;
    order: 2;
  }
`
export const Main = styled.div`
  @media (max-width: 768px) {
    display: flex;
    width: 70%;
    flex-direction: column;
    text-align: center;
  }
  @media (max-width: 375px) {
    width: 100%;
    padding-bottom: 50px;
  }
`
export const Rolecontainer = styled.div`
  font-size: 28px;
  color: gray;
  text-transform: uppercase;
  @media (max-width: 768px) {
    font-size: 24px;
  }
  @media (max-width: 375px) {
    font-size: 16px;
    order: 1;
  }
`
export const Namecontainer = styled.div`
  font-size: 56px;
  color: white;
  text-transform: uppercase;
  margin-bottom: 27px;
  @media (max-width: 375px) {
    font-size: 24px;
    order: 2;
  }
`
export const Paragrapah = styled.div`
  font-size: 18px;
  line-height: 32px;
  font-family: Barlow;
  color: white;
  @media (max-width: 768px) {
    font-size: 16px;
  }
  @media (max-width: 375px) {
    font-size: 15px;
    order: 3;
  }
`
export const Imagecontainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  #linemobile {
    display: none;
  }
  img {
    width: 90%;
  }
  @media (max-width: 768px) {
    width: 100%;
    img {
      width: 40%;
    }
  }
  @media (max-width: 375px) {
    order: 1;
    display: flex;
    flex-direction: column;
    #linemobile {
      display: flex;
      width: 100%;
      height: 1px;
      background-color: gray;
    }
  }
`
export const Navcrew = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 40%;
  margin-top: 60px;
  margin-bottom: 60px;
  .selector {
    width: 15px;
    height: 15px;
    border-radius: 100%;
    background-color: gray;
    &:hover {
      background-color: white;
      cursor: pointer;
    }
  }
  @media (max-width: 768px) {
    margin-top: 40px;
    margin-bottom: 40px;
    .selector {
      width: 10px;
      height: 10px;
    }
    width: 100%;
    gap: 16px;
    justify-content: center;
  }
  @media (max-width: 375px) {
    order: 0;
  }
`
