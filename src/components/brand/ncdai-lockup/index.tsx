type IProps = {
  className?: string;
  height?: number;
};

export const NCDAiLockup = ({ className, height = 32 }: IProps) => {
  return (
    <svg
      className={className}
      height={height}
      viewBox="0 0 1024 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M144 0L232.627 31.5654C263.791 41.9092 263.791 86.0912 232.627 96.4351L144 128V106.675L226.322 77.3557C239.155 73.0965 239.155 54.9039 226.322 50.6447L157.036 25.4984L112 128L23.3735 96.4351C-7.79118 86.0912 -7.79113 41.9092 23.3735 31.5654L112 0V21.3247L29.6778 50.6447C16.8453 54.9039 16.8453 73.0965 29.6778 77.3557L98.9645 102.502L144 0Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M480 -0.00012207V97.6569C480 126.539 443.189 138.74 425.939 115.575L358.02 24.3704C352.27 16.6487 340 20.7156 340 30.343V128H320V30.343C320 1.4607 356.811 -10.7398 374.061 12.425L441.98 103.63C447.73 111.351 460 107.284 460 97.6569V-0.00012207H480Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M550 20C533.431 20 520 33.4315 520 50V78C520 94.5685 533.431 108 550 108H640V128H550C522.386 128 500 105.614 500 78V50C500 22.3858 522.386 0 550 0H640V20H550Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M750 20C766.569 20 780 33.4315 780 50V78C780 94.5685 766.569 108 750 108H680V20H750ZM800 50C800 22.3858 777.614 0 750 0H660V128H750C777.614 128 800 105.614 800 78V50Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1004 128V0H1024V128H1004Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M852 0H930C957.614 0 980 22.3857 980 50V128H860C837.909 128 820 110.091 820 87.9999C820 65.9086 837.909 48 860 48H959.934C958.905 32.3639 945.896 20 930 20H852V0ZM960 68H860C848.954 68 840 76.9543 840 88C840 99.0457 848.954 108 860 108H960V68Z"
        fill="currentColor"
      />
    </svg>
  );
};
