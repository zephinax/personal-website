import {
  type Components,
  ExtraProps,
  MarkdownAsync as ReactMarkdownAsync,
  type Options,
} from "react-markdown";
import rehypePrettyCode, { LineElement } from "rehype-pretty-code";
import remarkGfm from "remark-gfm";
import { visit } from "unist-util-visit";

import { cn } from "@/lib/cn";

import { CopyButton } from "./copy-button";

const components: Components = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  a({ node, children, ...props }) {
    return (
      <a {...props} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  },
  figure({ node, className, children, ...props }) {
    const hasPrettyCode =
      node?.properties?.["data-rehype-pretty-code-figure"] !== undefined;

    return (
      <figure
        className={cn(
          hasPrettyCode && "not-prose relative rehype-pretty-code",
          className
        )}
        {...props}
      >
        {children}
      </figure>
    );
  },
  pre({
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    node,
    __withMeta__,
    __rawString__,
    ...props
  }: React.ComponentProps<"pre"> &
    ExtraProps & {
      __withMeta__?: boolean;
      __rawString__?: string;
    }) {
    return (
      <>
        <pre {...props} />

        {__rawString__ && (
          <CopyButton
            className={cn(
              "absolute top-3.5 right-4",
              __withMeta__ && "top-9.5"
            )}
            value={__rawString__}
          />
        )}
      </>
    );
  },
};

export function Markdown(props: Readonly<Options>) {
  return (
    <ReactMarkdownAsync
      components={components}
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[
        () => (tree) => {
          visit(tree, (node) => {
            if (node?.type === "element" && node?.tagName === "pre") {
              const [codeEl] = node.children;
              if (codeEl.tagName !== "code") {
                return;
              }

              node.__rawString__ = codeEl.children?.[0].value;
            }
          });
        },
        [
          rehypePrettyCode,
          {
            theme: "github-dark",
            keepBackground: false,
            onVisitLine(node: LineElement) {
              // Prevent lines from collapsing in `display: grid` mode, and allow empty
              // lines to be copy/pasted
              if (node.children.length === 0) {
                node.children = [{ type: "text", value: " " }];
              }
            },
          },
        ],
        () => (tree) => {
          visit(tree, (node) => {
            if (node?.type === "element" && node?.tagName === "figure") {
              if (!("data-rehype-pretty-code-figure" in node.properties)) {
                return;
              }

              const preElement = node.children.at(-1);
              if (preElement.tagName !== "pre") {
                return;
              }

              preElement.properties["__withMeta__"] =
                node.children.at(0).tagName === "figcaption";
              preElement.properties["__rawString__"] = node.__rawString__;
            }
          });
        },
      ]}
      {...props}
    />
  );
}
