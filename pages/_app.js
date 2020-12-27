import "../styles/globals.css";

import { MDXProvider } from "@mdx-js/react";

import NavBar from "../components/Navbar";
import components from "../components/mdx";

function App({ Component, pageProps }) {
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
