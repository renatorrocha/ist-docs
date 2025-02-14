import type { ReactNode } from "react";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import { baseOptions } from "../../layout.config";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <HomeLayout i18n {...baseOptions}>
      {children}
    </HomeLayout>
  );
}
