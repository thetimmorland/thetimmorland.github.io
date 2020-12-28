import "../styles/globals.css";

import { MDXProvider } from "@mdx-js/react";

import CodeBlock from "../components/CodeBlock";
import H1 from "../components/H1";
import H2 from "../components/H2";
import H3 from "../components/H3";
import InlineCode from "../components/InlineCode";
import Link from "../components/Link";
import NavBar from "../components/Navbar";
import OrderedList from "../components/OrderedList";
import Text from "../components/Text";
import UnorderedList from "../components/UnorderedList";
import Wrapper from "../components/Wrapper";
import ResizeWatcher from "../components/ResizeWatcher";

const components = {
  wrapper: Wrapper,
  h1: H1,
  h2: H2,
  H3: H3,
  p: Text,
  a: Link,
  code: CodeBlock,
  inlineCode: InlineCode,
  ol: OrderedList,
  ul: UnorderedList,
};

function App({ Component, pageProps }) {
  return (
    <div className="root">
      <ResizeWatcher />
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
