import styled from 'styled-components';
import * as Ai from 'react-icons/ai'
import { Link } from 'react-router-dom';

export const NavbarContainer = styled.div`
    height:80px;
    min-width: 100%;
    background-color: #234480;
    display: flex;
    @media (max-width: 600px) {
        height:40px;
  }
`;

export const NavbarLogo = styled.img`
    height:80px;
    margin-left: 5%;
`;

export const NavbarLogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    width: 15%;
`;

export const NavbarLogoContainerTitle = styled.h2`
    margin-top: 10px;
    margin-left: -35%;
`;

export const NavbarLogoContainerSubTitle = styled.p`
    margin-top: -19px;
    margin-left: 13%;
`;

export const NavbarLinkListContainer = styled.div`
    display: flex;
    color: white;
    margin-top: 1%;
    margin-left:40%;
`;

export const NavbarLinkListElement = styled(Link)`
    text-decoration: none;
    color: white;
    font-size: 14pt;
    font-weight: 600;
    margin-right: 15%;
    margin-top: 4%;
    &:hover{
        cursor: pointer;
    }
    @media (max-width: 600px) {
        text-align:left;
        margin-left: 4%;
    }
`;

export const NavbarResponsiveMenu = styled(Ai.AiOutlineMenu)`
    color: white;
    margin-top: 2.5%;
    margin-left: 4%;
`;

export const NavbarResponsiveMenuLinks = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    color: white;
    z-index: 10;
    background-color: #234480;
    margin-top: 9%;
    width: 100%;
    transition: 0.5s ease;
`;