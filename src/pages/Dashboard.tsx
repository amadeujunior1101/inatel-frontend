import { Header, Title } from "../components"
import { useScreen } from "../screen.context"

const Dashboard =()=>{
  const { isMobile } = useScreen()

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
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25].map((_, index) => (
                        <tr key={index}>
                          <td className="border border-gray-300 py-2 px-4 text-main-gray">AUD - DOLAR AUSTRALIANO</td>
                          <td className="border border-gray-300 py-2 px-4">1.2250</td>
                          <td className="border border-gray-300 py-2 px-4">1.2200</td>
                          <td className="border border-gray-300 py-2 px-4">+0.0030</td>
                          <td className="border border-gray-300 py-2 px-4">+0.25%</td>
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
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 18, 20, 21, 22, 23, 24, 25].map((_, index) => (
                      <tr key={index}>
                        <td className="border border-gray-300 py-2 px-4">{index + 1} - AUD - DOLAR AUSTRALIANO</td>
                        <td className="border border-gray-300 py-2 px-4">1.2250</td>
                        <td className="border border-gray-300 py-2 px-4">1.2200</td>
                        <td className="border border-gray-300 py-2 px-4">+0.0030</td>
                        <td className="border border-gray-300 py-2 px-4">+0.25%</td>
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