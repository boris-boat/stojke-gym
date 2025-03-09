import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import { Content } from "./ui/Content/Content";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <MantineProvider>
          <Sidebar />
          <Content />
        </MantineProvider>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
