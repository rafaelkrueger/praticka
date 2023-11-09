import React, {useEffect} from 'react';
import { MainContainer, MainContainerLeft, MainContainerLeftImage, MainContainerRight, MainContainerRightCardBody, MainContainerRightCardBodyElement, MainContainerRightCardHeader, MainContainerRightCardHeaderCard } from './styles.ts';
import Residencial from '../../images/residencial.png'
import Comercial from '../../images/comercial.png'
import servicesData from '../../pages.json';
import { useNavigate, useParams } from 'react-router-dom';


export const PagesComponent: React.FC = () => {
    const residentialServices = servicesData.residential.services;
    const commercialServices = servicesData.commercial.services;
    const params = useParams();
    const navigate = useNavigate();
    return (
    <>
        <MainContainer>
            <MainContainerLeft>
            {params.param === 'residencial'?<MainContainerLeftImage src={Residencial}/>:<MainContainerLeftImage style={{minWidth:'100%'}} src={Comercial}/>}
            </MainContainerLeft>
            <MainContainerRight>
                <MainContainerRightCardHeader>
                    <MainContainerRightCardHeaderCard>SOBRE</MainContainerRightCardHeaderCard>
                    <MainContainerRightCardHeaderCard>CONTATO</MainContainerRightCardHeaderCard>
                    <MainContainerRightCardHeaderCard>SERVIÇOS</MainContainerRightCardHeaderCard>
                </MainContainerRightCardHeader>
            <MainContainerRightCardBody>
                {params.param === 'residencial'?
                residentialServices.map((residential)=>{
                    return(
                        <>
                        <a href={`https://api.whatsapp.com/send?phone=551197193%208148&text=Olá, estou interessado em entrar em contato para discutir sobre serviço ${residential.toLowerCase()}`} target="_blank">
                            <MainContainerRightCardBodyElement>
                               <p style={{marginLeft:'5%', marginTop:'0.5%'}}>{residential}</p>
                            </MainContainerRightCardBodyElement>
                        </a>
                        </>
                    )
                })
                :
                commercialServices.map((comercial)=>{
                    return(
                        <>
                        <a href={`https://api.whatsapp.com/send?phone=551197193%208148&text=Olá, estou interessado em entrar em contato para discutir sobre serviço ${comercial.toLowerCase()}`} target="_blank">
                            <MainContainerRightCardBodyElement>
                               <p style={{marginLeft:'5%', marginTop:'0.5%'}}>{comercial}</p>
                            </MainContainerRightCardBodyElement>
                        </a>
                        </>
                    )
                })}
            </MainContainerRightCardBody>
            <div>
                <MainContainerRightCardBodyElement style={{marginTop:'4%'}}>
                    <p onClick={()=>navigate('/')} style={{marginLeft:'45%', marginTop:'0.5%'}}>VOLTAR</p>
                </MainContainerRightCardBodyElement>
            </div>
            </MainContainerRight>
        </MainContainer>
    </>
  );
};











