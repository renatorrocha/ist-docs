import { DocsLayout } from "fumadocs-ui/layouts/docs";
import type { ReactNode } from "react";
import { baseOptions } from "../../layout.config";
import { source } from "../../../lib/source";

export default async function Layout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const lang = (await params).lang;
  
  return (
    <DocsLayout tree={source.pageTree[lang]} i18n {...baseOptions}>
      {children}
    </DocsLayout>
  );
}
