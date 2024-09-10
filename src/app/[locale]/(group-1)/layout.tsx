import GroupLayout from "@/components/layouts/GroupLayout";
import { PropsWithChildren } from "react";

export default async function TopLevelGroupLayout({
  children,
  params: { locale },
}: Readonly<PropsWithChildren<{ params: { locale: string } }>>) {

  console.log("Group 1 Layout", { locale });

  return <GroupLayout locale={locale}>{children}</GroupLayout>;
}
