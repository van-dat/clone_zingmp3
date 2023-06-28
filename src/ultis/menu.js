import icons from "./icon";

const {
  MdOutlineLibraryMusic,
  RiDonutChartLine,
  FcLineChart,
  PiMusicNotesPlus,
  MdOutlineCategory,
  AiOutlineStar
} = icons;
export const sidbarMenu = [
  {
    path: "my-music",
    test: "Thư Viện",
    icons: <MdOutlineLibraryMusic size={24} />,
  },
  {
    path: "",
    test: "Khám phá",
    icons: <RiDonutChartLine size={24} />,
  },
  {
    path: "zing-chart",
    test: "#zingchart",
    icons: <FcLineChart  size={24}/>,
  },
  {
    path: "moi-phat-hanh",
    test: "BXH Nhạc Mới",
    icons: <PiMusicNotesPlus size={24} />,
  },
  {
    path: "hub",
    test: "Chủ Đề & Thể Loại",
    icons: <MdOutlineCategory size={24} />,
  },
  {
    path: "top100",
    test: "Top 100",
    icons: <AiOutlineStar size={24} />,
  },
];

export default sidbarMenu;
