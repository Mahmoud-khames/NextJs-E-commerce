"use client";

import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { AdminDashboard } from "@/data/data";
import Link from "next/link";


export function AppSidebar({ t, locale }: { t: any; locale: any }) {
    const pathname = usePathname();
  
    return (
      <Sidebar className="sticky top-10 left-0 z-40 h-auto flex flex-col overflow-y-hidden overflow-x-hidden w-64 bg-white ">
        <SidebarContent className="p-4">
          <SidebarGroup>
            <SidebarGroupLabel className="text-gray-600 font-medium">
              {t.admin.AdminDashboard}
            </SidebarGroupLabel>
            <SidebarGroupContent className="mt-4">
              <SidebarMenu>
                {AdminDashboard.map((item) => (
                  <SidebarMenuItem key={item.id}>
                    <SidebarMenuButton asChild className="rounded-lg">
                      <Link
                        href={`/${locale}/${item.url}`}
                        className={`flex items-center gap-3 p-3 ${
                          pathname === `/${locale}/${item.url}`
                            ? "bg-secondary text-white "
                            : "text-gray-700"
                        }`}
                      >
                        {item.icon}
                        <span className="text-sm">{item.name}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    );
  }