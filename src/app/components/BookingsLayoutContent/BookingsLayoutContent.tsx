
"use client";

import { useSearchParams } from "next/navigation";
import CustomSidebar from "../CustomSidebar";

const allNavigationItems = [
  { label: "Dashboard", href: "/?source=host", icon: "🏠" },
  { label: "Bookings", href: "/bookings?source=host", icon: "📦" },
  { label: "Fleet", href: "/fleet?source=host", icon: "🚚" },
  { label: "Reports", href: "/reports?source=host", icon: "📊" },
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