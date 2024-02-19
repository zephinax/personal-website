import { useGoldBrand } from "../../hooks";
import { Brand } from "./Brand";

export const SelectGoldBrand = () => {
  const brand = useGoldBrand();

  return (
    <nav>
      <ul className="flex gap-1">
        <Brand brandName="SJC" brandKey="sjc" isActive={brand === "sjc"} />
        <Brand brandName="PNJ" brandKey="pnj" isActive={brand === "pnj"} />
      </ul>
    </nav>
  );
};
