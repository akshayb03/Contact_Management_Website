import { Link } from "react-router-dom";
import MapIcon from "../assets/maps-and-flags.png";
import UserIcon from "../assets/user.png";
import LineChartIcon from "../assets/line-chart.png";

const windowWidth = window.innerWidth;
export const SideBar = () => {
  return (
    <div className=" border border-black flex flex-row lg:flex-col">
      <PageLink text={"Contacts"} imgSrc={UserIcon} path="/contacts" />
      <PageLink text={"Charts"} imgSrc={LineChartIcon} path="/charts" />
      <PageLink text={"Maps"} imgSrc={MapIcon} path="/maps" />
    </div>
  );
};

const PageLink = ({
  text,
  imgSrc,
  path,
}: {
  text: string;
  imgSrc: string;
  path: string;
}) => {
  return (
    <div className="flex justify-center items-center border-black p-4">
      <Link
        to={path}
        className="text-2xl underline underline-offset-2 text-[#0000FF]"
      >
        {windowWidth < 1024 ? (
          <img src={imgSrc} width={16} height={16} alt="icons" />
        ) : (
          <img src={imgSrc} width={30} height={30} alt="icons" />
        )}
      </Link>
    </div>
  );
};
