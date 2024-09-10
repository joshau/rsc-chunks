import CatchAllPage from "@/components/pages/CatchAll";

export default async function FourRoute({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return <CatchAllPage catchAll={['four']} locale={locale} />
}
