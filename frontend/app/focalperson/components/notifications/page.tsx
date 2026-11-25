"use client";
import { useState } from "react";
export default function Notifications() {
  const [list] = useState([
    { t: "New Donor Registered", d: "Sara Khan ne register kiya", time: "5 min ago" },
    { t: "New Needy Application", d: "Fatima Bibi ne Medicines ke liye apply kiya", time: "1 hour ago" },
    { t: "Pending Verification", d: "2 applications verification ka wait kar rahi hain", time: "2 hours ago" },
    { t: "Donation Matched", d: "Ali Ahmed matched with Usman Ghani - 98%", time: "3 hours ago" },
    { t: "Delivery Completed", d: "Food Package Zainab Akhtar ko deliver ho gaya", time: "Yesterday" },
  ]);
  return (
    <div className="bg-white rounded-2xl border shadow-sm divide-y">{list.map((n, i) => (
      <div key={i} className="p-5 flex gap-4 items-center hover:bg-gray-50"><div className="w-11 h-11 bg-yellow-100 rounded-full grid place-items-center text-lg">🔔</div><div className="flex-1"><h4 className="font-bold text-sm">{n.t}</h4><p className="text-sm text-gray-500">{n.d}</p></div><span className="text-xs text-gray-400">{n.time}</span></div>))}
    </div>
  );
}