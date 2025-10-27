import { TESTIMONIALS } from "../../data/testimonials";
import { Panel, PanelHeader, PanelTitle } from "../panel";
import { TestimonialItem } from "./testimonial-item";

export function Testimonials() {
  return (
    <Panel>
      <PanelHeader>
        <PanelTitle>Testimonials</PanelTitle>
      </PanelHeader>

      <div className="relative py-4">
        <div className="pointer-events-none absolute inset-0 -z-1 grid grid-cols-1 gap-4 max-sm:hidden sm:grid-cols-2">
          <div className="border-r border-edge"></div>
          <div className="border-l border-edge"></div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {TESTIMONIALS.map((item) => (
            <TestimonialItem key={item.handle} {...item} />
          ))}
        </div>
      </div>
    </Panel>
  );
}
