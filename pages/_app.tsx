import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import { useRouter } from "next/router";
import { Provider } from "react-redux";
import { store } from "../app/store";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const pathname = router.pathname;

  // console.log(pathname);
  return (
    <Provider store={store}>
      <div
        className={
          pathname === "/games/joined-game" || pathname === "/games/spectate"
            ? "app-black"
            : "app-bg bg-white"
        }
      >
        <Navbar />
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}

export default MyApp;
