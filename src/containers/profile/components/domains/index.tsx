import React from "react";

const DOMAINS = [
  "DacSac.com",
  "DuongSach.com",
  "KietTac.com",
  "KimCuongGroup.com",
  "MayTinhViet.com",
  "MetaBox.vn",
  "NangLuongGio.com",
  "San24h.com",
  "SieuUngDung.com",
  "TienDiDong.com",
  "TienPhongGroup.com",
  "Use.com.vn",
  "VieBase.com",
  "VieBus.com",
  "VieCons.com",
  "VieSafe.com",
  "VuaDiDong.com",
  "VuaNhaDat.com",
  "VuongQuoc.net",
  "VuongQuocHoa.com",
];

export const Domains: React.FC = () => {
  return (
    <section>
      <div className="rounded-xl border border-slate-700 bg-slate-800 p-4">
        <div className="mb-2 font-semibold">
          <span>Domain names to be transferred</span>
        </div>

        <ul className="grid gap-2 sm:grid-cols-2">
          {DOMAINS.map((domain) => {
            return (
              <li key={domain}>
                <a
                  href={`http://${domain}`}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-all hover:underline"
                >
                  {domain}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
