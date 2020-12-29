import vsDark from "prism-react-renderer/themes/vsDark";
import Highlight, { defaultProps } from "prism-react-renderer";
import classNames from "classnames";

export default function CodeBlock({ children, className }) {
  // TODO: clipboard copy button

  const language = className.replace(/language-/, "");

  return (
    <Highlight
      {...defaultProps}
      code={children}
      theme={vsDark}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={classNames(className, "rounded mt-2")}
          style={{ ...style, padding: "20px" }}
        >
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
}
