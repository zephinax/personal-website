import { Spin } from "./Spin";

export const PageLoading = () => {
  return (
    <div className="animate-modalOverlayShow fixed inset-0 z-modal flex items-center justify-center bg-black/50">
      <Spin size="md" />
    </div>
  );
};
