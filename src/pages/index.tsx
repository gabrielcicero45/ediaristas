import type {NextPage} from 'next'
import SafeEnviroment from 'ui/components/feedback/SafeEnviroment/SafeEnviroment'
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle'
import UserInformation from 'ui/components/data-display/UserInformation/UserInformation'
import TextFieldMask from 'ui/components/inputs/TextFieldMask/TextFieldMask'
import { Button, CircularProgress, Container, Typography } from '@mui/material'
import { FormElementsContainer, ProfissionaisContainer, ProfissionaisPaper } from 'ui/styles/pages/index.style'
import useIndex from 'data/hooks/pages/useIndex.page'


const Home: NextPage = () =>{
    const {   
      cep, 
      setCep, 
      cepValido,
      buscarProfissionais,
      erro,
      diaristas,
      buscaFeita,
      carregando,
      diaristasRestantes} = useIndex()

    return (
      <>
        <SafeEnviroment></SafeEnviroment>
        <PageTitle 
        title={'Conheca os profissionais'}
        subtitle = {'Preencha seu endereco e veja todos os profissionais da sua localidade'} />
       <FormElementsContainer>
       <TextFieldMask
          mask = {'99.999.-999'}
          label={'Digite seu CEP'}
          fullWidth
          variant={'outlined'}
          value={cep}
          onChange={(e) => setCep(e.target.value)}
        />
        {erro && <Typography color={'error'}>{erro}</Typography>}
        <Button

          variant={'contained'}
          color={'secondary'}
          sx={{ width: '220px'}} 
          disabled={!cepValido || carregando}
          onClick={()=> buscarProfissionais(cep)}
        
        >
          {carregando ?  <CircularProgress size={20} /> : 'Buscar'}
         
          </Button>
       </FormElementsContainer>
      <Container>
      {buscaFeita && ( diaristas.length > 0 ?
        
        <ProfissionaisPaper>
        <ProfissionaisContainer>
          
        {diaristas.map((item,index)=>{
          return (
          <UserInformation
          key={index}
          name={item.nome_completo}
          picture={item.foto_usuario}
          rating={item.reputacao}
          description={item.cidade}
        />
          )
        })}
          </ProfissionaisContainer>
          <Container sx={{textAlign: 'center'}}>
           {diaristasRestantes > 0 && (<Typography sx={{mt: 5}}>
              ... e mais {diaristasRestantes} {diaristasRestantes>1 ? 'profissionais atendem' : 'profissional atende'}  ao seu endereco
            </Typography>)}
            
            <Button variant={'contained'} color={'secondary'} sx={{mt: 5}}>Contratar um profissional</Button>
          </Container>
        </ProfissionaisPaper> 
        :
        (<Typography align={'center'} color={'textPrimary'}> Ainda nao temos nenhuma diarista disponivel em sua regiao</Typography>)
        )
      }
      </Container>
      </>
    )
  
}

export default Home

