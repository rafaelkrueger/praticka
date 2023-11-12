import styled from "styled-components";

export const ContactContainer = styled.div`
    margin-top: 5%;
    margin-left: 10%;
    margin-right: 10%;
`

export const ContactCardsContainer = styled.div`
    width: 100%;
    justify-content: space-around;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    @media (max-width:600px) {
    flex-direction: column;
    margin-left: 11%;
  }
`

export const ContactCards = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 5%;
    background-color: rgba(0,0,0,0.04);
    padding: 10px;
    border-radius: 10px;
    width: 240px;
    @media (max-width:600px) {
    flex-direction: column;
    margin-top: 13%;
    }
    &:hover{
        cursor: pointer;
        box-shadow: 1px 1px 20px rgba(0,0,0,0.1);
    }

`

export const ContactCardsImage = styled.img`
    margin-left:37%;
    width: 25%;
`

export const ContactCardsTitle = styled.h2`
    margin-top: 2%;
`

export const ContactCardsParagraph = styled.p`
    margin-top: -5%;
    font-size: 10pt;
`