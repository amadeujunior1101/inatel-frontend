import { Header, Title } from "../components"
import { useScreen } from "../screen.context"

const History =()=>{

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
            <Title isMobile={isMobile} title="Histórico"/>
          </div> 
          <div className="bg-main-white flex items-center justify-center w-full max-w-[1600px] mx-auto p-2 text-main-black">
            <span>teste</span>
          </div>
          {/* <div className="bg-main-white screen-minus-200">
            <Form isMobile={isMobile} title="Entrar"/>
            <div className="space-y-4 pb-3 justify-center items-center flex">
              <button className="text-secondary-blue font-roboto font-normal text-[16px] underline">Esqueci minha senha</button>
            </div>
            <div className="space-y-4 pb-3 justify-center items-center flex">
              <button className="text-secondary-blue font-roboto font-normal text-[16px] underline">Cadastrar</button>
            </div>
          </div>       */}
        </div> 
      }
    </div>
  )
}

export { History }