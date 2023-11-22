import { store } from "@/redux/store";
import "@/styles/globals.css";
import { QueryClientProvider, QueryClient } from "react-query";
import { Provider } from "react-redux";

const client = new QueryClient();

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <QueryClientProvider client={client}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </Provider>
  );
}
