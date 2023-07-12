import { Outlet } from "react-router-dom";
import { useState } from "react";
import { Playder, SidebarLeft, SidebarRight, Header, AppLoading } from "../../components";
import { useSelector } from "react-redux";

const Public = () => {
  const [show, setShow] = useState(false);
  const {isLoading} = useSelector(state => state.app)
  return (
    <div className="w-full flex h-screen flex-col bg-main relative overflow-hidden ">
      <div className="w-full flex flex-auto h-full">
        <div className="w-[240px] flex-none bg-sider-left">
          <SidebarLeft />
        </div>
        <div className="flex-auto h-min-screen w-full  overflow-y-auto relative pb-[200px]  ">
          {isLoading && <div className="absolute left-0 right-0 top-0 bottom-0 bg-bg-layd z-10 flex items-center justify-center">
            <AppLoading/>
          </div>}
          <div className="h-[70px]  flex items-center ">
            <Header /> 
          </div>
          <Outlet />
        </div>
        <div className="w-[329px] h-screen absolute top-0 right-0   1600:flex animate-slide-left">
          {show && <SidebarRight />}
        </div>
      </div>
      <div className="h-[90px] w-full flex-none bg-play-list border-t border-solid z-20  border-default fixed bottom-0 left-0">
        <Playder setShow={setShow} show={show} />
      </div>
    </div>
  );
};

export default Public;
