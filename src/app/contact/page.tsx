import type { Metadata } from "next";
import { SubPage } from "@/src/components/SubPage";
import { SubPageContent } from "@/src/components/SubPageContent";
import { contactPage } from "@/src/data/pages";

export const metadata: Metadata = {
  title: "Contact | 九重紫 Kokonoyu",
};

export default function ContactPage() {
  return (
    <SubPage title={contactPage.title}>
      <SubPageContent data={contactPage} />
    </SubPage>
  );
}
