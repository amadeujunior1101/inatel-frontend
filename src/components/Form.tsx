import { useState } from "react";
import { Button } from "./Button";

interface IIsMobile {
  isMobile: boolean;
  title: string;
  onClick: (email: string, password: string) => void;
}

const Form = ({ isMobile, title, onClick }: IIsMobile) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    onClick(email, password);
  };

  return (
    <>
      {isMobile ? (
        <div className="bg-main-white flex items-center justify-between w-full max-w-[720px] mx-auto p-2 text-main-white">
          <div className="w-full flex justify-center">
            <div className="max-w-[564px] w-full">
              <div className="space-y-1 pb-4">
                <span className="text-main-black font-roboto font-normal text-[16px]">E-mail</span>
                <input
                  className="w-full h-[36px] text-main-black border-2 border-secondary-gray rounded-lg pl-4"
                  type="text"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <div className="space-y-1 pb-[30px]">
                <span className="text-main-black font-roboto font-normal text-[16px]">Senha</span>
                <input
                  className="w-full h-[36px] text-main-black border-2 border-secondary-gray rounded-lg pl-4"
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
              <Button isMobile={isMobile} title={title} onClick={handleSubmit} />
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full max-w-[1600px] mx-auto p-2 text-main-black">
          <div className="w-full flex justify-center">
            <div className="max-w-[564px] w-full">
              <div className="space-y-1 pb-4">
                <span className="text-main-black font-roboto font-normal text-[16px]">E-mail</span>
                <input
                  className="w-full h-[36px] text-main-black border-2 border-secondary-gray rounded-lg pl-4"
                  type="text"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <div className="space-y-1 pb-[30px]">
                <span className="text-main-black font-roboto font-normal text-[16px]">Senha</span>
                <input
                  className="w-full h-[36px] text-main-black border-2 border-secondary-gray rounded-lg pl-4"
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
              <Button isMobile={isMobile} title={title} onClick={handleSubmit} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export { Form };
