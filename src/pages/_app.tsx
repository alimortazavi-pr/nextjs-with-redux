import type { AppProps } from "next/app";

//Assets
import "@/assets/css/globals.css";

//Redux
import { Provider } from "react-redux";
import store from "../store";

//MainLayout
import MainLayout from "@/MainLayout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </Provider>
  );
}

export default MyApp;
