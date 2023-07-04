import { Outlet } from "react-router-dom";
import { Playder, SidebarLeft, SidebarRight, Header } from "../../components";

const Public = () => {
  return (
    <div className="w-full flex h-screen flex-col bg-main relative">
      <div className="w-full flex flex-auto h-full">
        <div className="w-[240px] flex-none bg-sider-left">
          <SidebarLeft />
        </div>
        <div className="flex-auto  h-screen overflow-y-auto ">
          <div className="h-[70px] flex items-center">
            <Header />
          </div>
          <Outlet />
        </div>
        <div className="w-[329px] flex-none hidden 1600:flex animate-slide-left">
          <SidebarRight />
        </div>
      </div>
      <div className="h-[90px] w-full flex-none bg-play-list border-t border-solid  border-default fixed bottom-0 left-0">
        <Playder />
      </div>
    </div>
  );
};

export default Public;
