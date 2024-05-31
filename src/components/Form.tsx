import { Button } from "./Button"

interface IIsMobile {
  isMobile: boolean
  title: string
}

const Form =({isMobile, title}: IIsMobile)=> {

  return (
      <>
          {isMobile ? (
              <div className="bg-main-white flex items-center justify-between w-full max-w-[720px] mx-auto p-2 text-main-white">
                <div className="w-full flex justify-center">
                  <div className="max-w-[564px] w-full">
                    <div className="space-y-1 pb-4">
                      <span className="text-main-black font-roboto font-normal text-[16px]">E-mail</span>
                      <input className="w-full h-[36px] text-main-black border-2 border-secondary-gray rounded-lg" type="text" />
                    </div>
                    <div className="space-y-1 pb-[30px]">
                      <span className="text-main-black font-roboto font-normal text-[16px]">Senha</span>
                      <input className="w-full h-[36px] text-main-black border-2 border-secondary-gray rounded-lg" type="text" />
                    </div>
                    <Button isMobile={isMobile} title={title} />
                  </div>
                </div>
              </div>              
          ) : (
            <div className="w-full max-w-[1600px] mx-auto p-2 text-main-black">
              <div className="w-full flex justify-center">
                <div className="max-w-[564px] w-full">
                  <div className="space-y-1 pb-4">
                    <span className="text-main-black font-roboto font-normal text-[16px]">E-mail</span>
                    <input className="w-full h-[36px] text-main-black border-2 border-secondary-gray rounded-lg" type="text" />
                  </div>
                  <div className="space-y-1 pb-[30px]">
                    <span className="text-main-black font-roboto font-normal text-[16px]">Senha</span>
                    <input className="w-full h-[36px] text-main-black border-2 border-secondary-gray rounded-lg" type="text" />
                  </div>
                  <Button isMobile={isMobile} title={title} />
                </div>
              </div>
            </div>
          )}
      </>
  )
}

export { Form }