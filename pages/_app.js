import "../styles/globals.css";

import { MDXProvider } from "@mdx-js/react";

import NavBar from "../components/Navbar";
import components from "../components/mdx";

import { useEffect } from "react";

function App({ Component, pageProps }) {
  useEffect(() => {
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    setVh();
    window.addEventListener("resize", setVh);

    return () => {
      window.removeEventListener(setVh);
    };
  }, []);

  return (
    <div className="root">
      <NavBar />
      <main>
        <MDXProvider components={components}>
          <Component />
        </MDXProvider>
      </main>
    </div>
  );
}

export default App;
