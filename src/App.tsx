import { Provider } from "urql";
import UrqlClient from "./components/UrqlClient";
import { MantineProvider, createTheme } from "@mantine/core";
import "@mantine/core/styles.css";
import { PropsWithChildren } from "react";
import MainForm from "./components/MainForm";

const theme = createTheme({});

function App({ children }: PropsWithChildren) {
  return (
    <MantineProvider theme={theme}>
      <main className="bg-phantom-blue flex min-h-screen justify-center flex-col items-center">
        {children}
      </main>
    </MantineProvider>
  );
}

function HomePage() {
  return (
    <App>
      <Provider value={UrqlClient}>
        <MainForm />
      </Provider>
    </App>
  );
}

export default HomePage;
