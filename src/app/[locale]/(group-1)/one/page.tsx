import CatchAllPage from "@/components/pages/CatchAll";

// The following causes complete RSC (all layouts)
export function generateStaticParams() {
	return [{ locale: 'en-us' }]
}

export default async function OneRoute({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return <CatchAllPage catchAll={['one']} locale={locale} />
}
