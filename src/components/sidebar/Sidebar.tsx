import { Button } from "@mantine/core";
import "./Sidebar.styles.css"
import { slide as Menu } from 'react-burger-menu'

const Sidebar = () => {
    return (
        <Menu>
            <Button>Home</Button>
            <Button>Profil</Button>
            <Button>Termini</Button>
        </Menu>
      );
}

export default Sidebar