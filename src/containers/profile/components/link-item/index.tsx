import clsx from "clsx";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

import { IconVSBulkDocumentCopy } from "@/components/icons/vuesax/bulk";
import { useCopyToClipboard } from "@/hooks";

import { ButtonAction } from "./ButtonAction";
import { LinkItemProps } from "./types";

export const LinkItem = ({
  icon,
  name,
  description = "",

  href = "",
  canCopy = false,
}: LinkItemProps) => {
  const router = useRouter();

  const [, copy] = useCopyToClipboard();

  const handleCopyClick = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();

    if (!canCopy) {
      return;
    }

    const valueToCopy = href || description;

    if (!valueToCopy) {
      return;
    }

    copy(valueToCopy).then((success) => {
      if (success) {
        toast.success("Copied");
      } else {
        toast.error("Failed to copy");
      }
    });
  };

  const handleOpenClick = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();

    if (!href) {
      return;
    }

    // Open in new tab
    if (href.startsWith("http")) {
      window.open(href, "_blank", "noopener noreferrer");
      return;
    }

    // Open in same tab
    router.push(href, { scroll: false });
  };

  const handleItemClick = () => {
    if (href) {
      handleOpenClick();
      return;
    }

    if (canCopy) {
      handleCopyClick();
      return;
    }
  };

  return (
    <div
      role="link"
      tabIndex={0}
      className={clsx(
        "flex cursor-pointer items-center space-x-4 rounded-xl p-4",
        "border border-slate-700 bg-slate-800",
        "transition-all hover:border-blue-500",
        "select-none"
      )}
      onClick={handleItemClick}
      onKeyDown={handleItemClick}
    >
      <Image
        src={icon}
        width={48}
        height={48}
        alt={name}
        className="rounded-xl shadow-md"
      />

      <div className="flex-1">
        <h3 className="font-semibold">{name}</h3>
        {description && <p className="text-slate-400">{description}</p>}
      </div>

      {canCopy && (
        <ButtonAction title="Copy" onClick={handleCopyClick}>
          <IconVSBulkDocumentCopy size={24} />
        </ButtonAction>
      )}
    </div>
  );
};
