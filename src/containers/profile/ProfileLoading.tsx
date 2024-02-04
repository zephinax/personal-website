export const ProfileLoading = () => {
  return (
    <div className="mx-auto animate-pulse space-y-4 px-4 md:max-w-2xl md:px-0">
      <header className="-mx-2 mt-2 md:mx-0">
        <div className="aspect-h-1 aspect-w-2 flex w-full rounded-xl bg-slate-800"></div>

        <div className="relative z-20 mx-auto -mt-10 h-40 w-40 rounded-full border-4 border-slate-900 bg-slate-800 md:-mt-20"></div>
      </header>

      <main className="space-y-4">
        <div className="px-4 pb-4">
          <div className="mb-2 flex justify-center">
            <span className="flex h-8 w-56 max-w-full rounded-full bg-slate-800" />
          </div>

          <div className="flex justify-center">
            <span className="flex h-6 w-80 max-w-full rounded-full bg-slate-800" />
          </div>
        </div>
      </main>
    </div>
  );
};
