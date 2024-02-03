/* eslint-disable jsx-a11y/media-has-caption */

export const AppleCrazyFastCover = () => {
  return (
    <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-black">
      <a
        href="https://www.apple.com/vn/apple-events/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Learn More"
        className="absolute inset-0 z-10"
      >
        &nbsp;
      </a>

      <video
        autoPlay
        loop
        muted
        preload="auto"
        playsInline
        src="/images/apple-crazy-fast.mp4"
        className="h-[64%]"
        poster="/images/apple-crazy-fast.jpeg"
        title="Apple Event: Crazy Fast"
      />
    </div>
  );
};
