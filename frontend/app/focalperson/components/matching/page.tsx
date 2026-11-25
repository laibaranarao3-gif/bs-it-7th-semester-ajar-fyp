"use client";
import { useState } from "react";
export default function Matching() {
  const [msg, setMsg] = useState("");
  return (
    <div className="bg-white rounded-2xl border p-6 md:p-8 shadow-sm">
      <h3 className="font-bold text-xl text-center">🔄 Smart Donation Matching</h3>
      {msg && <p className="bg-emerald-50 text-emerald-700 p-3 rounded-xl mt-4 text-center text-sm font-bold">{msg}</p>}
      <div className="grid md:grid-cols-[1fr_120px_1fr] items-center gap-5 mt-7">
        <div className="border-2 border-dashed border-emerald-300 bg-emerald-50 p-5 rounded-2xl"><p className="text-xs font-bold text-emerald-700">DONOR</p><h4 className="font-bold mt-2">Ali Ahmed</h4><p className="text-sm">Winter Jackets - 20 pcs - Lahore</p></div>
        <div className="text-center"><div className="w-16 h-16 bg-[#176B45] text-white rounded-full grid place-items-center mx-auto text-xl">⇄</div><p className="font-bold text-[#176B45] mt-2">98% Match</p></div>
        <div className="border-2 border-dashed border-orange-300 bg-orange-50 p-5 rounded-2xl"><p className="text-xs font-bold text-orange-700">NEEDY PERSON</p><h4 className="font-bold mt-2">Usman Ghani</h4><p className="text-sm">Warm Clothes - Lahore</p></div>
      </div>
      <button onClick={() => setMsg("Match Confirmed! Dono ko SMS gaya ✓")} className="mx-auto block mt-7 bg-gradient-to-r from-[#176B45] to-[#22C07A] text-white px-10 py-3.5 rounded-xl font-bold">✓ Confirm Match</button>
    </div>
  );
}