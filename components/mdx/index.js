import CodeBlock from "./CodeBlock";
import H1 from "./H1";
import H2 from "./H2";
import H3 from "./H3";
import InlineCode from "./InlineCode";
import Link from "./Link";
import OrderedList from "./OrderedList";
import Wrapper from "./Wrapper";
import Text from "./Text";
import UnorderedList from "./UnorderedList";

export default {
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
