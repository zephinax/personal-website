/* eslint-disable jsx-a11y/media-has-caption */

export const AppleWonderlustCover = () => {
  return (
    <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-black">
      <video
        autoPlay
        loop
        muted
        preload="auto"
        playsInline
        src="/images/apple-wonderlust.mp4"
        className="h-[64%]"
        poster="/images/apple-wonderlust.jpeg"
        title="Apple Event: Wonderlust"
      />
    </div>
  );
};
