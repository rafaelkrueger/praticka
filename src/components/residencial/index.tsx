import React, {useEffect, useState} from 'react';
import { MainContainer, MainContainerLeft, MainContainerLeftImage, MainContainerRight, MainContainerRightCardBody, MainContainerRightCardBodyElement, MainContainerRightCardHeader, MainContainerRightCardHeaderCard } from './styles.ts';
import Residencial from '../../images/residencial.png'
import Comercial from '../../images/comercial.png'
import servicesData from '../../pages.json';
import { useNavigate, useParams } from 'react-router-dom';
import { AboutComponent } from '../about/index.tsx';
import { ContactComponent } from '../contact/index.tsx';


export const PagesComponent: React.FC = () => {
    const residentialServices = servicesData.residential.services;
    const commercialServices = servicesData.commercial.services;
    const params = useParams();
    const navigate = useNavigate();
    const [activeSection, setActiveSection] = useState('services')
    return (
    <>
        <MainContainer>
            <MainContainerLeft>
            {params.param === 'residencial'?<MainContainerLeftImage src={Residencial}/>:<MainContainerLeftImage style={{minWidth:'100%'}} src={Comercial}/>}
            </MainContainerLeft>
            <MainContainerRight>
                <MainContainerRightCardHeader>
                    <MainContainerRightCardHeaderCard onClick={()=>setActiveSection('about')}>SOBRE</MainContainerRightCardHeaderCard>
                    <MainContainerRightCardHeaderCard onClick={()=>setActiveSection('services')}>SERVIÇOS</MainContainerRightCardHeaderCard>
                    <MainContainerRightCardHeaderCard onClick={()=>setActiveSection('contact')}>CONTATO</MainContainerRightCardHeaderCard>
                </MainContainerRightCardHeader>
            <div>
            {activeSection === 'contact'?<ContactComponent/>:''}
            {activeSection === 'about'?<AboutComponent/>:''}
            {activeSection === 'services'?
            <>
            <MainContainerRightCardBody>

            {params.param === 'residencial' ?
                residentialServices.map((residential) => {
                    return (
                        <>
                            <a href={`https://api.whatsapp.com/send/?phone=5511971938148&text=Olá, estou interessado em solicitar informações a serviços ${residential.toLowerCase()}&type=phone_number&app_absent=0`} target="_blank">
                                <MainContainerRightCardBodyElement>
                                    <p style={{ marginLeft: '5%', marginTop: '0.5%' }}>{residential}</p>
                                </MainContainerRightCardBodyElement>
                            </a>
                        </>
                    );
                })
                :
                commercialServices.map((comercial) => {
                    return (
                        <>
                            <a href={`https://api.whatsapp.com/send/?phone=5511971938148&text=Olá, estou interessado em solicitar informações a serviços ${comercial.toLowerCase()}&type=phone_number&app_absent=0`} target="_blank">
                                <MainContainerRightCardBodyElement>
                                    <p style={{ marginLeft: '5%', marginTop: '0.5%' }}>{comercial}</p>
                                </MainContainerRightCardBodyElement>
                            </a>
                        </>
                    );
                })}
        </MainContainerRightCardBody><div>
                <MainContainerRightCardBodyElement style={{ marginTop: '4%' }}>
                    <p onClick={() => navigate('/')} style={{ marginLeft: '45%', marginTop: '0.5%' }}>VOLTAR</p>
                </MainContainerRightCardBodyElement>
            </div></>
            :''}
            </div>
            </MainContainerRight>
        </MainContainer>
    </>
  );
};











