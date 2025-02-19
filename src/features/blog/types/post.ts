export type IPostMetadata = {
  title: string;
  description: string;
  image?: string;
  createdAt: string;
  updatedAt: string;
};

export type IPost = {
  metadata: IPostMetadata;
  slug: string;
  content: string;
};
