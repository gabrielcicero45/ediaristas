import React from 'react'
import { SafeEnvironmentContainer } from './SafeEnviroment.style'
import { Container } from '@mui/material'
const SafeEnviroment = () => { 

    return(
        <SafeEnvironmentContainer>
            <Container>
            Ambiente Seguro <i className={'twf-lock'} />
            </Container>
            
        </SafeEnvironmentContainer>
    )
}

export default SafeEnviroment