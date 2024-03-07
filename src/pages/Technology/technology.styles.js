import styled from "styled-components"

export const Technologycontainer = styled.div`
  padding: 76px 0px 50px 166px;
  color: white;
  @media (max-width: 900px) {
    padding: 76px 0px 50px 70px;
  }
  @media (max-width: 768px) {
    padding: 40px 0px 50px 0px;
  }
  @media (max-width: 375px) {
    padding: 24px 0px 50px 0px;
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
  @media (max-width: 768px) {
    padding-left: 38px;
    font-size: 20px;
  }
  @media (max-width: 440px) {
    font-size: 16px;
    display: flex;
    justify-content: center;
  }
`
export const Main = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`
export const Imagecontainer = styled.div`
  width: 40%;
  img {
    width: 100%;
  }
  #tablet {
    display: none;
  }
  @media (max-width: 768px) {
    order: 1;
    #tablet {
      display: flex;
    }
    #desktop {
      display: none;
    }
    width: 100%;
    margin-top: 60px;
  }
  @media (max-width: 768px) {
    margin-top: 32px;
  }
`
export const Infocontainer = styled.div`
  display: flex;
  width: 60%;
  padding-top: 130px;
  @media (max-width: 768px) {
    order: 2;
    flex-direction: column;
    width: 100%;
    padding-top: 50px;
  }
  @media (max-width: 375px) {
    padding-top: 34px;
  }
`
export const Navcontainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  gap: 32px;
  .selector {
    width: 80px;
    height: 80px;
    border-radius: 100%;
    background-color: transparent;
    border: 0.5px solid white;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 32px;
  }
  @media (max-width: 768px) {
    order: 1;
    flex-direction: row;
    width: 100%;
    .selector {
      width: 60px;
      height: 60px;
      font-size: 24px;
    }
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 375px) {
    .selector {
      width: 40px;
      height: 40px;
      font-size: 16px;
    }
  }
`
export const Datacontainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  @media (max-width: 768px) {
    order: 2;
    width: 100%;
    align-items: center;
    margin-top: 40px;
  }
  @media (max-width: 375px) {
    margin-top: 26px;
  }
`
export const Title = styled.span`
  font-size: 56px;
  margin-bottom: 17px;
  text-transform: uppercase;
  @media (max-width: 768px) {
    font-size: 40px;
  }
  @media (max-width: 375px) {
    font-size: 24px;
  }
`
export const Subtitle = styled.span`
  font-family: Barlow Condensed;
  letter-spacing: 2.7px;
  font-size: 16px;
  margin-bottom: 16px;
  @media (max-width: 375px) {
    font-size: 14px;
    margin-bottom: 9px;
  }
`
export const Paragraph = styled.p`
  font-family: Barlow;
  font-size: 18px;
  line-height: 32px;
  width: 78%;
  @media (max-width: 768px) {
    width: 64%;
    text-align: center;
    font-size: 16px;
  }
  @media (max-width: 375px) {
    font-size: 15px;
    width: 88%;
  }
`
