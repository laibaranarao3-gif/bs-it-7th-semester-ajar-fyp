"use client";
import { useState } from "react";
export default function Applications() {
  const [list] = useState([
    { id: 1, name: "Winter Jackets", person: "Ali Ahmed", type: "Clothes", qty: "20 pcs", city: "Lahore" },
    { id: 2, name: "Insulin Injections", person: "Fatima Bibi", type: "Medicines", qty: "10 injections", city: "Gujranwala" },
    { id: 3, name: "School Fees", person: "Ahmed Raza", type: "Money", qty: "Rs. 10,000", city: "Lahore" },
  ]);
  const [msg, setMsg] = useState("");
  return (
    <div className="bg-white rounded-2xl border p-6 shadow-sm">
      <h3 className="font-bold text-lg">📄 All Applications</h3>
      {msg && <p className="bg-emerald-50 text-emerald-700 p-3 rounded-xl mt-3 text-sm font-bold">{msg}</p>}
      <div className="space-y-3 mt-4">{list.map(a => (
        <div key={a.id} className="flex flex-wrap gap-3 items-center justify-between bg-gray-50 p-4 rounded-2xl border">
          <div><p className="font-bold">{a.name} - {a.person}</p><p className="text-xs text-gray-500">{a.type} • {a.qty} • {a.city}</p></div>
          <div className="flex gap-2"><button onClick={() => setMsg(a.person + " Approved ✓")} className="bg-emerald-600 text-white px-4 py-2 rounded-xl text-sm font-bold">Approve</button><button onClick={() => setMsg(a.person + " Rejected")} className="bg-red-100 text-red-600 px-4 py-2 rounded-xl text-sm font-bold">Reject</button></div>
        </div>))}
      </div>
    </div>
  );
}