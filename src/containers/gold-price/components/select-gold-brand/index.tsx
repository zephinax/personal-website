import { useGoldBrand } from "../../hooks";
import { Brand } from "./Brand";

export const SelectGoldBrand = () => {
  const brand = useGoldBrand();

  return (
    <nav className="sticky top-0 bg-slate-900/80 py-4 backdrop-blur-md">
      <ul className="container flex gap-1">
        <Brand brandName="SJC" brandKey="sjc" isActive={brand === "sjc"} />
        <Brand brandName="PNJ" brandKey="pnj" isActive={brand === "pnj"} />
      </ul>
    </nav>
  );
};
