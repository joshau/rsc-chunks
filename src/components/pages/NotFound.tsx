"use client";

import { useLanguage } from "@/components/hooks/useLanguage";
import { useLocale } from "../hooks/useLocale";

export default function NotFoundPage() {
  const language = useLanguage()
  const locale = useLocale()

  return <h1>{language['not-found']} - {locale}</h1>;
}
