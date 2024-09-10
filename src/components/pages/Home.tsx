"use client";

import { useLanguage } from "@/components/hooks/useLanguage";

export default function HomePage({ locale }: { locale: string }) {
  const language = useLanguage()

  return <h1>{language['home']} - {locale}</h1>;
}
