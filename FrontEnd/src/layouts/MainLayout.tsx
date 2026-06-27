import Sidebar from "../layouts/sidebar";
import Topbar from "./Topbar";

interface Props {
  children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <div className="flex min-h-screen bg-gray-50">

      {/* Sidebar */}
      <Sidebar />

      {/* Right Content */}
      <div className="flex-1 flex flex-col">

        {/* Topbar */}
        <Topbar />

        {/* Page Content */}
        <main className="flex-1 p-4 md:p-6 lg:p-8 overflow-y-auto">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>

      </div>
    </div>
  );
};

export default MainLayout;