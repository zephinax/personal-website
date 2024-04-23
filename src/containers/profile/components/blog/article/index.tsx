import dayjs from "dayjs";
import _ from "lodash";
import Image from "next/image";

import { IArticle } from "@/types/article";

type IProps = {
  article: IArticle;
};

export const Article = ({ article }: IProps) => {
  const cover = article.attributes.cover.data.attributes;

  return (
    <a
      className="group block"
      href={`https://quaric.com/blog/${article.attributes.slug}`}
      target="_blank"
      rel="noopener noreferrer"
      title={article.attributes.title}
    >
      <article className="flex gap-4 md:items-center">
        <div className="w-32 md:w-48">
          <div className="aspect-h-9 aspect-w-16 relative select-none overflow-hidden rounded-xl bg-slate-800 shadow-lg">
            <Image
              src={cover.formats.thumbnail.url}
              alt={article.attributes.title}
              fill
              sizes="(max-width: 768px) 128w, 192w"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>

        <div className="flex-1">
          <h3 className="leading-heading mb-1 text-balance font-medium transition-colors group-hover:text-blue-500">
            {article.attributes.title}
          </h3>

          <time
            className="block text-sm text-slate-400"
            dateTime={dayjs(article.attributes.publishedAt).toISOString()}
          >
            {_.upperFirst(dayjs(article.attributes.publishedAt).format("ll"))}
          </time>
        </div>
      </article>
    </a>
  );
};
