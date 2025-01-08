"use client";

import { MdBorderOuter, MdDashboard, MdOutlineCreate } from "react-icons/md";
import AdminSidebarItem from "./AdminSidebarItem";
import { usePathname } from "next/navigation";

const AdminSidebar = () => {
  const pathname = usePathname();
  const adminPanel = [
    {
      name: "Dashboard",
      icon: MdDashboard,
      url: "/admin",
    },
    {
      name: "Add Product",
      icon: MdOutlineCreate,
      url: "/admin/create",
    },
    {
      name: "Manage Product",
      icon: MdOutlineCreate,
      url: "/admin/manage",
    },
    {
      name: "Orders",
      icon: MdBorderOuter,
      url: "/admin/order",
    },
  ];

  return (
    <div className="w-1/5 border-r h-screen p-4 bg-orange-600">
      <div className="space-y-4">
        {adminPanel.map((admin, i) => (
          <AdminSidebarItem
            key={i}
            selected={pathname == admin.url}
            icon={admin.icon}
            name={admin.name}
            url={admin.url}
          />
        ))}
      </div>
    </div>
  );
};

export default AdminSidebar;
