import Image from "next/image";

import ImgDMCA from "@/../public/images/dmca-badge.png";

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center gap-3 pb-8 pt-4">
      {/* © {new Date().getFullYear()} Nguyễn Chánh Đại (NCDAi) */}
      <p className="text-sm text-slate-400">
        © {new Date().getFullYear()} Quaric Co., Ltd.
      </p>

      <div className="flex select-none items-center space-x-2">
        <a
          href="//www.dmca.com/Protection/Status.aspx?ID=85a452ca-06aa-4352-bfeb-7cb563dbd2b9&refurl=https://chanhdai.com/"
          title="DMCA.com Protection Status"
          aria-label="DMCA.com Protection Status"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="h-7 w-auto rounded"
            alt="DMCA.com Protection Status"
            src={ImgDMCA}
            placeholder="blur"
            quality={100}
          />
        </a>

        <a
          href="https://www.digitalocean.com/?refcode=474b42f30e7d&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge"
          title="DigitalOcean Referral Badge"
          aria-label="DigitalOcean Referral Badge"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="h-7 rounded"
            src="https://web-platforms.sfo2.cdn.digitaloceanspaces.com/WWW/Badge%203.svg"
            alt="DigitalOcean Referral Badge"
          />
        </a>
      </div>
    </footer>
  );
};
