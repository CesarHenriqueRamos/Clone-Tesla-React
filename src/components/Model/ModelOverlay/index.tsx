import { useTransform } from 'framer-motion';
import React, { useCallback, useLayoutEffect, useState } from 'react';
import { CarModel } from '../ModelsContext';
import useWrapperScroll from '../useWrapperScroll';

import { Container } from './styles';

interface Props{
  model: CarModel
}

type SectionDimensions = Pick<HTMLDivElement, 'offsetTop' | 'offsetHeight'>

const ModelOverlay: React.FC<Props> = ({model,children}) => {
  const { scrollY } = useWrapperScroll();
  const getSectionDimensions = useCallback(() => {
    return {
      offsetTop: model.sectionRef.current?.offsetTop,
      offsetHeight: model.sectionRef.current?.offsetHeight
    } as SectionDimensions
  }, [model.sectionRef]);
  const [dimension, setDimension] = useState<SectionDimensions>(
    getSectionDimensions()
  );
  useLayoutEffect(()=>{
    function onResize(){
      window.requestAnimationFrame(() => setDimension(getSectionDimensions))
    }
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  },[]);
  //calcula a dimenções das sections
  const sectionScrollProgress = useTransform(scrollY, y => (y - dimension.offsetTop)/ dimension.offsetHeight);
  //cria o efeitos de troca de titulo usando opacidade
  const opacity = useTransform(sectionScrollProgress, [-0.42, - 0.05, 0.05, 0.42], [0 , 1, 1, 0]);
  //oculta os elenetos que não sao da Section
  const pointerEvents = useTransform(opacity, value =>
    value > 0 ? 'auto' : 'none' 
    )
  return (
    <Container style={{ opacity, pointerEvents }}>
      {children}
    </Container>
  );
};

export default ModelOverlay;
