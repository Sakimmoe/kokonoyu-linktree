import type { Metadata } from "next";
import { SubPage } from "@/src/components/SubPage";
import { SubPageContent } from "@/src/components/SubPageContent";
import { commissionPage } from "@/src/data/pages";

export const metadata: Metadata = {
  title: "Live2D 建模委托 | 九重紫 Kokonoyu",
};

export default function CommissionPage() {
  return (
    <SubPage title={commissionPage.title}>
      <SubPageContent data={commissionPage} />
    </SubPage>
  );
}
