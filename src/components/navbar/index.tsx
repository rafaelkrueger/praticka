import React, { useState } from 'react';
import { NavbarContainer, NavbarLinkListContainer, NavbarLinkListElement, NavbarLogo, NavbarLogoContainer, NavbarLogoContainerSubTitle, NavbarLogoContainerTitle, NavbarResponsiveMenu, NavbarResponsiveMenuLinks } from './styles.ts';
import Logo from '../../images/logo.png'
import * as Ai from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';

export const NavbarComponent: React.FC = () => {
    const [active, setActive] = useState(false)
    const navigate = useNavigate()

  return (
    <NavbarContainer>
        {window.screen.availWidth > 600?
        <>
        <NavbarLogo src={Logo}/>
        <NavbarLogoContainer>
            <NavbarLogoContainerTitle>PRATYKA</NavbarLogoContainerTitle>
            <NavbarLogoContainerSubTitle>LIMPEZA E MANUTENÇÃO</NavbarLogoContainerSubTitle>
        </NavbarLogoContainer>
        <NavbarLinkListContainer>
            <NavbarLinkListElement to='/'>Home</NavbarLinkListElement>
            <NavbarLinkListElement to='/page/comercial'>Comercial</NavbarLinkListElement>
            <NavbarLinkListElement to='/page/residencial'>Residencial</NavbarLinkListElement>
            <NavbarLinkListElement><Ai.AiOutlineMail size={29} /></NavbarLinkListElement>
        </NavbarLinkListContainer>
        </>
        :
        <>
        <NavbarResponsiveMenu onClick={()=>setActive(!active)}/>
        {
            active?
            <NavbarResponsiveMenuLinks>
                <NavbarLinkListElement to='/'>Home</NavbarLinkListElement>
                <NavbarLinkListElement to='/page/comercial'>Comercial</NavbarLinkListElement>
                <NavbarLinkListElement to='/page/residencial'>Residencial</NavbarLinkListElement>
                <NavbarLinkListElement><Ai.AiOutlineMail size={29} /></NavbarLinkListElement>
            </NavbarResponsiveMenuLinks>
            :''
        }
        </>
        }
    </NavbarContainer>
  );
};

