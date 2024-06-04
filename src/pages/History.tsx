import { useEffect, useState } from "react";
import { AUDChart, Header, Title } from "../components";
import { useScreen } from "../screen.context";
import { apiClient } from "../service/apiClient";
import { DEFAULT_SELECTOR_DAY } from "../constants";

interface ChartData {
  dates: string[];
  high: number[];
  low: number[];
  varBid: number[];
  pctChange: number[];
}

const History = () => {
  const [selectedPeriod, setSelectedPeriod] = useState(DEFAULT_SELECTOR_DAY.seven);
  const [dataHistory, setDataHistory] = useState<ChartData[]>([]);
  const { isMobile } = useScreen();

  useEffect(() => {
    const getCurrencies = async () => {
      try {
        const token = localStorage.getItem('auth');
        const tokenParam = token !== '' ? `?token=${token}` : '';
        const url = `/currencies/${selectedPeriod}${tokenParam}`;
    
        const response = await apiClient.get(url, {
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const dataFull: ChartData[] = [];

        Object.keys(response.data).forEach((currencyName) => {
          const partialData: ChartData = {
            dates: [],
            high: [],
            low: [],
            varBid: [],
            pctChange: [],
          };

          const firstCurrencyObject = response.data[currencyName];

          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          firstCurrencyObject.forEach((currencyData: any) => {
            const date = new Date(Number(currencyData.timestamp) * 1000);
            const day = date.getDate();
            const month = date.getMonth() + 1;

            partialData.dates.push(`${day}/${month}`);
            partialData.high.push(Number(currencyData.high));
            partialData.low.push(Number(currencyData.low));
            partialData.pctChange.push(Number(currencyData.pctChange));
            partialData.varBid.push(Number(currencyData.varBid));
          });

          dataFull.push(partialData);
        });

        setDataHistory(dataFull);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    getCurrencies();
  }, [selectedPeriod]);

  const handlePeriodClick = (period: string) => {
    setSelectedPeriod(period);
  };

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
            <Title isMobile={isMobile} title="Histórico" />
          </div>
          {isMobile ? (
            <div className="bg-main-white flex justify-center pb-5">
              <span className="text-[16px] font-roboto">Últimos:</span>
              <button
                className={`text-[16px] pl-2 pr-2 ${selectedPeriod === DEFAULT_SELECTOR_DAY.seven ? 'font-bold' : ''}`}
                onClick={() => handlePeriodClick(DEFAULT_SELECTOR_DAY.seven)}
              >
                7 dias
              </button>
              <button
                className={`text-[16px] pl-2 pr-2 ${selectedPeriod === DEFAULT_SELECTOR_DAY.fifteen ? 'font-bold' : ''}`}
                onClick={() => handlePeriodClick(DEFAULT_SELECTOR_DAY.fifteen)}
              >
                15 dias
              </button>
              <button
                className={`text-[16px] pl-2 pr-2 ${selectedPeriod === DEFAULT_SELECTOR_DAY.thirty ? 'font-bold' : ''}`}
                onClick={() => handlePeriodClick(DEFAULT_SELECTOR_DAY.thirty)}
              >
                30 dias
              </button>
            </div>
          ) : (
            <div className="bg-main-white flex justify-center pb-5">
              <span className="text-[20px] font-roboto">Últimos:</span>
              <button
                className={`text-[20px] pl-2 pr-2 ${selectedPeriod === DEFAULT_SELECTOR_DAY.seven ? 'font-bold' : ''}`}
                onClick={() => handlePeriodClick(DEFAULT_SELECTOR_DAY.seven)}
              >
                7 dias
              </button>
              <button
                className={`text-[20px] pl-2 pr-2 ${selectedPeriod === DEFAULT_SELECTOR_DAY.fifteen ? 'font-bold' : ''}`}
                onClick={() => handlePeriodClick(DEFAULT_SELECTOR_DAY.fifteen)}
              >
                15 dias
              </button>
              <button
                className={`text-[20px] pl-2 pr-2 ${selectedPeriod === DEFAULT_SELECTOR_DAY.thirty ? 'font-bold' : ''}`}
                onClick={() => handlePeriodClick(DEFAULT_SELECTOR_DAY.thirty)}
              >
                30 dias
              </button>
            </div>
          )}
          <div className="bg-main-white w-full max-w-[1600px] mx-auto p-2 text-main-black">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {dataHistory.map((item, index) => (
                <div key={index} className="flex items-center justify-center p-4 bg-gray-100">
                  <AUDChart {...item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export { History };
