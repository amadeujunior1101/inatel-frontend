import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { LoadingProvider } from './loading.context.tsx'
import RouteComponent from './Routes.tsx'
import { ScreenProvider } from './screen.context.tsx'
import { AuthProvider } from './provider.context.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <LoadingProvider>
        <ScreenProvider>
          <RouteComponent />
        </ScreenProvider>
      </LoadingProvider>
    </AuthProvider>
  </React.StrictMode>,
)
