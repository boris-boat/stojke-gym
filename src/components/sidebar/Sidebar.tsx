import { Button } from "@mantine/core";
import "./Sidebar.styles.css";
import { slide as Menu } from "react-burger-menu";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../../redux/routerSlice/routerSlice";
import { useState } from "react";
import { useAuth } from "../../utils/hooks/useAuth";

const Sidebar = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const { user } = useAuth();

  if (!user) {
    return null;
  }
  return (
    <Menu isOpen={open} onStateChange={(state) => setOpen(state.isOpen)}>
      <Button
        onClick={() => {
          setOpen(false);
          dispatch(setCurrentPage("home"));
        }}
      >
        Home
      </Button>
      <Button
        onClick={() => {
          setOpen(false);
          dispatch(setCurrentPage("profile"));
        }}
      >
        {/* admin page is profile page if not admin */}
        Admin
      </Button>
      <Button
        onClick={() => {
          dispatch(setCurrentPage("termins"));
          setOpen(false);
        }}
      >
        Termin
      </Button>
    </Menu>
  );
};

export default Sidebar;
