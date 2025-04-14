import { AppSidebar } from '@/components/app-sidebar';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import React from 'react';

export default function SidebarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = React.useState(false);

  return (
    <SidebarProvider
      className="flex h-screen"
      open={open}
      onOpenChange={setOpen}
    >
      <AppSidebar />

      <main className="flex-1">
        <div className="fixed top-3 left-3 z-1">
          {!open && <SidebarTrigger className="" />}
        </div>

        {children}
      </main>
    </SidebarProvider>
  );
}
