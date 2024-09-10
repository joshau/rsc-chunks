import CatchAllPage from "@/components/pages/CatchAll";

// The following (dynamic, generateStaticParams) causes:
// - a complete RSC (all layouts)
// - a round trip back through the server
// - a second round trip through the server?
export const dynamic = 'force-static'

// https://nextjs.org/docs/app/api-reference/functions/generate-static-params
// > You must return an empty array from generateStaticParams or utilize export const dynamic = 'force-static' in order to revalidate (ISR) paths at runtime.

// export function generateStaticParams() {
// 	return []
// }

export default async function TwoRoute({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return <CatchAllPage catchAll={['two']} locale={locale} />
}
