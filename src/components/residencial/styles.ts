import styled from 'styled-components'

export const MainContainer = styled.div`
    display:flex;
    min-width:100%;
`

export const MainContainerLeft = styled.div`
    min-width:50%;
    height:900px;
    @media (max-width: 600px) {
        display: none;
    }
`

export const MainContainerRight = styled.div`
    min-width:50%;
    height:900px;
`

export const MainContainerRightCard = styled.div`
    display: flex;
    flex-direction:column;
`

export const MainContainerRightCardHeader = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 5%;
    @media (max-width: 600px) {
        margin-top:30px;
    }

`
export const MainContainerRightCardHeaderCard = styled.div`
    background-color: #234480;
    color: white;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
    width: 170px;
    height: 35px;
    padding-top: 5px;
    font-size: 15pt;
    &:hover{
        cursor: pointer;
    }
    @media (max-width: 600px) {
        width: 120px;
        height: 35px;
        font-size: 13pt;
        margin-left: 15px;
        margin-right: 15px;
    }
`

export const MainContainerRightCardBody = styled.div`
    display: flex;
    flex-direction:column;
    margin-top: 2%;
    text-align: center;
    @media (max-width: 600px) {
        margin-top:60px;
    }
`

export const MainContainerRightCardFooter = styled.div`
    display: flex;
    flex-direction:column;
    margin-top: 5%;
`

export const MainContainerRightCardBodyElement = styled.div`
    display: flex;
    height:30px;
    width: 90%;
    margin-left: 3%;
    margin-top:4%;
    background-color:#234480;
    border-radius: 5px;
    color:white;
    padding: 5px;
    text-align: center;
    &:hover{
        cursor: pointer;
    }
    @media (max-width: 600px) {
        height:40px;
    }
`

export const MainContainerLeftImage = styled.img`
    min-width:70%;
    max-width:100%;
    height:650px;
    @media (max-width: 600px) {
        display: none;
    }
`