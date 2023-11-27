// import { GetStaticProps, InferGetStaticPropsType } from "next";

import { ProfileContainer } from "@/containers/profile";

// export const getStaticProps = (async () => {
//   const res = await fetch("https://vuatenmien.net/api/domains");
//   const data = await res.json();
//   return { props: { domains: data } };
// }) satisfies GetStaticProps<{
//   domains: string[];
// }>;

// export default function Home({
//   domains,
// }: InferGetStaticPropsType<typeof getStaticProps>) {
//   return <ProfileContainer domains={domains} />;
// }

export default function Home() {
  return <ProfileContainer />;
}
