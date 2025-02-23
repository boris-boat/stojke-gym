import { Button } from "@mantine/core";
import "./Sidebar.styles.css";
import { slide as Menu } from "react-burger-menu";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../../redux/routerSlice/routerSlice";
import { useState } from "react";

const Sidebar = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
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
      <Button>Profil</Button>
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
