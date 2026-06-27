import { Moon, ChevronDown } from "lucide-react";
import { mockUser } from "../mock/user";

const Topbar = () => {
  const user = mockUser;

  return (
    <header className="bg-white border-b h-16 px-6 flex justify-end items-center">
      <div className="flex items-center gap-5">

        <button>
          <Moon size={18} />
        </button>

        <div className="flex items-center gap-3 cursor-pointer">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-8 h-8 rounded-full"
          />

          <span className="font-medium">
            {user.name}
          </span>

          <ChevronDown size={16} />
        </div>

      </div>
    </header>
  );
};

export default Topbar;