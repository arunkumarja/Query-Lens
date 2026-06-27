import {Shield,Plus,LayoutDashboard,History,Bookmark,FileText,Settings,CircleHelp,} from "lucide-react";
  
  const menuItems = [
    {
      icon: LayoutDashboard,
      label: "Dashboard",
      path: "/",
    },
    {
      icon: History,
      label: "History",
      path: "/history",
    },
    {
      icon: Bookmark,
      label: "Bookmarks",
      path: "/bookmarks",
    },
    {
      icon: FileText,
      label: "Saved Queries",
      path: "/saved",
    },
    {
      icon: Settings,
      label: "Settings",
      path: "/settings",
    },
    {
      icon: CircleHelp,
      label: "API Docs",
      path: "/docs",
    },
  ];
  
  const Sidebar = () => {
    return (
      <aside className="w-64 min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white flex flex-col">
        {/* Logo */}
        <div className="p-6 flex items-center gap-3">
          <div className="bg-violet-600 p-2 rounded-lg">
            <Shield size={18} />
          </div>
  
          <h1 className="text-xl font-bold">
            QueryLens
          </h1>
        </div>
  
        {/* New Analysis */}
        <div className="px-4">
          <button className="w-full flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-700 py-3 rounded-lg font-medium">
            <Plus size={18} />
            New Analysis
          </button>
        </div>
  
        {/* Menu */}
        <nav className="mt-6 px-3 flex-1">
          {menuItems.map((item) => (
            <button
              key={item.label}
              className="
                w-full
                flex
                items-center
                gap-3
                px-4
                py-3
                rounded-lg
                hover:bg-slate-800
                transition
                mb-1
              "
            >
              <item.icon size={18} />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
  
        {/* Upgrade Card */}
        <div className="p-4">
          <div className="bg-slate-800 rounded-xl p-4">
            <h3 className="font-semibold mb-2">
              Upgrade to Pro
            </h3>
  
            <p className="text-sm text-slate-400 mb-4">
              Unlock advanced features and extra conversions.
            </p>
  
            <button className="w-full bg-violet-600 hover:bg-violet-700 py-2 rounded-lg">
              Upgrade Now
            </button>
          </div>
        </div>
      </aside>
    );
  };
  
  export default Sidebar;