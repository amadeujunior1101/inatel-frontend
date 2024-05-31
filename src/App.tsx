import { useEffect, useState } from 'react'
// import './App.css'
import { Dashboard } from './pages'

function App() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null)

    useEffect(() => {
        const checkScreenWidth = () => {
            if (window.matchMedia("(max-width: 1079px)").matches) {
                setIsMobile(true)
                console.log('Is Mobile')
            } else {
                setIsMobile(false)
                console.log('Is Not Mobile')
            }
        }

        // Verifica a largura da tela quando o componente é montado
        checkScreenWidth()

        // Adiciona um listener para alterações de tamanho da janela
        window.addEventListener('resize', checkScreenWidth)

        // Remove o listener quando o componente é desmontado
        return () => {
            window.removeEventListener('resize', checkScreenWidth)
        }
    }, [])
 return (
  <>
    <Dashboard isMobile={isMobile}/>
    {/* <Login isMobile={isMobile}/> */}
    {/* <Register isMobile={isMobile}/> */}
    {/* <Setting isMobile={isMobile}/> */}
  </>
 )
}

export default App
