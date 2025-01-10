import { Spin } from "./Spin";

export const PageLoading = () => {
  return (
    <div className="animate-modalOverlayShow z-modal fixed inset-0 flex items-center justify-center bg-black/50">
      <Spin size="md" />
    </div>
  );
};
