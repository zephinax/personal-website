import { type Components, MarkdownAsync } from "react-markdown";
import remarkGfm from "remark-gfm";

const defaultComponents: Components = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  a({ node, children, ...props }) {
    return (
      <a {...props} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  },
};

export function Markdown({
  components,
  ...props
}: React.ComponentProps<typeof MarkdownAsync>) {
  return (
    <MarkdownAsync
      components={{ ...defaultComponents, ...components }}
      remarkPlugins={[remarkGfm]}
      {...props}
    />
  );
}
