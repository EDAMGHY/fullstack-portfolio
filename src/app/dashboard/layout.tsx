import { ReactNode } from "react";
import { DashboardHeader } from "@/components/dashboard";

const DashboardLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <DashboardHeader />
      <main className="p-4 md:p-8">{children}</main>
    </div>
  );
};

export default DashboardLayout;
