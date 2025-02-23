import { useDispatch, useSelector } from "react-redux";
import { Header } from "../../components/header/Header";
import "./Content.styles.css";
import { HomePage } from "../Pages/HomePage/HomePage";
import { ProfilePage } from "../Pages/ProfilPage/ProfilePage";
import { TerminsPage } from "../Pages/TerminPage/TerminsPage";
import { Termin } from "../Pages/TerminPage/Termin/Termin";
import { supabase } from "../../utils/supabase";
import { useEffect } from "react";
import { setCurrentUser } from "../../redux/authSlice/authSlice";

export const Content = () => {
  const page = useSelector((state: any) => state.router.currentPage);
  const dispatch = useDispatch();
  useEffect(() => {
    const login = async () => {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: "talgiron31@gmail.com",
        password: "test123",
      });
      dispatch(setCurrentUser(data?.user));
      console.log(data, error);
    };
    login();
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

  return (
    <>
      <Header />
      <div className="content-container">{getCurrentPage()}</div>
    </>
  );
};
