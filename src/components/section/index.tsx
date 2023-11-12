import React, { useState } from 'react';
import { SectionContainer, SectionContentContent ,SectionContent, SectionContentLeft, SectionContentLeftText, SectionContentRight, SectionContentRightButton, SectionImage, SectionContentRightButtonSpan } from './styles.ts';
import Carousel from '../../images/carousel.jpg'
import Zap from '../../images/zap.png'
import * as Bs from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';


export const SectionComponent: React.FC = () => {
    const [comercial, setComercial] = useState(false)
    const [residencial, setResidencial] = useState(false)
    const navigate = useNavigate();

  return (
      <>
        <SectionContainer>
        {window.screen.availWidth > 600?
        <SectionImage src={Carousel}/>
        :''}
            <SectionContent>
                <SectionContentLeft>
                    <div style={{display:'flex', marginLeft:'-10%'}}>
                    {window.screen.availWidth > 600?<hr style={{transform: 'rotate(90deg)'}}></hr>:''}
                        <h1 style={{marginLeft:window.screen.availWidth > 600?'':'28px'}}>Conte Conosco</h1>
                    {window.screen.availWidth > 600?<hr style={{transform: 'rotate(90deg)'}}></hr>:''}
                    </div>
                    <div style={{display:'flex', marginLeft:'50px'}}>
                    <img src={Zap} style={{width:'50px', height:'40px'}}/>
                    <p style={{fontSize:'15pt', fontWeight:'500', marginTop:'1%', marginLeft:'4%'}}>(11) 97193 8148</p>
                    </div>
                    <SectionContentLeftText>Higienização de Sofás e Cortinas</SectionContentLeftText>
                    <SectionContentLeftText>Limpeza Residencial e Comercial</SectionContentLeftText>
                    <SectionContentLeftText>Serviço de Jardinagem</SectionContentLeftText>
                    <SectionContentLeftText>Limpeza Pós-obra</SectionContentLeftText>
                    <SectionContentLeftText>Encanamento</SectionContentLeftText>
                    <SectionContentLeftText>Eletricista</SectionContentLeftText>
                    <SectionContentLeftText>Manutenção Predial</SectionContentLeftText>
                    <SectionContentLeftText>Pintura</SectionContentLeftText>
                </SectionContentLeft>
                <SectionContentRight>
                    <SectionContentContent>
                        <SectionContentRightButton onClick={()=>navigate('/page/comercial')} ><SectionContentRightButtonSpan><Bs.BsFillBuildingFill/></SectionContentRightButtonSpan>Comercial</SectionContentRightButton>
                        <SectionContentRightButton onClick={()=>navigate('/page/residencial')} ><SectionContentRightButtonSpan><Bs.BsFillHouseFill/></SectionContentRightButtonSpan>Residencial</SectionContentRightButton>
                    </SectionContentContent>
                </SectionContentRight>
            </SectionContent>
        </SectionContainer>
    </>
  );
};











