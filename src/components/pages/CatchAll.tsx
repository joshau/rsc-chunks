"use client";

import { useLanguage } from "@/components/hooks/useLanguage";

export default function CatchAllPage({ catchAll, locale }: { catchAll: string[], locale: string }) {
  const language = useLanguage()

  return <h1>{language['catch-all']} - {locale} - {catchAll.join('-')}</h1>;
}
