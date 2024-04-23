import React from "react";

import { IIconProps } from "../../types";

export const IconVSBulkExport: React.FC<IIconProps> = ({
  size = 24,
  className,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        opacity="0.4"
        d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z"
        fill="currentColor"
      />
      <path
        d="M16.748 7H11.918C11.508 7 11.168 7.34 11.168 7.75C11.168 8.16 11.508 8.5 11.918 8.5H14.938L7.21805 16.22C6.92805 16.51 6.92805 16.99 7.21805 17.28C7.36805 17.43 7.55805 17.5 7.74805 17.5C7.93805 17.5 8.12805 17.43 8.27805 17.28L15.998 9.56V12.58C15.998 12.99 16.338 13.33 16.748 13.33C17.158 13.33 17.498 12.99 17.498 12.58V7.75C17.498 7.34 17.158 7 16.748 7Z"
        fill="currentColor"
      />
    </svg>
  );
};
