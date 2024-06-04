import { useEffect, useState } from "react";
import { Button, Header, Title } from "../components"
import { useScreen } from "../screen.context";
import { apiClient } from "../service/apiClient";

interface Currency {
  name: string;
  active: boolean;
}

const Setting =()=>{

  const [currencies, setCurrencies] = useState<Currency[]>([]);

  const { isMobile } = useScreen()

  const [checkedItems, setCheckedItems] = useState<{ [key: number]: boolean }>({})

  const onChange = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    setCheckedItems({
      ...checkedItems,
      [index]: isChecked,
    });
    console.log(`Checkbox ${index + 1} checked:`, isChecked);
  };

  useEffect(() => {
    const getFavoriteCurrencies = async () => {
      try {
        const response = await apiClient.get('/users', {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QyQHRlc3QuY29tIiwic3ViIjoiNjY1Y2Y2NjVhYjE5ZDFjNWUyNTgwZDAyIiwidXNlcklkIjoiNjY1Y2Y2NjVhYjE5ZDFjNWUyNTgwZDAyIiwiaWF0IjoxNzE3NDU1MTI1LCJleHAiOjE3MTc1NDE1MjV9.nqyNXJiUIIwBMyfgwFU4ZWN9KCbTEv-VOe2l1PmBlk8'
          },
        });
        
        const currenciesName = response.data['currenciesName']; 
        const defaultCurrencies = [
          "currency-quote-daily-Dólar Americano/Real Brasileiro",
          "currency-quote-daily-Dólar Americano/Real Brasileiro Turismo",
          "currency-quote-daily-Euro/Real Brasileiro",
          "currency-quote-daily-Bitcoin/Real Brasileiro",
          "currency-quote-daily-Dólar Canadense/Real Brasileiro",
          "currency-quote-daily-Libra Esterlina/Real Brasileiro",
          "currency-quote-daily-Iene Japonês/Real Brasileiro",
          "currency-quote-daily-Franco Suíço/Real Brasileiro",
          "currency-quote-daily-Dólar Australiano/Real Brasileiro",
          "currency-quote-daily-Yuan Chinês/Real Brasileiro",
          "currency-quote-daily-Novo Shekel Israelense/Real Brasileiro",
          "currency-quote-daily-Ethereum/Real Brasileiro",
          "currency-quote-daily-XRP/Real Brasileiro",
        ];
  
        const currencyObjects = defaultCurrencies.map((defaultCurrency: string) => ({
          name: defaultCurrency.replace("currency-quote-daily-", ""),
          active: currenciesName.includes(defaultCurrency),
        }));
  
        const initialCheckedItems: { [key: number]: boolean } = currencyObjects.reduce<{ [key: number]: boolean }>((acc, _, index) => {
          acc[index] = currenciesName.includes(defaultCurrencies[index]);
          return acc;
        }, {});

        setCurrencies(currencyObjects);
        setCheckedItems(initialCheckedItems);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };
  
    getFavoriteCurrencies();
  }, []);
  
  const handleSaveButtonClick = async () => {
    const checkedCurrencies = currencies.filter((_, index) => checkedItems[index]);
    const modifiedCurrencies = checkedCurrencies.map(currency => ({
      ...currency,
      name: `currency-quote-daily-${currency.name}`,
    }));

    const currenciesName = modifiedCurrencies.map(currency => currency.name).join(',');

    try {
      await apiClient.put('/users', {
        currenciesName,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'BearereyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QyQHRlc3QuY29tIiwic3ViIjoiNjY1Y2Y2NjVhYjE5ZDFjNWUyNTgwZDAyIiwidXNlcklkIjoiNjY1Y2Y2NjVhYjE5ZDFjNWUyNTgwZDAyIiwiaWF0IjoxNzE3NDU1MTI1LCJleHAiOjE3MTc1NDE1MjV9.nqyNXJiUIIwBMyfgwFU4ZWN9KCbTEv-VOe2l1PmBlk8'
        },
      });
      console.log('atualizado com sucesso!')

    } catch (error) {
      console.error("Erro ao atualizar os favoritos:", error);
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
            <Title isMobile={isMobile} title="Escolha as moedas que deseja visualizar"/>
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
                        <th className="sticky top-0 bg-main-white z-10 border border-gray-300 py-2 px-4">Exibir</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currencies.map((item, index) => (
                        <tr key={item.name}>
                          <td className="border border-gray-300 py-2 px-4 text-main-gray">{item.name}</td>
                          <td className="border border-gray-300 py-2 px-4 flex justify-center">
                            <input
                              type="checkbox"
                              checked={!!checkedItems[index]}
                              onChange={onChange(index)}
                              className="form-checkbox h-5 w-5 text-main-blue"
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="bg-main-white flow-root items-center justify-between w-full mx-auto pt-5 pb-5 text-main-white text-center">
                    <Button isMobile={isMobile} title="Salvar" onClick={handleSaveButtonClick}/>
                  </div>
                </div>
              </div>              
          ) : (
            <div className="bg-main-white flex items-center justify-center w-full max-w-[1600px] mx-auto p-2 text-main-black">
              <div className="overflow-auto w-full h-max-h-screen-minus-150">
                <table className="mx-auto border-collapse border border-gray-300">
                  <thead>
                    <tr>
                      <th className="sticky top-0 bg-main-white z-10 border border-gray-300 py-2 px-4">Moeda</th>
                      <th className="sticky top-0 bg-main-white z-10 border border-gray-300 py-2 px-4">Exibir</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currencies.map((item, index) => (
                      <tr key={item.name}>
                        <td className="border border-gray-300 py-2 px-4">{item.name}</td>
                        <td className="border border-gray-300 py-2 px-4 flex justify-center">
                          <input
                            type="checkbox"
                            checked={!!checkedItems[index]}
                            onChange={onChange(index)}
                            className="form-checkbox h-5 w-5 text-main-blue"
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="bg-main-white flow-root items-center justify-between max-w-[400px] mx-auto pt-5 pb-5 text-main-white text-center">
                  <Button isMobile={isMobile} title="Salvar" onClick={handleSaveButtonClick}/>
                </div>
              </div>
            </div>
          )}
          </div>  
         
        </div> 
      }
    </div>
  )
}

export { Setting }