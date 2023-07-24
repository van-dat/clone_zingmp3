import { Outlet, useParams } from "react-router-dom";
import { useState } from "react";
import { Playder, SidebarLeft, SidebarRight, Header, AppLoading } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import * as action from '../../store/actions'




const Public = () => {

  const [show, setShow] = useState(false);
  const {isLoading ,isScroll } = useSelector(state => state.app)
  const dispatch = useDispatch()
  
  const handleScroll = (e) => {
     
      if(e.target.scrollTop === 0) {
        dispatch(action.getScroll(true))
      }else {
        dispatch(action.getScroll(false))
      }
  }
  return (
    <div className="w-full flex h-screen flex-col bg-main relative overflow-hidden ">
      <div className="w-full flex flex-auto h-full">
        {/* slide left */}
        <div className="w-[240px] flex-none bg-sider-left  ">
          <SidebarLeft />
        </div>
        <div onScroll={handleScroll} className="flex-auto h-min-screen w-full  overflow-y-auto relative pb-[200px]  ">
          {isLoading && <div className="absolute left-0 right-0 top-0 bottom-0 bg-bg-layd z-10 flex items-center justify-center">
            <AppLoading/>
          </div>}
          <div className={`${isScroll ? 'bg-transparent' : 'bg-main'} fixed top-0 right-0 left-[240px]  h-[70px]  flex items-center z-10 `}>
            <Header /> 
          </div>
          <Outlet />
        </div>
        {show && <div className="w-[329px] h-screen absolute top-0 right-0  z-20 1600:flex animate-slide-left">
          {show && <SidebarRight />}
        </div>}
      </div>
      <div className="h-[90px] w-full flex-none bg-play-list border-t border-solid z-20  border-default fixed bottom-0 left-0">
        <Playder setShow={setShow} show={show} />
      </div>
    </div>
  );
};

export default Public;
