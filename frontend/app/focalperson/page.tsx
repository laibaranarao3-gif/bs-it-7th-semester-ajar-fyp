
"use client";
import { useState } from "react";
import Dashboard from "./components/dashboard/page";
import Donors from "./components/donors/page";
import NeedyPersons from "./components/needyperson/page";
import Applications from "./components/applications/page";
import Donations from "./components/donations/page";
import Verification from "./components/verifications/page";
import Matching from "./components/matching/page";
import Tracking from "./components/tracking/page";
import Notifications from "./components/notifications/page";
import Reports from "./components/reports/page";
import Settings from "./components/settings/page";

export default function FocalPerson() {
  const [active, setActive] = useState("Dashboard");

  const menu = [
    { n: "Dashboard", icon: "🏠" }, { n: "Donors", icon: "❤️" },
    { n: "Needy Persons", icon: "👥" }, { n: "Applications", icon: "📄" },
    { n: "Donations", icon: "🎁" }, { n: "Verification", icon: "✅" },
    { n: "Matching", icon: "🔄" }, { n: "Tracking", icon: "📍" },
    { n: "Notifications", icon: "🔔" }, { n: "Reports", icon: "📊" },
    { n: "Settings", icon: "⚙️" },
  ];

  return (
    <div className="flex min-h-screen bg-[#F0F7F2] font-sans text-[#1A2E22]">
      <aside className="w-[260px] bg-[#0F281A] text-white fixed h-screen flex flex-col z-20">
        <div className="p-5 flex gap-3 items-center border-b border-white/10">
          <div className="w-12 h-12 bg-gradient-to-br from-[#22C07A] to-[#176B45] rounded-2xl grid place-items-center font-bold text-2xl">A</div>
          <div><h1 className="font-bold text-xl tracking-widest">AJAR</h1><p className="text-[11px] text-emerald-300">Spread Kindness</p></div>
        </div>
        <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
          {menu.map(m => (
            <button key={m.n} onClick={() => setActive(m.n)} className={`w-full text-left px-3 py-3 rounded-xl text-[14px] flex gap-3 items-center cursor-pointer ${active === m.n ? "bg-[#176B45] text-white font-bold border-l-4 border-[#22C07A]" : "text-white/70 hover:bg-white/10"}`}>
              <span className="w-8 h-8 rounded-lg grid place-items-center bg-white/10">{m.icon}</span>{m.n}
            </button>
          ))}
        </nav>
      </aside>

      <main className="flex-1 ml-[260px] p-6">
        <div className="bg-white p-4 rounded-2xl border shadow-sm mb-6"><h1 className="text-2xl font-bold">{active}</h1></div>
        {active === "Dashboard" && <Dashboard onOpen={setActive} />}
        {active === "Donors" && <Donors />}
        {active === "Needy Persons" && <NeedyPersons />}
        {active === "Applications" && <Applications />}
        {active === "Donations" && <Donations />}
        {active === "Verification" && <Verification />}
        {active === "Matching" && <Matching />}
        {active === "Tracking" && <Tracking />}
        {active === "Notifications" && <Notifications />}
        {active === "Reports" && <Reports />}
        {active === "Settings" && <Settings />}
      </main>
    </div>
  );
}