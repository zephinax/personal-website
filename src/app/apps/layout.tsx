import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: `%s | NCDai Apps`,
    default: "NCDai Apps",
  },
};

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return <>{children}</>;
}
