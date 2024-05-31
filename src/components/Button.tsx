interface IIsMobile {
  isMobile: boolean
  title: string
}

const Button =({isMobile, title}: IIsMobile)=> {

  return (
      <>
          {isMobile ? (
              <div className="bg-main-white flow-root items-center justify-between w-full max-w-[720px] mx-auto text-main-white text-center">
                <div className="space-y-4 pb-[20px]">
                  <button className="bg-main-blue text-main-white font-roboto font-normal text-[16px] p-2 w-full rounded-lg">{title}</button>
                </div>
              </div>              
          ) : (
              <div className="bg-main-white flow-root items-center justify-between w-full max-w-[1600px] mx-auto text-main-white text-center">
                <div className="space-y-4 pb-[20px]">
                  <button className="bg-main-blue text-main-white font-roboto font-normal text-[16px] p-2 w-full rounded-lg">{title}</button>
                </div>
              </div>  
          )}
      </>
  )
}

export { Button }