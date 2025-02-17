import { useSelector } from "react-redux";
import { Header } from "../../components/header/Header";
import "./Content.styles.css";
import { HomePage } from "../Pages/HomePage/HomePage";
import { ProfilePage } from "../Pages/ProfilPage/ProfilePage";

export const Content = () => {
  const page = useSelector((state: any) => state.router.currentPage);

  const getCurrentPage = () => {
    switch (page) {
      case "home":
        return <HomePage />;
      case "profile":
        return <ProfilePage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <>
      <Header />
      <div className="content-container">{getCurrentPage()}</div>
    </>
  );
};
