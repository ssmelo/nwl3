import React from 'react';
import { FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom';
import logoImg from '../../images/logo.svg';

import { 
    Container,
    Wrapper,
    Location,
    EnterApp,
    Main    
} from './styles';

const Landing: React.FC = () => {
  return(
    <Container>
        <Wrapper>
            <img src={logoImg} alt="Happy"/>
            
            <Main>
                <h1>Leve felicidade para o mundo</h1>
                <p>Visiste orfanatos e mude o dia de muitas crianças.</p>
            </Main>           

            <Location>
                <strong>Minas Gerais</strong>
                <span>Contagem</span>
            </Location>            
            
            <EnterApp to="/app">
                <FiArrowRight size={26} color="rgba(0,0,0,0.6)"/>
            </EnterApp>            
            
        </Wrapper>
    </Container>
      
    );
}

export default Landing;