export default function Tracking() {
  const steps = ["Application Submitted", "Application Verified", "Application Approved", "Donation Matched", "Delivery In Progress", "Successfully Delivered"];
  return (
    <div className="bg-white rounded-2xl border p-7 shadow-sm">
      <h3 className="font-bold text-lg">📍 Delivery Tracking - AJ-101</h3><p className="text-sm text-gray-500">Ali Ahmed → Usman Ghani • Winter Jackets</p>
      <div className="mt-7 ml-2 border-l-4 border-emerald-200 pl-7 space-y-7">{steps.map((s, i) => (<div key={s} className="relative"><div className={`absolute -left-[38px] top-0 w-6 h-6 rounded-full border-4 ${i <= 3 ? "bg-[#176B45] border-emerald-200" : "bg-gray-200 border-white"}`}></div><h4 className={`font-bold ${i <= 3 ? "" : "text-gray-400"}`}>{s}</h4><p className="text-xs text-gray-500">12 Nov 2026 - 10:30 AM</p></div>))}</div>
      <div className="mt-7 bg-emerald-50 p-4 rounded-xl"><b>Progress: 65%</b><div className="h-3 bg-white rounded-full mt-2"><div className="h-full bg-gradient-to-r from-[#176B45] to-[#22C07A] rounded-full w-[65%]"></div></div></div>
    </div>
  );
}