import "../styles/globals.css";

import { MDXProvider } from "@mdx-js/react";

import CodeBlock from "../components/CodeBlock";
import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import InlineCode from "../components/InlineCode";
import Link from "../components/Link";
import NavBar from "../components/Navbar";
import OrderedList from "../components/OrderedList";
import Text from "../components/Text";
import UnorderedList from "../components/UnorderedList";
import MDXWrapper from "../components/MDXWrapper";
import ResizeWatcher from "../components/ResizeWatcher";

const components = {
  wrapper: MDXWrapper,
  h2: Heading,
  H3: SubHeading,
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
