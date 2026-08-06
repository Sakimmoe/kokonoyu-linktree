import type { Metadata } from "next";
import { SubPage } from "@/src/components/SubPage";
import { SubPageContent } from "@/src/components/SubPageContent";
import { designPage } from "@/src/data/pages";

export const metadata: Metadata = {
  title: "Character design | 九重紫 Kokonoyu",
};

export default function DesignPage() {
  return (
    <SubPage title={designPage.title}>
      <SubPageContent data={designPage} />
    </SubPage>
  );
}
