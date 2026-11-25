export default function Reports() {
  const cats = [["Clothes", 45], ["Medicines", 30], ["Food", 15], ["Money", 10]];
  return (
    <div>
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-4">{[{ t: "Total Donations", v: "1,450" }, { t: "Monthly", v: "182" }, { t: "Approved", v: "980" }, { t: "Rejected", v: "45" }, { t: "Delivered", v: "1,102" }].map(c => (<div key={c.t} className="bg-white p-5 rounded-2xl border shadow-sm"><p className="text-sm text-gray-500">{c.t}</p><h2 className="text-2xl font-bold mt-1 text-[#176B45]">{c.v}</h2></div>))}</div>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-white p-6 rounded-2xl border shadow-sm"><h3 className="font-bold">Donation Categories</h3><div className="mt-5 space-y-4 text-sm">{cats.map(([n, p]: any) => (<div key={n}><div className="flex justify-between mb-1"><span>{n}</span><span className="font-bold">{p}%</span></div><div className="h-3 bg-gray-100 rounded-full"><div className="h-full bg-gradient-to-r from-[#176B45] to-[#22C07A] rounded-full" style={{ width: p + "%" }}></div></div></div>))}</div></div>
        <div className="bg-white p-6 rounded-2xl border shadow-sm"><h3 className="font-bold">Monthly Activity</h3><div className="flex items-end gap-2 h-44 mt-6">{[40, 65, 50, 80, 95, 70, 110, 130, 90, 120, 145, 182].map((h, i) => (<div key={i} className="flex-1 bg-emerald-200 hover:bg-[#176B45] rounded-t-lg transition" style={{ height: h / 2 }}></div>))}</div></div>
      </div>
    </div>
  );
}