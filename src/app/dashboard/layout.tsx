import { Sidebar } from "@/components/ui/Sidebar";
import { Topbar } from "@/components/ui/Topbar";
import { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="uk-width-1-1">
      <Topbar />
      <Sidebar />
      <div className="uk-flex uk-flex-right">{children}</div>
    </main>
  );
};

export default DashboardLayout;
