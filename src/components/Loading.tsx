import { FC } from "react";

const LoadingComponent: FC = () => {
    return (
        <div className="flex justify-center items-center h-screen w-screen">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
        </div>
    );
}

export { LoadingComponent };

