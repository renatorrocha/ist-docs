import { docs } from "@/.source";
import { loader } from "fumadocs-core/source";
import { i18n } from "./i18n";

export const source = loader({
  baseUrl: "/docs",
  source: docs.toFumadocsSource(),
  i18n: i18n,
});
