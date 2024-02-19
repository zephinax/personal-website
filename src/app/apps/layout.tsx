import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: `%s | NCDAi Apps`,
    default: "NCDAi Apps",
  },
};

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return <>{children}</>;
}
