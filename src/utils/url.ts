export const urlToName = (url: string) => {
  return url.replace(/(^\w+:|^)\/\//, "");
};
