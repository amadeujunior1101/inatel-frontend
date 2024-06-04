import { useAuth } from "../auth.context";
import { Form, Header, Title } from "../components";
import { useScreen } from "../screen.context";
import { apiClient } from "../service/apiClient";
import { useNavigate } from 'react-router-dom';

interface AuthResponse {
  access_token: string;
}

const Login = () => {
  const { isMobile } = useScreen();
  const { login } = useAuth();

  const navigate = useNavigate();

  const handleLogin = async (email: string, password: string) => {
    try {
      const response = await apiClient.post<AuthResponse>('/auth/login', {
        email: email,
        password: password
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const { access_token } = response.data

      navigate('/');

      login(access_token)

    } catch (error) {
      
      console.error("Erro ao atualizar os favoritos:", error);
    }
  };

  const register =() => {
    navigate('/register');
  }

  return (
    <div>
      {isMobile === null ? (
        <span>Loading...</span>
      ) : (
        <div className="w-full bg-main-white">
          <div className="bg-main-blue">
            <Header isMobile={isMobile} />
          </div>
          <div className="bg-main-white">
            <Title isMobile={isMobile} title="Entre com seu usuário e senha" />
          </div>
          <div className="bg-main-white screen-minus-200">
            <Form isMobile={isMobile} title="Entrar" onClick={handleLogin} />
            <div className="space-y-4 pb-3 justify-center items-center flex">
              <button className="text-secondary-blue font-roboto font-normal text-[16px] underline">Esqueci minha senha</button>
            </div>
            <div className="space-y-4 pb-3 justify-center items-center flex">
              <button className="text-secondary-blue font-roboto font-normal text-[16px] underline" onClick={register}>Cadastrar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export { Login };
