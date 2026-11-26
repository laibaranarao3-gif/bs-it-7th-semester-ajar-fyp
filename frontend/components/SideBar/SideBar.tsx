"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SideBar({ role, active }: any) {
  const router = useRouter();

  const menus: any = {
    admin: [
      { name: "Dashboard", link: "/admin" },
      { name: "AllDonations", link: "/admin/alldonations" },
      { name: "Need Help", link: "/admin/need-help" },
      { name: "Users", link: "/admin/users" },
    ],
    focal: [
      { name: "Dashboard", link: "/focalperson" },
      { name: "Requests", link: "/focalperson/requests" },
    ],
    donor: [{ name: "Donate", link: "/donate" }],
    needy: [{ name: "Need Help", link: "/need-help" }],
  };

  const menu = menus[role] || menus.admin;

  return (
    <div className="w-64 min-h-screen p-5 flex flex-col bg-[#0F3D2E]">
      <h1 className="text-2xl font-bold text-white mb-8">Admin Panel</h1>

      <div className="flex flex-col gap-2 flex-1">
        {menu.map((item: any) => (
          <Link
            key={item.link}
            href={item.link}
            className={`px-4 py-3 rounded-lg text-sm font-medium ${
              active === item.link
                ? "bg-[#2E7D4F] text-white"
                : "text-white/70 hover:text-white"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>

      <button
        onClick={() => {
          localStorage.clear();
          router.push("/login");
        }}
        className="w-full py-3 rounded-lg font-semibold text-sm bg-[#FFF8E7] text-[#0F3D2E]"
      >
        Logout
      </button>
    </div>
  );
}