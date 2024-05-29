interface ILength{
  isMobile: boolean | null
}

const Dashboard =({ isMobile }: ILength)=>{
  console.log(isMobile)
  return (
    <div className="bg-main-blue">
      <h1>Dashboard</h1>
    </div>
  )
}

export { Dashboard }