import ReactMarkdown, { Options } from "react-markdown";

export function Markdown(props: Readonly<Options>) {
  return (
    <ReactMarkdown
      components={{
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        a({ node, children, ...restProps }) {
          return (
            <a {...restProps} target="_blank" rel="noopener noreferrer">
              {children}
            </a>
          );
        },
      }}
      {...props}
    />
  );
}
