import styled from "styled-components"

export const Headercontainer = styled.div`
  display: flex;
  padding: 0px 0px 0px 54px;
  padding-top: 42px;
  align-items: center;
  font-family: ${(props) => props.theme.typography.families.Subheading};
  font-size: 16px;
  background-color: transparent;
  #nav {
    width: 60%;
  }
  #image {
    width: 40%;
  }
  #burguer {
    display: none;
  }
  #nav {
    display: flex;
  }
  @media (max-width: 768px) {
    padding: 0px 0px 0px 42px;
    #line {
      display: none;
    }
    #nav {
      width: 70%;
    }
    #image {
      width: 30%;
    }
  }
  @media (max-width: 460px) {
    #burguer {
      display: flex;
    }
    #nav {
      display: none;
    }
    justify-content: space-between;
    padding: 24px 24px 0px 24px;
    #close {
      position: absolute;
      top: 10px;
      right: 10px;
      z-index: 100;
    }
  }
`
export const Line = styled.div`
  height: 1px;
  background-color: #979797;
  width: 2500px;
  position: relative;
  left: 55px;
  z-index: 5;
`
