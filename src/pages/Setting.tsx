import { useState } from "react";
import { Button, Header, Title } from "../components"
import { useScreen } from "../screen.context";

const Setting =()=>{

  const { isMobile } = useScreen()

  const [checkedItems, setCheckedItems] = useState<{ [key: number]: boolean }>({})

  const onChange = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    setCheckedItems({
      ...checkedItems,
      [index]: isChecked,
    });
    console.log(`Checkbox ${index + 1} checked:`, isChecked);
  }

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
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25].map((_, index) => (
                        <tr key={index}>
                          <td className="border border-gray-300 py-2 px-4 text-main-gray">AUD - DOLAR AUSTRALIANO</td>
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
                    <Button isMobile={isMobile} title="Salvar" />
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
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, index) => (
                      <tr key={index}>
                        <td className="border border-gray-300 py-2 px-4">AUD - DOLAR AUSTRALIANO</td>
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
                  <Button isMobile={isMobile} title="Salvar" />
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