import { useSelector } from "react-redux";
import { useParams, NavLink, useLocation } from "react-router-dom";
import { btnAll } from "../../ultis/menu";
import { useEffect, useState } from "react";
import { ItemSong } from "../../components";

const NewRelease = () => {
  const Active = "border border-default px-4 rounded-2xl bg-btn hover:bg-btn ";
  const NoActive = "border border-default px-4 rounded-2xl hover:bg-btn";
  const { newRelease } = useSelector((state) => state.app);
  const location = useLocation();
  const [title, settitle] = useState();
  
  // Lấy giá trị từ URL thông qua URLSearchParams
  useEffect(() => {
    const queryString = window.location.search;
    const searchParams = new URLSearchParams(queryString);
    const title = searchParams.get("filter");
    settitle(title)
  }, [location.search, title]);
console.log(title)
  return (
    <div className="p-9 flex flex-col ">
      <div className="flex items-center gap-2  py-10">
        <h3 className="text-4xl font-bold  text-main">Mới Phát Hành</h3>
      </div>
      <div className="flex gap-3 text-white ">
        {btnAll?.map((item, index) => (
          <NavLink
            key={index}
            to={`${newRelease.link}?filter=${item.keywork}`}
            className={({ isActive }) => (isActive ? Active : NoActive)}
          >
            {item.text}
          </NavLink>
        ))}
      </div>
      <ItemSong
        // songData = {newRelease.items.find(i => i === title)}
      />
    </div>
  );
};

export default NewRelease;
