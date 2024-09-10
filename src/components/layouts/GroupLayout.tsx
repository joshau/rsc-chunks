import Link from "next/link";
import { PropsWithChildren } from "react";

function NavbarItem({
  locale,
  nav: { name, url },
}: {
  locale: string;
  nav: { name: string; url: string };
}) {
  return (
    <li>
      <a href={`/${locale}${url}`}>{name}</a>
    </li>
  );
}

async function NoJavascriptNavbar({ locale }: { locale: string }) {
  const navs = await import("@/data/navigation.json").then(
    (m) => m.default
  );

  return (
    <noscript id="noscript-nav">
      <ul>
        {navs.map((nav) => {
          return <NavbarItem key={nav.id} nav={nav} locale={locale} />;
        }) || null}
      </ul>
    </noscript>
  );
}

export default async function GroupLayout({
  locale,
  children,
}: PropsWithChildren<{ locale: string }>) {
  const navs = await import("@/data/navigation.json").then(
    (m) => m.default
  );

  return (
    <>
      <NoJavascriptNavbar locale={locale} />

      <header>
        <ul>
          {navs.map(({ id, name, url }) => (
            <li key={id}>
              <Link href={`/${locale}${url}`} prefetch={false}>{name}</Link>
            </li>
          ))}
        </ul>
      </header>

      <main id="main">{children}</main>
    </>
  );
}
