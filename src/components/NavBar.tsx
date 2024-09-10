import { useLocation } from "react-router-dom";

export const NavBar = () => {
  const location = useLocation();
  const path = location.pathname;
  let title;
  switch (path) {
    case "/contacts":
      title = "Contacts Page";
      break;
    case "/charts":
      title = "Charts Page";
      break;
    case "/maps":
      title = "Maps Page";
      break;
    default:
      title = "Contacts Page";
      break;
  }
  return (
    <div className="flex justify-center items-center bg-[#0369a1] h-12">
      <p className="text-white font-bold">{title}</p>
    </div>
  );
};
