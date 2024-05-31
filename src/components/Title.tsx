interface IIsMobile {
    isMobile: boolean
    title: string
}

const Title =({isMobile, title}: IIsMobile)=> {

    return (
        <>
            {isMobile ? (
                <div className="bg-main-white flow-root items-center justify-between w-full max-w-[720px] mx-auto p-5 text-main-white text-center">
                  <span className="text-main-black font-roboto font-bold text-[16px]">{title}</span>
                </div>              
            ) : (
                <div className="bg-main-white flow-root items-center justify-between w-full max-w-[1600px] mx-auto p-5 text-main-white text-center">
                  <span className="text-main-black font-roboto font-bold text-[20px]">{title}</span>
                </div>  
            )}
        </>
    )
}

export { Title }