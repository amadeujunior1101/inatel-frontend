import { useState, useEffect } from 'react';

interface IAlertMessage {
  message: string;
}

const AlertMessage = ({ message }: IAlertMessage) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {visible && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-5" role="alert">
          <strong className="font-bold">{message}</strong>
        </div>
      )}
    </>
  );
};

export { AlertMessage }
