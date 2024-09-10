import HomePage from "@/components/pages/Home";

export default async function HomeRoute({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return <HomePage locale={locale} />;
}