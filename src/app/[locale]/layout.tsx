import { PropsWithChildren } from "react";
import { ConfigurationProvider } from "@/components/providers/ConfigurationProvider";

export default async function TopLevelRootLayout({
  children,
  params: { locale },
}: Readonly<PropsWithChildren<{ params: { locale: string } }>>) {
  const languagePromise = import(`@/languages/${locale}.json`).then(
    (m) => m.default
  );

  console.log("Root Layout", { locale });

  return (
    <html lang="en">
      <body>
        <ConfigurationProvider config={{ languagePromise, locale }}>
          {children}
        </ConfigurationProvider>
      </body>
    </html>
  );
}
