export type StrapiPagination = {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
};

export type StrapiResponse<T, K = undefined> = {
  data: T;
  meta: K;
  error:
    | {
        status: number;
        name: string;
        message: string;
      }
    | undefined;
};

export type StrapiResponseWithPagination<T> = StrapiResponse<
  T[],
  { pagination: StrapiPagination }
>;
