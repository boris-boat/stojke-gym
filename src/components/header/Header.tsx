import { useDispatch } from "react-redux";
import "./Header.styles.css";
import { setCurrentPage } from "../../redux/routerSlice/routerSlice";

export const Header = () => {
  const dispatch = useDispatch();

  return (
    <div className="header-container">
      <span onClick={() => dispatch(setCurrentPage("home"))}>HEADER</span>
    </div>
  );
};
