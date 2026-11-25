export default function Dashboard({ onOpen }: { onOpen: (n: string) => void }) {
  const stats = [
    { t: "Total Donors", v: "1,284", color: "from-emerald-500 to-emerald-600", icon: "❤️" },
    { t: "Needy Persons", v: "890", color: "from-orange-400 to-orange-500", icon: "👥" },
    { t: "Pending Applications", v: "42", color: "from-amber-400 to-amber-500", icon: "⏳" },
    { t: "Completed Donations", v: "1,102", color: "from-teal-500 to-green-600", icon: "✅" },
  ];
  const quick = [
    { n: "Donors", icon: "❤️" }, { n: "Needy Persons", icon: "👥" },
    { n: "Applications", icon: "📄" }, { n: "Donations", icon: "🎁" },
    { n: "Verification", icon: "✅" }, { n: "Matching", icon: "🔄" },
    { n: "Tracking", icon: "📍" }, { n: "Notifications", icon: "🔔" },
    { n: "Reports", icon: "📊" }, { n: "Settings", icon: "⚙️" },
  ];
  return (
    <div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {stats.map(c => (
          <div key={c.t} className="bg-white p-5 rounded-2xl border shadow-sm">
            <div className={`w-12 h-12 bg-gradient-to-br ${c.color} text-white rounded-xl grid place-items-center text-xl`}>{c.icon}</div>
            <p className="text-sm text-gray-500 mt-4">{c.t}</p><h2 className="text-3xl font-bold">{c.v}</h2>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-2xl border p-6">
        <h3 className="font-bold text-lg mb-4">Quick Access - Click Karein</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {quick.map(m => (
            <button key={m.n} onClick={() => onOpen(m.n)} className="bg-[#F0F7F2] border p-4 rounded-2xl text-left hover:bg-[#E8F3EC]">
              <span className="text-2xl">{m.icon}</span><p className="font-bold mt-2">{m.n}</p><p className="text-xs text-gray-500">Click to Open →</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}