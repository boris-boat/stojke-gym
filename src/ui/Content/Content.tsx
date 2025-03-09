import { useDispatch, useSelector } from "react-redux";
import { Header } from "../../components/header/Header";
import "./Content.styles.css";
import { HomePage } from "../Pages/HomePage/HomePage";
import { ProfilePage } from "../Pages/ProfilPage/ProfilePage";
import { TerminsPage } from "../Pages/TerminPage/TerminsPage";
import { Termin } from "../Pages/TerminPage/Termin/Termin";
import { supabase } from "../../utils/supabase";
import { useEffect } from "react";
import { loginUser, setCurrentUser } from "../../redux/authSlice/authSlice";
import { useAuth } from "../../utils/hooks/useAuth";
import LoginPage from "../Pages/LoginPage/LoginPage";

export const Content = () => {
  const page = useSelector((state: any) => state.router.currentPage);
  const { user, isLoading, login, signup, logout } = useAuth();
  console.log(user);
  useEffect(() => {
    // logout();
  }, []);
  const getCurrentPage = () => {
    switch (page) {
      case "home":
        return <HomePage />;
      case "profile":
        return <ProfilePage />;
      case "termins":
        return <TerminsPage />;
      case "termin":
        return <Termin />;

      default:
        return <HomePage />;
    }
  };

  if (!user) {
    return <LoginPage />;
  }

  return (
    <>
      <Header />
      <div className="content-container">{getCurrentPage()}</div>
    </>
  );
};
