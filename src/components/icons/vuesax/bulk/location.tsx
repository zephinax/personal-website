import React from "react";

import { IconProps } from "../../types";

export const IconVSBulkLocation: React.FC<IconProps> = ({
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
        d="M20.62 8.45C19.57 3.83 15.54 1.75 12 1.75C12 1.75 12 1.75 11.99 1.75C8.45997 1.75 4.41997 3.82 3.36997 8.44C2.19997 13.6 5.35997 17.97 8.21997 20.72C9.27997 21.74 10.64 22.25 12 22.25C13.36 22.25 14.72 21.74 15.77 20.72C18.63 17.97 21.79 13.61 20.62 8.45Z"
        fill="currentColor"
      />
      <path
        d="M12 13.46C13.7397 13.46 15.15 12.0497 15.15 10.31C15.15 8.57031 13.7397 7.16 12 7.16C10.2603 7.16 8.84998 8.57031 8.84998 10.31C8.84998 12.0497 10.2603 13.46 12 13.46Z"
        fill="currentColor"
      />
    </svg>
  );
};
