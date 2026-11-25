"use client";
import { useState } from "react";
export default function Settings() {
  const [msg, setMsg] = useState("");
  return (
    <div className="bg-white rounded-2xl border p-7 shadow-sm max-w-2xl">
      <h3 className="font-bold text-lg">⚙️ Settings</h3>
      {msg && <p className="bg-emerald-50 text-emerald-700 p-3 rounded-xl mt-3 text-sm font-bold">{msg}</p>}
      <div className="mt-5 space-y-4 text-sm"><label className="block">Full Name<input defaultValue="Focal Person" className="w-full mt-1 border p-3 rounded-xl" /></label><label className="block">Email<input defaultValue="focal@ajar.org" className="w-full mt-1 border p-3 rounded-xl" /></label><label className="block">Branch<input defaultValue="Gujranwala Branch" className="w-full mt-1 border p-3 rounded-xl" /></label><label className="flex gap-2 items-center bg-emerald-50 p-3 rounded-xl"><input type="checkbox" defaultChecked /> Email Notifications ON</label></div>
      <button onClick={() => setMsg("Settings Saved ✓")} className="mt-6 bg-gradient-to-r from-[#176B45] to-[#22C07A] text-white px-8 py-3 rounded-xl font-bold">Save Changes</button>
    </div>
  );
}