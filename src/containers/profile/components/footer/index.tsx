import Image from "next/image";

import ImgDMCAPro from "@/../public/images/dmca-badge-v2.png";

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center gap-3 pb-8 pt-4">
      <p className="text-sm text-slate-400">
        © {new Date().getFullYear()} Quaric Co., Ltd.
      </p>

      <div className="flex select-none items-center space-x-2">
        <a
          href="https://www.dmca.com/Protection/Status.aspx?ID=85a452ca-06aa-4352-bfeb-7cb563dbd2b9&refurl=https://chanhdai.com/"
          title="DMCA.com Protection Status"
          aria-label="DMCA.com Protection Status"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="h-6 w-auto"
            alt="DMCA.com Protection Status"
            src={ImgDMCAPro}
            quality={100}
          />
        </a>
      </div>
    </footer>
  );
};
