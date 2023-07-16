import "./index.scss";
import {
  Home,
  Login,
  Public,
  Personal,
  Playlist,
  WeekChart,
  ZingChart,
  SearchAll,
  SearchSong,
  SearchPlaylist,
  Search
} from "./containers/public";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Path from "./ultis/path";
import { useEffect } from "react";
import * as actions from "./store/actions";
import { ToastContainer } from "react-toastify";

function App() {
  const dispatch = useDispatch(
    useEffect(() => {
      dispatch(actions.getHome());
    }, [])
  );
  return (
    <>
      <div className="App ">
        <Routes>
          <Route path={Path.PUBLIC} element={<Public />}>
            <Route path={Path.HOME} element={<Home />} />
            <Route path={Path.HOME1} element={<Home />} />
            <Route path={Path.MYMUSIC} element={<Personal />} />
            <Route path={Path.ALBUM__TITLE__PID} element={<Playlist />} />
            <Route path={Path.PLAYLIST__TITLE__PID} element={<Playlist />} />
            <Route path={Path.WEEKCHART__TITLE__PID} element={<WeekChart />} />
            <Route path={Path.ZINGCHART} element={<ZingChart />} />
            <Route path={Path.SEARCH} element={<Search/>}>
              <Route path={Path.SEARCH_SONG} element={<SearchSong />} />
              <Route path={Path.SEARCH_ALBUM} element={<SearchPlaylist />} />
              <Route path={Path.SEARCH_ALL} element={<SearchAll />} />
            </Route>

            <Route path={Path.LOGIN} element={<Login />} />
          </Route>
        </Routes>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
