import React from 'react';
import DefaultOverlayContent from '../DefaultOverlayContent';

import { Container, Spacer } from './styles';
import { ModelsWrapper, ModelSection } from '../Model';
import UniqueOverlay from '../UniqueOverlay';

const Page: React.FC = () =>{
    return(
        <Container>
            <ModelsWrapper>
                <div>
                    {[
                        'Modelo Y',
                        'Modelo X',
                        'Modelo 3',
                        'Modelo S',
                        'Watt for Solar on Existing Roofs',
                        'Solar for New Roofs',
                        'Accessories'
                    ].map(modelName => (
                        <ModelSection
                            key={modelName}
                            className="colored"
                            modelName= {modelName}
                            overlayNode={
                                <DefaultOverlayContent
                                    label={modelName}
                                    description= "Order Online for Delivery"
                                />
                            }
                        />
                    ))}


                </div>
                <Spacer/>
                <UniqueOverlay />
            </ModelsWrapper>
        </Container>
        
    )
}
export default Page