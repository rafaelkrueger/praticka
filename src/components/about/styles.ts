import styled from "styled-components";

export const AboutContainer = styled.div`
  margin-top: 7%;
  margin-right: 5%;
  display: flex;
  flex-direction: column;
`

export const AboutSubContainer = styled.div`
  display: flex;
  @media (max-width:600px) {
    flex-direction: column;
  }
`

export const AboutChildLeft = styled.div`
  width: 50%;
  @media (max-width:600px) {
    margin-left: 30%;
  }
`

export const AboutChildRight = styled.div`
  width: 50%;
  @media (max-width:600px) {
    width: 90%;
    margin-left: 10%;
    text-align: center !important;
  }

`