import React, {useEffect} from 'react';
import Profile from '../../images/jana.jpeg'
import { AboutChildLeft, AboutChildRight, AboutContainer, AboutSubContainer } from './styles.ts';


export const AboutComponent: React.FC = () => {
    return (
    <>
    <AboutContainer>
        <AboutSubContainer>
            <AboutChildLeft>
                <img src={Profile} style={{width:'70%', borderRadius:'10px', boxShadow:'1px 1px 10px rgba(0,0,0,0.2)'}}/>
            </AboutChildLeft>
            <AboutChildRight>
                <h2>Sobre Nós!</h2>
                <hr/>
                <p style={{textAlign:'left'}}>Olá! Sou a Janaina e na Pratyka, meu papel é unir você aos melhores profissionais de limpeza e manutenção para atender suas necessidades.</p>
                <p style={{textAlign:'left'}}>
                    Estou comprometida em tornar sua busca por serviços de limpeza e manutenção mais fácil e eficiente. Minha missão é conectar você aos melhores profissionais, garantindo qualidade e confiança em cada indicação.
                    Deixe-me ajudar a encontrar a solução certa para suas necessidades de limpeza. Entre em contato comigo na Pratyka, e encontrarei o profissional ideal para você!
                </p>
            </AboutChildRight>
        </AboutSubContainer>
        <div></div>
    </AboutContainer>
    </>
  );
};











