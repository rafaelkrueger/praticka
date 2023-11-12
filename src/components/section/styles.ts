import styled from 'styled-components'

export const SectionContainer = styled.div`
    display:flex;
    width: 100%;
    @media (max-width: 600px) {
        margin-left:-6%;
    }
`

export const SectionImage = styled.img`
    min-width: 100%;
    min-height: 30%;
    height: 640px;
`

export const SectionContent = styled.div`
    width: 70%;
    position: absolute;
    display: flex;
    flex-direction: row;
    margin-top: 5%;
    margin-left: 14%;
    justify-content: space-around;
    @media (max-width: 600px) {
        flex-direction: column;
    }
`

export const SectionContentLeft = styled.div`
    width: 100%;
    margin-top: -3%;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(7px);
    padding: 10px;
    border-radius: 10px;
 `

export const SectionContentRight= styled.div`
    width: 100%;
`

export const SectionContentContent = styled.div`
    display: flex;
    flex-direction: column;
    background:white;
    margin-left: 29%;
    margin-top: 29%;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    border-radius: 10px;
    @media (max-width: 600px) {
        margin-left: -5%;
        margin-top: -5%;
    }

`

export const SectionContentLeftText = styled.p`
    font-size:15pt;
    color: #234480;
    text-align: left;
    font-weight: 500;
    margin-left:50px;
`

export const SectionContentRightButtonSpan = styled.span`
    position: absolute;
    left: 10%;
`

export const SectionContentRightButton = styled.button`
    width: 350px;
    height: 50px;
    background-color: #234480;
    color: white;
    border-radius:5px;
    border: #234480 0px solid;
    font-size: 13pt;
    margin-left: 4%;
    margin-top: 6%;
    margin-bottom: 6%;
    &:hover{
        cursor: pointer;
        background-color: rgba(255,255,255,0.9);
        color: #234480;
        border: #234480 1px solid;
    }
`