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
  Search,
  SearchArtist,
  SearchMV,
  Artist
} from "./containers/public";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Path from "./ultis/path";
import { useEffect, useState } from "react";
import * as actions from "./store/actions";
import { ToastContainer } from "react-toastify";
import * as api from './api'

function App() {
  const [weekChart, setweekChart] = useState();
  const dispatch = useDispatch(
    useEffect(() => {
      dispatch(actions.getHome());
      const fetchData = async () => {
        const response = await api.apigetChart();
        if (response?.data?.err === 0) {
          setweekChart(response?.data?.data?.weekChart)
        }
      };
  
      fetchData();
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
            <Route path={Path.WEEKCHART__TITLE__PID} element={<WeekChart weekChart = {weekChart && Object.values(weekChart)}  />} />
            <Route path={Path.ZINGCHART} element={<ZingChart />} />
            <Route path={Path.ARTIST} element={<Artist />} />
            <Route path={Path.ARTISTA} element={<Artist />} />
            <Route path={Path.SEARCH} element={<Search/>}>
              <Route path={Path.SEARCH_SONG} element={<SearchSong />} />
              <Route path={Path.SEARCH_ALBUM} element={<SearchPlaylist />} />
              <Route path={Path.SEARCH_ALL} element={<SearchAll />} />
              <Route path={Path.SEARCH_MV} element={<SearchMV />} />
              <Route path={Path.SEARCH_ARTIST} element={<SearchArtist />} />
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
