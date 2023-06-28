import { Outlet } from "react-router-dom";
import { Playder, SidebarLeft, SidebarRight } from "../../components";

const Public = () => {
  return (
    <div className="w-full flex min-h-screen flex-col bg-main">
      <div className="w-full flex flex-auto h-full">
        <div className="w-[240px] flex-none bg-sider-left">
          <SidebarLeft />
        </div>
        <div className="flex-auto">
          <Outlet />
        </div>
        <div className="w-[329px] flex-none hidden 1600:flex animate-slide-left">
          <SidebarRight />
        </div>
      </div>
      <div className="h-[90px] flex-none bg-play-list border-t border-solid  border-default">
        <Playder />
      </div>
    </div>
  );
};

export default Public;
