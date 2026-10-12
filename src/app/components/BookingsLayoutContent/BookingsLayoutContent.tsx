
"use client";

import { useSearchParams } from "next/navigation";
import CustomSidebar from "../CustomSidebar";

const allNavigationItems = [
  { label: "Dashboard", href: "/", icon: "🏠" },
  { label: "Bookings", href: "/bookings", icon: "📦" },
  { label: "Fleet", href: "/fleet", icon: "🚚" },
  { label: "Reports", href: "/reports", icon: "📊" },
];

const standaloneNavigationItems = [
  { label: "Bookings", href: "/bookings", icon: "📦" },
];

interface BookingsLayoutContentProps {
  readonly children: React.ReactNode;
}
export default function BookingsLayoutContent({
  children,
}: BookingsLayoutContentProps) {
  const searchParams = useSearchParams();
  const openedThroughHost = searchParams.get("source") === "host";

  const navigationItems = openedThroughHost
    ? allNavigationItems
    : standaloneNavigationItems;

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <CustomSidebar
        navigationItems={navigationItems}
        activeHref="/bookings"
      />

      <main style={{ flex: 1, minWidth: 0 }}>
        {children}
      </main>
    </div>
  );
}