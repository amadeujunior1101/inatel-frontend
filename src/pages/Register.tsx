import { Form, Header, Title } from "../components"
import { useScreen } from "../screen.context"


const Register =()=>{

  const { isMobile } = useScreen()

  return (
    <div>
      {isMobile === null ?
        <span>Loading...</span>
        :
        <div className="w-full bg-main-white">
          <div className="bg-main-blue">
            <Header isMobile={isMobile} />
          </div>    
          <div className="bg-main-white">
            <Title isMobile={isMobile} title="Preencha os dados"/>
          </div> 
          <div className="bg-main-white screen-minus-200">
            <Form isMobile={isMobile} title="Salvar"/>
          </div>      
        </div> 
      }
    </div>
  )
}

export { Register }