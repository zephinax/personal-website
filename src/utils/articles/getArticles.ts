import _ from "lodash";
import qs from "qs";

import { IArticle } from "@/types/article";
import { StrapiResponseWithPagination } from "@/types/strapi";

type IParams = {
  populate?: {
    cover?: boolean;
    categories?: boolean;
  };
  pagination?: {
    pageSize?: number;
  };
};

export async function getArticles(params?: IParams) {
  const query = qs.stringify(
    _.merge(
      {
        populate: {
          cover: true,
          categories: true,
        },
        sort: "updatedAt:desc",
      },
      params
    ),
    {
      encodeValuesOnly: true,
    }
  );

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_URL}/api/articles/custom?${query}`,
    {
      next: {
        tags: ["articles"],
      },
    }
  );

  if (!res.ok) {
    return undefined;
  }

  const json: StrapiResponseWithPagination<IArticle> = await res.json();
  return json;
}
