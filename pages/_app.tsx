import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import Head from "../components/Head";
import { Provider } from "react-redux";

import {store} from "../features/store"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Head title={`BlogPosters | ${pageProps.title}`} />
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
