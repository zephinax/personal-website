export const metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <div className="flex h-[calc(100svh-5.5rem)] flex-col items-center justify-center gap-2">
      <h1 className="text-6xl font-semibold">404</h1>
      <p className="font-mono">Page Not Found</p>
    </div>
  );
}
