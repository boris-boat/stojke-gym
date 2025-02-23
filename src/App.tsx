import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import { Content } from "./ui/Content/Content";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <MantineProvider>
        <Sidebar />
        <Content />
      </MantineProvider>
    </Provider>
  );
}

export default App;
