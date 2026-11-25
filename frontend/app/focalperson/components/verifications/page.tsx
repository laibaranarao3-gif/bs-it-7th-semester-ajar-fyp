"use client";
import { useState } from "react";
export default function Verification() {
  const list = [
    { id: 1, person: "Fatima Bibi", name: "Insulin Injections" },
    { id: 2, person: "Usman Ghani", name: "Warm Clothes for Kids" },
    { id: 3, person: "Zainab Akhtar", name: "Monthly Rashan" },
  ];
  const [msg, setMsg] = useState("");
  return (
    <div className="bg-white rounded-2xl border p-6 shadow-sm">
      <h3 className="font-bold text-lg">✅ Verification Center</h3>
      {msg && <p className="bg-emerald-50 text-emerald-700 p-3 rounded-xl mt-3 text-sm font-bold">{msg}</p>}
      <div className="grid md:grid-cols-2 gap-4 mt-4">{list.map(n => (
        <div key={n.id} className="border-2 border-dashed border-emerald-200 bg-emerald-50/50 p-5 rounded-2xl"><p className="font-bold">{n.person} - {n.name}</p><p className="text-sm text-gray-600 mt-1">CNIC ✓ • Proof ✓ • Photo ✓</p><div className="flex gap-2 mt-4"><button onClick={() => setMsg(n.person + " Verified ✓")} className="flex-1 bg-[#176B45] text-white py-2.5 rounded-xl font-bold text-sm">Verify ✓</button><button onClick={() => setMsg(n.person + " Rejected")} className="flex-1 bg-white border py-2.5 rounded-xl font-bold text-sm text-red-600">Reject</button></div></div>))}
      </div>
    </div>
  );
}