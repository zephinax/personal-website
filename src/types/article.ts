import { IMedia } from "./media";

export type IArticleCategory = {
  id: string;
  attributes: {
    title: string;
    slug: string;
  };
};

export type IArticle = {
  id: string;
  attributes: {
    title: string;
    slug: string;
    cover: {
      data: IMedia;
    };
    publishedAt: string;
  };
};
