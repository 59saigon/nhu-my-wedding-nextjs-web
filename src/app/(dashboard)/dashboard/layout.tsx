"use client";
import AdminPanelLayout from "@/components/dashboard/common/admin-panel-layout";
import { ContentLayout } from "@/components/dashboard/common/content-layout";
import KBar from "@/components/dashboard/common/kbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/toaster";


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <KBar>
      <SidebarProvider>
        <AdminPanelLayout>
          <ContentLayout>{children}</ContentLayout>
        </AdminPanelLayout>
      </SidebarProvider>
      <Toaster />
    </KBar>
  );
}
