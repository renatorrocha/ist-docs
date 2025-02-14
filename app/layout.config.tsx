import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import logo from "public/logo.jpeg";
import Image from "next/image";

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <Image src={logo} alt="Logo" className="size-8 rounded-4xl" />
        FindesLab
      </>
    ),
  },
  links: [
    {
      text: "Documentação",
      url: "/docs",
      active: "nested-url",
    },
    {
      text: "Organização",
      url: "https://github.com/isteo-dev",
      active: "url",
      external: true,
    },
  ],
  i18n: true,
};
