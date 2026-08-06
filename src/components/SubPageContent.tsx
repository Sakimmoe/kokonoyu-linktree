import { SectionCard } from "@/src/components/SectionCard";
import type { SubPageData } from "@/src/data/pages";

export function SubPageContent({ data }: { data: SubPageData }) {
  return (
    <div className="space-y-3.5">
      {data.sections.map((section, i) => (
        <SectionCard key={i} section={section} />
      ))}
    </div>
  );
}
