import { useNavigate } from "react-router-dom";
import { Form, Header, Title } from "../components"
import { useScreen } from "../screen.context"
import { apiClient } from "../service/apiClient";


const Register =()=>{

  const { isMobile } = useScreen()
  const navigate = useNavigate();

  const handleRegister = async (email: string, password: string) => {
    try {
      await apiClient.post('/auth/register', {
        email: email,
        password: password
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      navigate('/login');

    } catch (error) {
      
      console.error("Erro ao cadastrar noo usuário:", error);
    }
  };

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
            <Form isMobile={isMobile} title="Salvar" onClick={handleRegister}/>
          </div>      
        </div> 
      }
    </div>
  )
}

export { Register }