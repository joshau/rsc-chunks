import CatchAllPage from "@/components/pages/CatchAll";

// export const dynamic = 'force-dynamic'

export default async function ThreeRoute({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return <CatchAllPage catchAll={['three']} locale={locale} />
}
