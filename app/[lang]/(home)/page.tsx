"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

export default function HomePage() {
  const { lang } = useParams();
  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      <h1 className="mb-4 text-2xl font-bold">FindesLab</h1>
      <p className="text-fd-muted-foreground">
        Navegue até a página de{" "}
        <Link
          href={`/${lang}/docs`}
          className="text-fd-foreground font-semibold underline"
        >
          /docs
        </Link>{" "}
        e veja a documentação.
      </p>
    </main>
  );
}
