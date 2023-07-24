import {  Slider } from "../../components";
import { Section ,NewRelease, ChartRank } from "../../components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const Home = () => {
  const { daily , chill ,artist, weekChart, AlbumHot, chart, rank  } = useSelector((state) => state.app);

  return (
    <div className="overflow-y-auto flex flex-col pt-[70px] ">
      <Slider />
      <Section data = {chill}/>
      <NewRelease/>
      <Section data = {daily}/>
      <Section data = {artist}/>
      <ChartRank
       chart = {chart}
       rank = {rank}
       />
      <div className="flex px-6 justify-between  ">
        {weekChart.length > 0 && weekChart?.map(item => (
          <Link to={item?.link.split('.')[0]} key={item.link} className="flex px-3">
            <img
            src={item.cover}
            className="w-full object-contain rounded-lg"s
            alt="img"
            />
          </Link>
        ))}
      </div>
      <Section data = {AlbumHot}/>

    </div>

  );
};

export default Home;
