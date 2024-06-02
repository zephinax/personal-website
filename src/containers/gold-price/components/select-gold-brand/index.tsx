import { useGoldBrand } from "../../hooks";
import { Brand } from "./Brand";

export const SelectGoldBrand = () => {
  const brand = useGoldBrand();

  return (
    <header className="sticky top-0 border-b border-slate-200 bg-white/80 py-4 backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/80">
      <div className="container">
        <nav>
          <ul className="flex">
            <Brand brandName="SJC" brandKey="sjc" isActive={brand === "sjc"} />
            <Brand brandName="PNJ" brandKey="pnj" isActive={brand === "pnj"} />
          </ul>
        </nav>
      </div>
    </header>
  );
};
