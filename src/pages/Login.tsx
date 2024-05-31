import { Form, Header, Title } from "../components"

interface ILength{
  isMobile: boolean | null
}

const Login =({ isMobile }: ILength)=>{
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
            <Title isMobile={isMobile} title="Entre com seu usuário e senha"/>
          </div> 
          <div className="bg-main-white screen-minus-200">
            <Form isMobile={isMobile} title="Entrar"/>
            <div className="space-y-4 pb-3 justify-center items-center flex">
              <button className="text-secondary-blue font-roboto font-normal text-[16px] underline">Esqueci minha senha</button>
            </div>
            <div className="space-y-4 pb-3 justify-center items-center flex">
              <button className="text-secondary-blue font-roboto font-normal text-[16px] underline">Cadastrar</button>
            </div>
          </div>      
        </div> 
      }
    </div>
  )
}

export { Login }