import { HTMLElements } from 'framer-motion/types/render/dom/utils/supported-elements';
import React, { useEffect, useRef } from 'react';
import useModel from '../useModel';

import { Container } from './styles';

interface Props extends React.HTMLAttributes<HTMLDivElement>{
  modelName: string,
  overlayNode: React.ReactNode
}
//seção externa que compoe cada elemnto
const ModelSection: React.FC<Props> = ({
  modelName,
  overlayNode,
  children,
  ...props
}) => {
  const { registerModel } = useModel(modelName);
  //referiencia da section
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(()=>{
    if(sectionRef.current){
      registerModel({
        modelName,
        overlayNode,
        sectionRef,
      })
    }
  },[])
  return (
    <Container ref={sectionRef} {...props}>
     {children}
    </Container>
  );
};

export default ModelSection;
