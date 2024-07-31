// import Image from "next/image";

// import ImgCover from "@/../public/images/ncdai-cover-lossy.webp";

// import { USER } from "../../constants";

export const NCDaiCover = () => {
  return (
    <div className="aspect-h-1 aspect-w-2 relative flex w-full select-none overflow-hidden rounded-xl bg-slate-900 shadow-lg">
      {/* <Image
        alt={`${USER.fullName}'s cover image`}
        src={ImgCover}
        placeholder="blur"
        quality={100}
        fill
        priority
        sizes="(min-width: 768px) 672px, calc(100vw - 16px)"
        className="object-cover"
      /> */}
    </div>
  );
};
