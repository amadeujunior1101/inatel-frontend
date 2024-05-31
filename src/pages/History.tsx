import { useState } from "react";
import { AUDChart, Header, Title } from "../components"
import { useScreen } from "../screen.context"

const History =()=>{
  const [selectedPeriod, setSelectedPeriod] = useState('7 dias');

  const handlePeriodClick = (period: string) => {
    setSelectedPeriod(period);
  };

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
          {
            isMobile ?
              <div className="bg-main-white flex justify-center pb-5">
                <span className="text-[16px] font-roboto">Últimos:</span>
                <button
                  className={`text-[16px] pl-2 pr-2 ${
                    selectedPeriod === '7 dias' ? 'font-bold' : ''
                  }`}
                  onClick={() => handlePeriodClick('7 dias')}
                >
                  7 dias
                </button>
                <button
                  className={`text-[16px] pl-2 pr-2 ${
                    selectedPeriod === '15 dias' ? 'font-bold' : ''
                  }`}
                  onClick={() => handlePeriodClick('15 dias')}
                >
                  15 dias
                </button>
                <button
                  className={`text-[16px] pl-2 pr-2 ${
                    selectedPeriod === '30 dias' ? 'font-bold' : ''
                  }`}
                  onClick={() => handlePeriodClick('30 dias')}
                >
                  30 dias
                </button>
              </div>
            :
              <div className="bg-main-white flex justify-center pb-5">
                <span className="text-[20px] font-roboto">Últimos:</span>
                <button
                  className={`text-[20px] pl-2 pr-2 ${
                    selectedPeriod === '7 dias' ? 'font-bold' : ''
                  }`}
                  onClick={() => handlePeriodClick('7 dias')}
                >
                  7 dias
                </button>
                <button
                  className={`text-[20px] pl-2 pr-2 ${
                    selectedPeriod === '15 dias' ? 'font-bold' : ''
                  }`}
                  onClick={() => handlePeriodClick('15 dias')}
                >
                  15 dias
                </button>
                <button
                  className={`text-[20px] pl-2 pr-2 ${
                    selectedPeriod === '30 dias' ? 'font-bold' : ''
                  }`}
                  onClick={() => handlePeriodClick('30 dias')}
                >
                  30 dias
                </button>
              </div> 
          } 
          <div className="bg-main-white w-full max-w-[1600px] mx-auto p-2 text-main-black">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="flex items-center justify-center p-4 bg-gray-100">
                  <AUDChart />
                </div>
              ))}
            </div>
          </div>
        </div> 
      }
    </div>
  )
}

export { History }