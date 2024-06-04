import React, { ReactNode, createContext, useContext, useEffect, useState } from 'react';

interface ScreenContextProps {
  isMobile: boolean;
  setIsMobile: React.Dispatch<React.SetStateAction<boolean>>;
}

const ScreenContext = createContext<ScreenContextProps | undefined>(undefined);

interface ScreenProviderProps {
  children: ReactNode;
}

const ScreenProvider: React.FC<ScreenProviderProps> = ({ children }) => {
  const [isMobile, setIsMobile] = useState<boolean>(true)

  useEffect(() => {
      const checkScreenWidth = () => {
          if (window.matchMedia("(max-width: 1079px)").matches) {
              setIsMobile(true)
          } else {
              setIsMobile(false)
          }
      }

      checkScreenWidth()

      window.addEventListener('resize', checkScreenWidth)
      
      return () => {
          window.removeEventListener('resize', checkScreenWidth)
      }
  }, [])

  const value: ScreenContextProps = {
    isMobile,
    setIsMobile,
  }

  return (
    <ScreenContext.Provider value={value}>
      {children}
    </ScreenContext.Provider>
  );
};

const useScreen = () => {
  const context = useContext(ScreenContext);
  if (!context) {
    throw new Error('useScreen must be used within a ScreenProvider');
  }
  return context;
};

// eslint-disable-next-line react-refresh/only-export-components
export { ScreenProvider, useScreen };
