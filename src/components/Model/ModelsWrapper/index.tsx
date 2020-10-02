import React, {useCallback, useRef, useState} from 'react';
import ModelsContext, { CarModel } from '../ModelsContext';

import { Container, OverlaysRoot } from './styles';
import ModelOverlay from '../ModelOverlay';
//div interna
const ModelsWrapper: React.FC = ({children}) => {
  const warpperRef = useRef<HTMLDivElement>(null);
  const [registeredModels, setRegisterModels] = useState<CarModel[]>([]);
  //cria a função de registro
  const registerModel = useCallback((model:CarModel) => {
    setRegisterModels(state => [...state, model]);
  },[]);
  //remove o registro
  const unregisterModel = useCallback((modelName: string) => {
    setRegisterModels(state => state.filter(model => model.modelName !== modelName));
  }, []);
  //compara os nomes para inceris o registro
  const getModelByName = useCallback((modelName: string) => {
    return registeredModels.find(item => item.modelName === modelName) || null;
  }, [registeredModels]);
  return (
    <ModelsContext.Provider value={{
      warpperRef,
      registeredModels,
      registerModel,
      unregisterModel,
      getModelByName
      
    }}>
      <Container ref={warpperRef}>
      <OverlaysRoot>
        {registeredModels.map(item => (
          <ModelOverlay key={item.modelName} model={item}>{item.overlayNode}</ModelOverlay>
        ))}
      </OverlaysRoot>

      {children}
    </Container>
    </ModelsContext.Provider>
  );
};

export default ModelsWrapper;
