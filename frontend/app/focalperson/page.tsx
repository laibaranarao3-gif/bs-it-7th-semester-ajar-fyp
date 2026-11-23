
"use client";
import { useState } from "react";

type Item = { id: number; name: string; type: string; qty: string; person: string; city: string; status: string };

export default function FocalPerson() {
  const [active, setActive] = useState("Dashboard");

  const [donorList, setDonorList] = useState<Item[]>([
    { id: 1, name: "Winter Jackets", type: "Clothes", qty: "20 pcs", person: "Ali Ahmed", city: "Lahore", status: "Available" },
    { id: 2, name: "Panadol Extra", type: "Medicines", qty: "50 boxes", person: "Sara Khan", city: "Gujranwala", status: "Available" },
    { id: 3, name: "Food Packages", type: "Food", qty: "10 boxes", person: "Hamza Tariq", city: "Gujranwala", status: "Available" },
    { id: 4, name: "Cash Donation", type: "Money", qty: "Rs. 25,000", person: "Ayesha Noor", city: "Lahore", status: "Available" },
    { id: 5, name: "School Bags", type: "Other Items", qty: "15 pcs", person: "Bilal Ahmed", city: "Lahore", status: "Available" },
  ]);

  const [needyList, setNeedyList] = useState<Item[]>([
    { id: 1, name: "Insulin Injections", type: "Medicines", qty: "10 injections", person: "Fatima Bibi", city: "Gujranwala", status: "Pending" },
    { id: 2, name: "Warm Clothes for Kids", type: "Clothes", qty: "12 pcs", person: "Usman Ghani", city: "Lahore", status: "Under Review" },
    { id: 3, name: "Monthly Rashan", type: "Food", qty: "1 Month", person: "Zainab Akhtar", city: "Gujranwala", status: "Approved" },
    { id: 4, name: "School Fees", type: "Money", qty: "Rs. 10,000", person: "Ahmed Raza", city: "Lahore", status: "Pending" },
    { id: 5, name: "Blankets", type: "Clothes", qty: "8 pcs", person: "Naseem Bibi", city: "Gujranwala", status: "Pending" },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [toast, setToast] = useState("");
  const [form, setForm] = useState({ name: "", type: "Clothes", qty: "", person: "", city: "Lahore" });

  const menu = [
    { n: "Dashboard", icon: "🏠", color: "bg-emerald-100" },
    { n: "Donors", icon: "❤️", color: "bg-rose-100" },
    { n: "Needy Persons", icon: "👥", color: "bg-orange-100" },
    { n: "Applications", icon: "📄", color: "bg-blue-100" },
    { n: "Donations", icon: "🎁", color: "bg-violet-100" },
    { n: "Verification", icon: "✅", color: "bg-green-100" },
    { n: "Matching", icon: "🔄", color: "bg-teal-100" },
    { n: "Tracking", icon: "📍", color: "bg-amber-100" },
    { n: "Notifications", icon: "🔔", color: "bg-yellow-100" },
    { n: "Reports", icon: "📊", color: "bg-indigo-100" },
    { n: "Settings", icon: "⚙️", color: "bg-gray-200" },
  ];

  const showToast = (m: string) => { setToast(m); setTimeout(() => setToast(""), 2500); };

  const handleAdd = () => {
    if (!form.name || !form.qty || !form.person) return alert("Please fill all fields");
    const newItem: Item = { id: Date.now(), name: form.name, type: form.type, qty: form.qty, person: form.person, city: form.city, status: active === "Donors" ? "Available" : "Pending" };
    if (active === "Donors") setDonorList([...donorList, newItem]);
    else setNeedyList([...needyList, newItem]);
    setForm({ name: "", type: "Clothes", qty: "", person: "", city: "Lahore" });
    setShowForm(false);
    showToast("Added Successfully ✓");
  };

  const list = active === "Donors" ? donorList : needyList;

  return (
    <div className="flex min-h-screen bg-[#F0F7F2] font-sans text-[#1A2E22]">
      {/* SIDEBAR - GREEN THEME */}
      <aside className="w-[260px] bg-[#0F281A] text-white fixed h-screen flex flex-col z-20 shadow-2xl">
        <div className="p-5 flex gap-3 items-center border-b border-white/10 bg-[#0C2317]">
          <div className="w-12 h-12 bg-gradient-to-br from-[#22C07A] to-[#176B45] rounded-2xl grid place-items-center font-bold text-2xl shadow-lg">A</div>
          <div><h1 className="font-bold text-xl tracking-widest">AJAR</h1><p className="text-[11px] text-emerald-300">Spread Kindness • Charity</p></div>
        </div>
        <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
          {menu.map(m => (
            <button key={m.n} onClick={() => setActive(m.n)} className={`w-full text-left px-3 py-3 rounded-xl text-[14px] flex gap-3 items-center transition-all cursor-pointer ${active === m.n ? "bg-[#176B45] text-white font-bold shadow-lg border-l-4 border-[#22C07A]" : "text-white/70 hover:bg-white/10 hover:text-white"}`}>
              <span className={`w-8 h-8 rounded-lg grid place-items-center text-base ${active === m.n ? "bg-white/20" : "bg-white/10"}`}>{m.icon}</span>
              {m.n}
              {m.n === "Notifications" && <span className="ml-auto bg-red-500 text-white text-[10px] w-5 h-5 rounded-full grid place-items-center font-bold">5</span>}
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-white/10">
          <div className="flex gap-3 items-center bg-white/10 p-3 rounded-2xl">
            <img src="https://i.pravatar.cc/100?img=32" className="w-10 h-10 rounded-full border-2 border-emerald-400" alt="" />
            <div className="flex-1"><p className="text-sm font-bold">Focal Person</p><p className="text-xs text-emerald-300">Gujranwala Branch</p></div>
          </div>
        </div>
      </aside>

      <main className="flex-1 ml-[260px] p-6">
        {/* TOPBAR */}
        <div className="flex flex-wrap gap-3 justify-between items-center bg-white p-4 rounded-2xl border shadow-sm mb-6">
          <div><h1 className="text-2xl font-bold text-[#0F281A]">{active === "Dashboard" ? "Welcome Back, Focal Person! 👋" : active}</h1><p className="text-sm text-gray-500">Manage donations, verify applications and make a difference.</p></div>
          {(active === "Donors" || active === "Needy Persons") && <button onClick={() => setShowForm(true)} className="bg-gradient-to-r from-[#176B45] to-[#22C07A] text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:scale-105 transition">+ Add List</button>}
        </div>

        {/* DASHBOARD */}
        {active === "Dashboard" && <>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {[
              { t: "Total Donors", v: "1,284", bg: "from-emerald-500 to-emerald-600", icon: "❤️", trend: "+12%" },
              { t: "Needy Persons", v: "890", bg: "from-orange-400 to-orange-500", icon: "👥", trend: "+8%" },
              { t: "Pending Applications", v: "42", bg: "from-amber-400 to-amber-500", icon: "⏳", trend: "Action Needed" },
              { t: "Completed Donations", v: "1,102", bg: "from-teal-500 to-green-600", icon: "✅", trend: "+24%" },
            ].map(c => (
              <div key={c.t} className="bg-white p-5 rounded-2xl border shadow-sm hover:shadow-lg transition cursor-pointer" onClick={() => showToast(c.t + " clicked")}>
                <div className={`w-12 h-12 bg-gradient-to-br ${c.bg} text-white rounded-xl grid place-items-center text-xl shadow-md`}>{c.icon}</div>
                <p className="text-sm text-gray-500 mt-4">{c.t}</p><h2 className="text-3xl font-bold">{c.v}</h2>
                <span className="text-xs bg-emerald-50 text-emerald-700 px-2 py-1 rounded-full font-bold">↗ {c.trend}</span>
                <div className="h-2 bg-gray-100 rounded-full mt-3"><div className="h-full bg-[#176B45] rounded-full w-[75%]"></div></div>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-2xl border shadow-sm p-6">
            <h3 className="font-bold text-lg mb-2">Quick Access - Sab Clickable Hai</h3>
            <p className="text-sm text-gray-500 mb-4">Neeche kisi bhi card pe click karein, wo page khul jayega.</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {menu.slice(1).map(m => (
                <button key={m.n} onClick={() => setActive(m.n)} className="bg-[#F0F7F2] hover:bg-[#E8F3EC] border border-emerald-100 p-4 rounded-2xl text-left transition hover:scale-[1.02]">
                  <span className="text-2xl">{m.icon}</span><p className="font-bold mt-2">{m.n}</p><p className="text-xs text-gray-500">Click to Open →</p>
                </button>
              ))}
            </div>
          </div>
        </>}

        {/* DONORS & NEEDY - TABLE WITH ARRAY */}
        {(active === "Donors" || active === "Needy Persons") && (
          <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
            <div className="p-4 bg-gradient-to-r from-[#176B45] to-[#22C07A] text-white flex justify-between"><h3 className="font-bold">{active} List - Total {list.length} Items</h3><span className="bg-white/20 px-3 py-1 rounded-full text-xs">Live Data</span></div>
            <div className="overflow-x-auto"><table className="w-full text-sm min-w-[700px]"><thead className="bg-[#E8F3EC]"><tr><th className="p-4 text-left">#</th><th className="p-4 text-left">Material</th><th className="p-4 text-left">Type</th><th className="p-4 text-left">Quantity</th><th className="p-4 text-left">Person</th><th className="p-4 text-left">City</th><th className="p-4 text-left">Status</th><th className="p-4 text-left">Action</th></tr></thead><tbody>
              {list.map((item, i) => (<tr key={item.id} className="border-t hover:bg-emerald-50/50"><td className="p-4 font-bold text-[#176B45]">{i + 1}</td><td className="p-4 font-medium">{item.name}</td><td className="p-4"><span className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full text-xs font-bold">{item.type}</span></td><td className="p-4 font-bold">{item.qty}</td><td className="p-4">{item.person}</td><td className="p-4">{item.city}</td><td className="p-4"><span className={`px-2 py-1 rounded-full text-xs font-bold ${item.status === "Available" || item.status === "Approved" ? "bg-green-100 text-green-700" : item.status === "Pending" ? "bg-amber-100 text-amber-700" : "bg-blue-100 text-blue-700"}`}>{item.status}</span></td><td className="p-4"><button onClick={() => { if (active === "Donors") setDonorList(donorList.filter(x => x.id !== item.id)); else setNeedyList(needyList.filter(x => x.id !== item.id)); showToast("Deleted"); }} className="bg-red-50 text-red-600 px-3 py-1.5 rounded-lg text-xs font-bold">Delete</button></td></tr>))}
            </tbody></table></div>
          </div>
        )}

        {/* APPLICATIONS */}
        {active === "Applications" && (
          <div className="bg-white rounded-2xl border p-6 shadow-sm"><h3 className="font-bold text-lg">📄 All Applications</h3><p className="text-sm text-gray-500 mt-1 mb-4">Donor + Needy dono ki applications yahan hain.</p>
            <div className="space-y-3">{[...donorList, ...needyList].map((a, i) => (<div key={i} className="flex flex-wrap gap-3 items-center justify-between bg-gray-50 p-4 rounded-2xl border"><div><p className="font-bold">{a.name} - {a.person}</p><p className="text-xs text-gray-500">{a.type} • {a.qty} • {a.city}</p></div><div className="flex gap-2"><button onClick={() => showToast(a.person + " Approved ✓")} className="bg-emerald-600 text-white px-4 py-2 rounded-xl text-sm font-bold">Approve</button><button onClick={() => showToast(a.person + " Under Review")} className="bg-blue-100 text-blue-700 px-4 py-2 rounded-xl text-sm font-bold">Review</button><button onClick={() => showToast(a.person + " Rejected")} className="bg-red-100 text-red-600 px-4 py-2 rounded-xl text-sm font-bold">Reject</button></div></div>))}</div>
          </div>
        )}

        {/* DONATIONS */}
        {active === "Donations" && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">{donorList.map(d => (<div key={d.id} className="bg-white rounded-2xl border overflow-hidden shadow-sm hover:shadow-lg transition"><div className="h-28 bg-gradient-to-br from-emerald-400 to-teal-600 grid place-items-center text-5xl">🎁</div><div className="p-4"><h4 className="font-bold">{d.name}</h4><p className="text-xs text-gray-500">{d.person} • {d.qty} • {d.city}</p><span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full font-bold mt-2 inline-block">{d.type} • {d.status}</span></div></div>))}</div>
        )}

        {/* VERIFICATION */}
        {active === "Verification" && (
          <div className="bg-white rounded-2xl border p-6 shadow-sm"><h3 className="font-bold text-lg">✅ Verification Center</h3><p className="text-sm text-gray-500 mb-4">Documents check kar ke Approve / Reject karein.</p>
            <div className="grid md:grid-cols-2 gap-4">{needyList.map(n => (<div key={n.id} className="border-2 border-dashed border-emerald-200 bg-emerald-50/50 p-5 rounded-2xl"><p className="font-bold">{n.person} - {n.name}</p><p className="text-sm text-gray-600 mt-1">Documents: CNIC ✓ • Proof ✓ • Photo ✓</p><div className="flex gap-2 mt-4"><button onClick={() => showToast("Verified ✓")} className="flex-1 bg-[#176B45] text-white py-2.5 rounded-xl font-bold text-sm">Verify ✓</button><button onClick={() => showToast("Rejected with Reason")} className="flex-1 bg-white border py-2.5 rounded-xl font-bold text-sm text-red-600">Reject</button></div></div>))}</div>
          </div>
        )}

        {/* MATCHING */}
        {active === "Matching" && (
          <div className="bg-white rounded-2xl border p-6 md:p-8 shadow-sm"><h3 className="font-bold text-xl text-center">🔄 Smart Donation Matching</h3>
            <div className="grid md:grid-cols-[1fr_120px_1fr] items-center gap-5 mt-7">
              <div className="border-2 border-dashed border-emerald-300 bg-emerald-50 p-5 rounded-2xl"><p className="text-xs font-bold text-emerald-700">DONOR</p><h4 className="font-bold mt-2">Ali Ahmed</h4><p className="text-sm">Winter Jackets - Clothes - 20 pcs - Lahore</p></div>
              <div className="text-center"><div className="w-16 h-16 bg-gradient-to-br from-[#176B45] to-[#22C07A] text-white rounded-full grid place-items-center mx-auto text-xl shadow-lg">⇄</div><p className="font-bold text-[#176B45] mt-2">98% Match</p></div>
              <div className="border-2 border-dashed border-orange-300 bg-orange-50 p-5 rounded-2xl"><p className="text-xs font-bold text-orange-700">NEEDY PERSON</p><h4 className="font-bold mt-2">Usman Ghani</h4><p className="text-sm">Warm Clothes for Kids - Clothes - Lahore</p></div>
            </div>
            <button onClick={() => showToast("Match Confirmed! Dono ko SMS gaya ✓")} className="mx-auto block mt-7 bg-gradient-to-r from-[#176B45] to-[#22C07A] text-white px-10 py-3.5 rounded-xl font-bold shadow-lg">✓ Confirm Match</button>
          </div>
        )}

        {/* TRACKING */}
        {active === "Tracking" && (
          <div className="bg-white rounded-2xl border p-7 shadow-sm"><h3 className="font-bold text-lg">📍 Delivery Tracking - AJ-101</h3><p className="text-sm text-gray-500">Ali Ahmed → Usman Ghani • Winter Jackets</p>
            <div className="mt-7 ml-2 border-l-4 border-emerald-200 pl-7 space-y-7">{["Application Submitted", "Application Verified", "Application Approved", "Donation Matched", "Delivery In Progress", "Successfully Delivered"].map((s, i) => (<div key={s} className="relative"><div className={`absolute -left-[38px] top-0 w-6 h-6 rounded-full border-4 ${i <= 3 ? "bg-[#176B45] border-emerald-200" : "bg-gray-200 border-white"}`}></div><h4 className={`font-bold ${i <= 3 ? "" : "text-gray-400"}`}>{s}</h4><p className="text-xs text-gray-500">12 Nov 2026 - 10:30 AM</p></div>))}</div>
            <div className="mt-7 bg-emerald-50 p-4 rounded-xl"><b>Progress: 65%</b><div className="h-3 bg-white rounded-full mt-2"><div className="h-full bg-gradient-to-r from-[#176B45] to-[#22C07A] rounded-full w-[65%]"></div></div></div>
          </div>
        )}

        {/* NOTIFICATIONS */}
        {active === "Notifications" && (
          <div className="bg-white rounded-2xl border shadow-sm divide-y">{[
            { t: "New Donor Registered", d: "Sara Khan ne register kiya", time: "5 min ago", c: "bg-rose-100" },
            { t: "New Needy Application", d: "Fatima Bibi ne Medicines ke liye apply kiya", time: "1 hour ago", c: "bg-orange-100" },
            { t: "Pending Verification", d: "2 applications verification ka wait kar rahi hain", time: "2 hours ago", c: "bg-amber-100" },
            { t: "Donation Matched", d: "Ali Ahmed matched with Usman Ghani - 98%", time: "3 hours ago", c: "bg-emerald-100" },
            { t: "Delivery Completed", d: "Food Package Zainab Akhtar ko deliver ho gaya", time: "Yesterday", c: "bg-teal-100" },
          ].map((n, i) => (<div key={i} className="p-5 flex gap-4 items-center hover:bg-gray-50"><div className={`w-11 h-11 ${n.c} rounded-full grid place-items-center text-lg`}>🔔</div><div className="flex-1"><h4 className="font-bold text-sm">{n.t}</h4><p className="text-sm text-gray-500">{n.d}</p></div><span className="text-xs text-gray-400">{n.time}</span><button onClick={() => showToast("Marked as Read")} className="text-xs bg-gray-100 px-3 py-1.5 rounded-full font-bold">Mark Read</button></div>))}</div>
        )}

        {/* REPORTS */}
        {active === "Reports" && (
          <><div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-4">{[{ t: "Total Donations", v: "1,450" }, { t: "Monthly", v: "182" }, { t: "Approved", v: "980" }, { t: "Rejected", v: "45" }, { t: "Delivered", v: "1,102" }].map(c => (<div key={c.t} className="bg-white p-5 rounded-2xl border shadow-sm hover:shadow-md transition"><p className="text-sm text-gray-500">{c.t}</p><h2 className="text-2xl font-bold mt-1 text-[#176B45]">{c.v}</h2></div>))}</div>
            <div className="grid md:grid-cols-2 gap-4"><div className="bg-white p-6 rounded-2xl border shadow-sm"><h3 className="font-bold">Donation Categories</h3><div className="mt-5 space-y-4 text-sm">{[["Clothes", 45], ["Medicines", 30], ["Food", 15], ["Money", 10]].map(([n, p]: any) => (<div key={n}><div className="flex justify-between mb-1"><span>{n}</span><span className="font-bold">{p}%</span></div><div className="h-3 bg-gray-100 rounded-full"><div className="h-full bg-gradient-to-r from-[#176B45] to-[#22C07A] rounded-full" style={{ width: p + "%" }}></div></div></div>))}</div></div>
              <div className="bg-white p-6 rounded-2xl border shadow-sm"><h3 className="font-bold">Monthly Activity</h3><div className="flex items-end gap-2 h-44 mt-6">{[40, 65, 50, 80, 95, 70, 110, 130, 90, 120, 145, 182].map((h, i) => (<div key={i} className="flex-1 bg-emerald-200 hover:bg-[#176B45] rounded-t-lg transition" style={{ height: h / 2 }}></div>))}</div><button onClick={() => showToast("Report Exported as PDF")} className="mt-5 bg-[#0F281A] text-white px-5 py-2.5 rounded-xl text-sm font-bold">Export Report</button></div></div></>
        )}

        {/* SETTINGS */}
        {active === "Settings" && (
          <div className="bg-white rounded-2xl border p-7 shadow-sm max-w-2xl"><h3 className="font-bold text-lg">⚙️ Settings</h3><div className="mt-5 space-y-4 text-sm"><label className="block">Full Name<input defaultValue="Focal Person" className="w-full mt-1 border p-3 rounded-xl outline-none focus:border-[#176B45]" /></label><label className="block">Email<input defaultValue="focal@ajar.org" className="w-full mt-1 border p-3 rounded-xl outline-none focus:border-[#176B45]" /></label><label className="block">Branch<input defaultValue="Gujranwala Branch" className="w-full mt-1 border p-3 rounded-xl outline-none focus:border-[#176B45]" /></label><label className="flex gap-2 items-center bg-emerald-50 p-3 rounded-xl"><input type="checkbox" defaultChecked /> Email Notifications ON</label><label className="flex gap-2 items-center bg-emerald-50 p-3 rounded-xl"><input type="checkbox" defaultChecked /> SMS Notifications ON</label></div><button onClick={() => showToast("Settings Saved ✓")} className="mt-6 bg-gradient-to-r from-[#176B45] to-[#22C07A] text-white px-8 py-3 rounded-xl font-bold shadow-lg">Save Changes</button></div>
        )}
      </main>

      {/* ADD LIST MODAL */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 grid place-items-center z-50 p-4" onClick={() => setShowForm(false)}>
          <div className="bg-white rounded-2xl w-full max-w-md p-6 shadow-2xl" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between"><h3 className="font-bold text-lg">+ Add New List</h3><button onClick={() => setShowForm(false)} className="w-8 h-8 bg-gray-100 rounded-full">×</button></div>
            <div className="mt-5 space-y-3">
              <input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Material Name e.g. Blankets" className="w-full border p-3 rounded-xl outline-none focus:border-[#176B45]" />
              <select value={form.type} onChange={e => setForm({ ...form, type: e.target.value })} className="w-full border p-3 rounded-xl"><option>Clothes</option><option>Medicines</option><option>Food</option><option>Money</option><option>Other Items</option></select>
              <input value={form.qty} onChange={e => setForm({ ...form, qty: e.target.value })} placeholder="Quantity e.g. 10 pcs" className="w-full border p-3 rounded-xl outline-none focus:border-[#176B45]" />
              <input value={form.person} onChange={e => setForm({ ...form, person: e.target.value })} placeholder="Person Name" className="w-full border p-3 rounded-xl outline-none focus:border-[#176B45]" />
              <select value={form.city} onChange={e => setForm({ ...form, city: e.target.value })} className="w-full border p-3 rounded-xl"><option>Lahore</option><option>Gujranwala</option><option>Karachi</option><option>Islamabad</option></select>
            </div>
            <div className="flex gap-2 mt-6"><button onClick={() => setShowForm(false)} className="flex-1 border py-3 rounded-xl">Cancel</button><button onClick={handleAdd} className="flex-1 bg-[#176B45] text-white py-3 rounded-xl font-bold">Add to List ✓</button></div>
          </div>
        </div>
      )}
      {toast && <div className="fixed bottom-5 right-5 bg-[#0F281A] text-white px-5 py-3 rounded-xl shadow-xl z-[60] text-sm">✓ {toast}</div>}
    </div>
  );
}