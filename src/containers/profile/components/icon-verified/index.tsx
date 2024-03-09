import { IconProps } from "@/components/icons/types";

export const IconVerified = ({ size = "1em", className }: IconProps) => {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <linearGradient
        gradientUnits="userSpaceOnUse"
        id="verified-linear-gradient"
        x1="5.355"
        x2="16.361"
        y1="3.395"
        y2="19.133"
      >
        <stop offset="0" stopColor="#60a5fa"></stop>
        <stop offset=".406" stopColor="#3b82f6"></stop>
        <stop offset=".989" stopColor="#2563eb"></stop>
      </linearGradient>
      <path
        d="M21.56 10.74L20.2 9.16C19.94 8.86 19.73 8.3 19.73 7.9V6.2C19.73 5.14 18.86 4.27 17.8 4.27H16.1C15.71 4.27 15.14 4.06 14.84 3.8L13.26 2.44C12.57 1.85 11.44 1.85 10.74 2.44L9.17 3.81C8.87 4.06 8.3 4.27 7.91 4.27H6.18C5.12 4.27 4.25 5.14 4.25 6.2V7.91C4.25 8.3 4.04 8.86 3.79 9.16L2.44 10.75C1.86 11.44 1.86 12.56 2.44 13.25L3.79 14.84C4.04 15.14 4.25 15.7 4.25 16.09V17.8C4.25 18.86 5.12 19.73 6.18 19.73H7.91C8.3 19.73 8.87 19.94 9.17 20.2L10.75 21.56C11.44 22.15 12.57 22.15 13.27 21.56L14.85 20.2C15.15 19.94 15.71 19.73 16.11 19.73H17.81C18.87 19.73 19.74 18.86 19.74 17.8V16.1C19.74 15.71 19.95 15.14 20.21 14.84L21.57 13.26C22.15 12.57 22.15 11.43 21.56 10.74Z"
        fill="url(#verified-linear-gradient)"
      />
      <path
        d="M11.33 14.94L16.16 10.11C16.45 9.82002 16.45 9.34002 16.16 9.05002C15.87 8.76002 15.39 8.76002 15.1 9.05002L10.8 13.35L8.91 11.46C8.62 11.17 8.14 11.17 7.85 11.46C7.56 11.75 7.56 12.23 7.85 12.52L10.27 14.94C10.41 15.08 10.6 15.16 10.8 15.16C11 15.16 11.19 15.08 11.33 14.94Z"
        fill="white"
      />
    </svg>
  );
};
