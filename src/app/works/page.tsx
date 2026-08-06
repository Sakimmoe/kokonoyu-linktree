import type { Metadata } from "next";
import { SubPage } from "@/src/components/SubPage";
import { SubPageContent } from "@/src/components/SubPageContent";
import { worksPage } from "@/src/data/pages";

export const metadata: Metadata = {
  title: "実績 / 工作展示 | 九重紫 Kokonoyu",
};

export default function WorksPage() {
  return (
    <SubPage title={worksPage.title}>
      <SubPageContent data={worksPage} />
    </SubPage>
  );
}
