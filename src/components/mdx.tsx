import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import rehypePrettyCode, { LineElement } from "rehype-pretty-code";
import remarkGfm from "remark-gfm";
import { visit } from "unist-util-visit";

import { ComponentPreview } from "@/components/component-preview";
import { ComponentSource } from "@/components/component-source";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/cn";
import { rehypeComponent } from "@/lib/rehype-component";
import { codeImport } from "@/lib/remark-code-import";

import { CopyButton } from "./copy-button";

const components: MDXRemoteProps["components"] = {
  a: (props: React.ComponentProps<"a">) => (
    <a {...props} target="_blank" rel="noopener noreferrer" />
  ),
  table: ({ className, ...props }: React.ComponentProps<"table">) => (
    <div className="not-prose my-6 w-full overflow-y-auto rounded-lg border">
      <table
        className={cn(
          "relative w-full overflow-hidden border-none text-sm",
          className
        )}
        {...props}
      />
    </div>
  ),
  thead: ({ className, ...props }: React.ComponentProps<"thead">) => (
    <thead className={cn("[&_tr]:border-b", className)} {...props} />
  ),
  tbody: ({ className, ...props }: React.ComponentProps<"tbody">) => (
    <tbody className={cn("[&_tr:last-child]:border-0", className)} {...props} />
  ),
  tr: ({ className, ...props }: React.ComponentProps<"tr">) => (
    <tr
      className={cn(
        "border-b border-grid transition-colors hover:bg-muted/50",
        className
      )}
      {...props}
    />
  ),
  th: ({ className, ...props }: React.ComponentProps<"th">) => (
    <th
      className={cn(
        "h-10 px-2 text-left align-middle font-sans font-medium whitespace-nowrap text-muted-foreground",
        className
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: React.ComponentProps<"td">) => (
    <td
      className={cn("p-2 align-middle whitespace-nowrap", className)}
      {...props}
    />
  ),
  figure({ className, ...props }: React.ComponentProps<"figure">) {
    const hasPrettyCode = "data-rehype-pretty-code-figure" in props;

    return (
      <figure
        className={cn(
          hasPrettyCode && "not-prose relative rehype-pretty-code",
          className
        )}
        {...props}
      />
    );
  },
  pre({
    __withMeta__,
    __rawString__,
    ...props
  }: React.ComponentProps<"pre"> & {
    __withMeta__?: boolean;
    __rawString__?: string;
  }) {
    return (
      <>
        <pre {...props} />

        {__rawString__ && (
          <CopyButton
            className={cn(
              "absolute top-3.5 right-3.5",
              __withMeta__ && "top-10.5"
            )}
            value={__rawString__}
          />
        )}
      </>
    );
  },
  code({ className, ...props }: React.ComponentProps<"code">) {
    const hasPrettyCode = "data-language" in props;

    return (
      <code
        className={cn(
          !hasPrettyCode &&
            "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm",
          className
        )}
        {...props}
      />
    );
  },
  ComponentPreview,
  ComponentSource,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
};

const options: MDXRemoteProps["options"] = {
  mdxOptions: {
    remarkPlugins: [remarkGfm, codeImport],
    rehypePlugins: [
      rehypeComponent,
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
    ],
  },
};

export function MDX({ code }: { code: string }) {
  return <MDXRemote source={code} components={components} options={options} />;
}
