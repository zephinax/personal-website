import {
  type Components,
  MarkdownAsync as ReactMarkdownAsync,
  type Options,
} from "react-markdown";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";

import { cn } from "@/lib/cn";

const components: Components = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  a({ node, children, ...restProps }) {
    return (
      <a {...restProps} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  },
  figure({ node, className, children, ...restProps }) {
    const hasPrettyCode =
      node?.properties?.["data-rehype-pretty-code-figure"] !== undefined;

    return (
      <figure
        className={cn(
          hasPrettyCode && "not-prose rehype-pretty-code",
          className
        )}
        {...restProps}
      >
        {children}
      </figure>
    );
  },
};

export function Markdown(props: Readonly<Options>) {
  return (
    <ReactMarkdownAsync
      components={components}
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[
        [
          rehypePrettyCode,
          {
            theme: "github-dark",
            keepBackground: false,
          },
        ],
      ]}
      {...props}
    />
  );
}
