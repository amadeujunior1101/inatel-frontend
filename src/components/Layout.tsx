import { ReactNode, useEffect } from "react"
import { useLoading } from "../loading.context"
import { LoadingComponent } from "../components/Loading"
// import { TopBar } from "./TopBar";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { loading } = useLoading();

  useEffect(() => {
    document.body.style.overflowY = loading ? "hidden" : "auto";
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [loading]);

  return (
    <div className="relative min-h-screen">
      {loading && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
          <LoadingComponent />
        </div>
      )}
      {/* <div className="w-full bg-blue-900">
        <TopBar />
      </div> */}
      <div className="w-full">
        {children}
      </div>
    </div>
  );
};

export { Layout };
