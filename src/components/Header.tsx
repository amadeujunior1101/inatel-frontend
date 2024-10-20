import { useState } from "react"
import loginImg from '../assets/login-2x.svg';
import logoutImg from '../assets/logout-2x.svg';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth.context";

interface IIsMobile {
    isMobile: boolean
}

const Header =({isMobile}: IIsMobile)=> {

  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();
  
  const categories = [
    { id: "1", name: "HOME", path: "/" }, 
    { id: "2", name: "HISTÓRICO", path: "/history" }, 
    { id: "3", name: "CONFIGURAÇÕES", path: "/setting" }
]

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    const handleLogin =()=> {
      navigate('/login')
    }

    const handleLogout =()=> {
      logout()
      navigate('/')
    }

    return (
        <>
            {isMobile ? (
                <>
                  <div className=" bg-main-blue flex items-center justify-between w-full max-w-[720px] mx-auto p-2 text-main-white">
                      <button className="menu-mobile" onClick={toggleMobileMenu}>
                          <div className="h-1 w-11 bg-main-white my-1"></div>
                          <div className="h-1 w-11 bg-main-white my-1"></div>
                          <div className="h-1 w-11 bg-main-white my-1"></div>
                      </button>
                      <div className="flex flex-col items-center justify-center flex-grow">
                        <span className="text-main-white font-roboto text-[28px] leading-tight italic">Inatel</span>
                        <span className="text-main-white font-roboto font-normal text-[10px] leading-tight mt-[-2px]">Instituto Nacional de Telecomunicações</span>
                      </div>
                      {
                        isAuthenticated ?
                          <button className="relative flex" onClick={handleLogout}>
                            <img src={logoutImg} alt="Logo" />
                            <span className="font-roboto font-normal text-[14px] pl-2">Sair</span>
                          </button>
                        :
                          <button className="relative flex" onClick={handleLogin}>
                            <img src={loginImg} alt="Logo" />
                            <span className="font-roboto font-normal text-[14px] pl-2">Entrar</span>
                          </button>

                      }
                      
                  </div>
                  {
                    isMobileMenuOpen && (
                      <div className="fixed inset-0 flex justify-center bg-main-blue bg-opacity-100 z-50">
                          <div className="bg-main-purple w-full pt-10 rounded-md text-center">
                              <button className="absolute top-5 right-5 text-xl font-bold" onClick={toggleMobileMenu}>X</button>
                              <ul className="mt-4">
                              {
                                categories.map((item) => (
                                  <li key={item.id} className="text-center text-lg text-main-white">
                                    <a
                                      href={item.path}
                                      className="block w-full h-full hover:bg-white hover:text-main-black py-4"
                                    >
                                      {item.name}
                                    </a>
                                  </li>
                                ))
                              }
                              </ul>
                          </div>
                      </div>
                  )}
                </>
            ) : (
              <>
                <div className=" bg-main-blue flex items-center justify-between w-full max-w-[1600px] mx-auto p-2 text-main-white">
                    <button className="menu-mobile" onClick={toggleMobileMenu}>
                        <div className="h-1 w-11 bg-main-white my-1"></div>
                        <div className="h-1 w-11 bg-main-white my-1"></div>
                        <div className="h-1 w-11 bg-main-white my-1"></div>
                    </button>
                    <div className="flex flex-col items-center justify-center flex-grow">
                      <span className="text-main-white font-roboto text-[28px] leading-tight italic">Inatel</span>
                      <span className="text-main-white font-roboto font-normal text-[10px] leading-tight mt-[-2px]">Instituto Nacional de Telecomunicações</span>
                    </div>
                    {
                        isAuthenticated ?
                        <button className="relative flex" onClick={handleLogout}>
                          <img src={logoutImg} alt="Logo" />
                          <span className="font-roboto font-normal text-[16px] pl-2">Sair</span>
                        </button>
                        :
                        <button className="relative flex" onClick={handleLogin}>
                          <img src={loginImg} alt="Logo" />
                          <span className="font-roboto font-normal text-[16px] pl-2">Entrar</span>
                        </button>
                    }
                   
                </div>
                {
                  isMobileMenuOpen && (
                    <div className="fixed inset-0 flex justify-center bg-main-blue bg-opacity-100 z-50">
                      <div className="bg-main-purple w-full pt-10 rounded-md text-center">
                        <button className="absolute top-5 right-5 text-xl font-bold" onClick={toggleMobileMenu}>X</button>
                        <ul className="mt-4">
                          {
                            categories.map((item) => (
                              <li key={item.id} className="text-center text-lg text-main-white">
                                <a
                                  href={item.path}
                                  className="block w-full h-full hover:bg-white hover:text-main-black py-4"
                                >
                                  {item.name}
                                </a>
                              </li>
                            ))
                          }
                        </ul>
                      </div>
                    </div>
                  )
                }

            </>
            )}
        </>
    )
}

export { Header }