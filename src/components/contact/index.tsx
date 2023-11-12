import React, {useEffect} from 'react';
import { ContactCards, ContactCardsContainer, ContactCardsImage, ContactCardsParagraph, ContactCardsTitle, ContactContainer } from './styles.ts';
import Zap from '../../images/zap.png'
import Email from '../../images/gmail.png'
import Phone from '../../images/phone.png'




export const ContactComponent: React.FC = () => {
    return (
    <>
        <ContactContainer>
                <h1>Entre em Contato!</h1>
                <hr/>
            <ContactCardsContainer>
                <ContactCards>
                    <ContactCardsImage src={Zap}/>
                        <ContactCardsTitle>Whatsapp</ContactCardsTitle>
                    <ContactCardsParagraph>Entre em contato através de nosso whatsapp <a href={`https://api.whatsapp.com/send/?phone=5511971938148&text=Olá, estou interessado em solicitar informações a serviços&type=phone_number&app_absent=0`} target="_blank">clicando no link</a></ContactCardsParagraph>
                </ContactCards>
                <ContactCards>
                    <ContactCardsImage src={Email}/>
                        <ContactCardsTitle>Email</ContactCardsTitle>
                    <ContactCardsParagraph>Entre em contato conosco através de nosso email: pratyka.dominio@gmail.com</ContactCardsParagraph>
                </ContactCards>
                <ContactCards>
                    <ContactCardsImage src={Phone}/>
                        <ContactCardsTitle>Telefone</ContactCardsTitle>
                    <ContactCardsParagraph>Entre em contato conosco através de nosso telefone: (11)971938148</ContactCardsParagraph>
                </ContactCards>
            </ContactCardsContainer>
        </ContactContainer>
    </>
  );
};











