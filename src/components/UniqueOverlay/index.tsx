import { useTransform } from 'framer-motion';
import React from 'react';
import useWrapperScroll from '../Model/useWrapperScroll';

import { Container, Header, Logo, Burguer, Footer } from './styles';

const UniqueOverlay: React.FC = () => {
  //Função de scroll
  const { scrollYProgress } = useWrapperScroll();
  //torna o footer sem opacidade até o ultimo item
  const opacity = useTransform(scrollYProgress,[0.9,1],[0,1]);
  return (
    <Container>
      <Header>
         <Logo />
         <Burguer />
      </Header>
      <Footer style={{ opacity }}>
        <ul>
          <li><a href="#">Direitos Reservados de Imagem da Tesla</a></li>
          <li><a href="#">Criado com Carinho</a></li>
          <li><a href="#">Autor: Cesar Henrique Ramos</a></li>
        </ul>
      </Footer>
    </Container>
  );
};

export default UniqueOverlay;
