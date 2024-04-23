"use client";

import { useEffect, useState } from "react";

import { IArticle } from "@/types/article";
import { getArticles } from "@/utils/articles";

import { Article } from "./article";

export const BlogList = () => {
  const [articles, setArticles] = useState<IArticle[]>();

  useEffect(() => {
    (async () => {
      const data = await getArticles({
        populate: {
          categories: false,
        },
      });

      setArticles(data?.data);
    })();
  }, []);

  if (!articles) {
    return null;
  }

  return (
    <>
      <h2 className="mb-4 text-xl font-semibold">Latest News</h2>

      <section className="mb-8 grid gap-4">
        {articles.map((article) => (
          <Article key={article.id} article={article} />
        ))}
      </section>
    </>
  );
};
