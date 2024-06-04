import { useEffect, useState } from "react";
import { Header, Title } from "../components"
import { useScreen } from "../screen.context"
import io from 'socket.io-client';

interface ICurrencyData {
  code: string;
  codein: string;
  name: string;
  high: string;
  low: string;
  varBid: string;
  pctChange: string;
  bid: string;
  ask: string;
  timestamp: string;
  create_date: string;
}

const defaultCurrencyData: ICurrencyData = {
  code: '1',
  codein: '1',
  name: '1',
  high: '1',
  low: '1',
  varBid: '1',
  pctChange: '1',
  bid: '1',
  ask: '1',
  timestamp: '1',
  create_date: '1',
}

const Dashboard =()=>{
  const { isMobile } = useScreen()
  const [currencyData, setCurrencyData] = useState<Array<ICurrencyData>>([]);
  const [connectionAttempts, setConnectionAttempts] = useState(0);

  useEffect(() => {
    const socket = io(import.meta.env.VITE_API_URL);

    socket.on('connect', () => {
      console.log('Connected to WebSocket server');
      setConnectionAttempts(0);
    });

    socket.on('currencyData', (data) => {
      console.log('Currency data', data);
      setCurrencyData(data); 
    });

    socket.on('disconnect', () => {
      console.log('Disconnected from WebSocket server');
    });

    socket.on('connect_error', (error) => {
      console.error('WebSocket connection error:', error);
      if (connectionAttempts < 3) {
        console.log('Retrying WebSocket connection...');
        setTimeout(() => {
          socket.connect();
          setConnectionAttempts(connectionAttempts + 1); 
        }, 3000); 
      } else {
        console.log('Max connection attempts reached. Loading default values.');
        setCurrencyData([defaultCurrencyData]);
      }
    });

    return () => {
      socket.disconnect();
    };
  }, [connectionAttempts]);

  return (
    <div>
      {isMobile === null ?
        <span>Test</span>
        :
        <div className="w-full bg-main-white">
          <div className="bg-main-blue">
            <Header isMobile={isMobile} />
          </div>    
          <div className="bg-main-white">
            <Title isMobile={isMobile} title="Cotação"/>
          </div>    
          <div className="bg-main-white">
          {
            isMobile ? (
              <div className="bg-main-white flow-root items-center justify-between w-full max-w-[720px] mx-auto p-2 text-main-black text-center">
                <div className="overflow-auto w-full h-max-h-screen-minus-150">
                  <table className="mx-auto border-collapse border border-gray-300">
                    <thead>
                      <tr>
                        <th className="sticky top-0 bg-main-white z-10 border border-gray-300 py-2 px-4">Moeda</th>
                        <th className="sticky top-0 bg-main-white z-10 border border-gray-300 py-2 px-4">High</th>
                        <th className="sticky top-0 bg-main-white z-10 border border-gray-300 py-2 px-4">Low</th>
                        <th className="sticky top-0 bg-main-white z-10 border border-gray-300 py-2 px-4">varBid</th>
                        <th className="sticky top-0 bg-main-white z-10 border border-gray-300 py-2 px-4">pctChange</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currencyData.map((item, index) => (
                        <tr key={index}>
                          <td className="border border-gray-300 py-2 px-4 text-main-gray">{item.name}</td>
                          <td className="border border-gray-300 py-2 px-4">{item.high}</td>
                          <td className="border border-gray-300 py-2 px-4">{item.low}</td>
                          <td className="border border-gray-300 py-2 px-4">{item.varBid}</td>
                          <td className="border border-gray-300 py-2 px-4">{item.pctChange}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>              
          ) : (
            <div className="bg-main-white flex items-center justify-center w-full max-w-[1600px] mx-auto p-2 text-main-black">
              <div className="overflow-auto w-full h-max-h-screen-minus-150">
                <table className="mx-auto border-collapse border border-gray-300">
                  <thead>
                    <tr>
                      <th className="sticky top-0 bg-main-white z-10 border border-gray-300 py-2 px-4">Moeda</th>
                      <th className="sticky top-0 bg-main-white z-10 border border-gray-300 py-2 px-4">High</th>
                      <th className="sticky top-0 bg-main-white z-10 border border-gray-300 py-2 px-4">Low</th>
                      <th className="sticky top-0 bg-main-white z-10 border border-gray-300 py-2 px-4">varBid</th>
                      <th className="sticky top-0 bg-main-white z-10 border border-gray-300 py-2 px-4">pctChange</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currencyData.map((item, index) => (
                      <tr key={index}>
                        <td className="border border-gray-300 py-2 px-4">{item.name}</td>
                        <td className="border border-gray-300 py-2 px-4">{item.high}</td>
                        <td className="border border-gray-300 py-2 px-4">{item.low}</td>
                        <td className="border border-gray-300 py-2 px-4">{item.varBid}</td>
                        <td className="border border-gray-300 py-2 px-4">{item.pctChange}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
          </div>    
        </div>
      }
    </div>
  )
}

export { Dashboard }