
"use client";
import { useState } from "react";

// ---------- DATA ----------
const donors = [
  { id: "D-101", name: "Ali Ahmed", phone: "0300-1234567", email: "ali@gmail.com", city: "Lahore", address: "Johar Town, Lahore", cat: "Clothes", desc: "Winter jackets for 20 families", date: "18 Nov 2026", status: "Verified", img: "https://i.pravatar.cc/150?img=1" },
  { id: "D-102", name: "Sara Khan", phone: "0311-2345678", email: "sara@gmail.com", city: "Gujranwala", address: "Model Town, Gujranwala", cat: "Medicines", desc: "Diabetes medicines - 50 boxes", date: "17 Nov 2026", status: "Pending", img: "https://i.pravatar.cc/150?img=5" },
  { id: "D-103", name: "Hamza Tariq", phone: "0321-9876543", email: "hamza@gmail.com", city: "Gujranwala", address: "Satellite Town", cat: "Food", desc: "10 Food Packages", date: "16 Nov 2026", status: "Verified", img: "https://i.pravatar.cc/150?img=13" },
  { id: "D-104", name: "Ayesha Noor", phone: "0332-5556667", email: "ayesha@gmail.com", city: "Lahore", address: "DHA Phase 5", cat: "Money", desc: "Rs. 25,000 Cash Donation", date: "15 Nov 2026", status: "Verified", img: "https://i.pravatar.cc/150?img=47" },
];
const needy = [
  { id: "N-201", name: "Fatima Bibi", phone: "0333-1112223", city: "Gujranwala", address: "Aimanabad Road", cat: "Medicines", need: "Insulin injections", reason: "Husband is daily wager, cannot afford medicine", family: "5 Members", date: "18 Nov 2026", status: "Pending", img: "https://i.pravatar.cc/150?img=26" },
  { id: "N-202", name: "Usman Ghani", phone: "0344-3334445", city: "Lahore", address: "Shahdara, Lahore", cat: "Clothes", need: "Warm clothes for kids", reason: "Flood affected family", family: "6 Members", date: "17 Nov 2026", status: "Under Review", img: "https://i.pravatar.cc/150?img=12" },
  { id: "N-203", name: "Zainab Akhtar", phone: "0301-7778889", city: "Gujranwala", address: "Wazirabad Road", cat: "Food", need: "Monthly Rashan", reason: "Widow, no source of income", family: "4 Members", date: "16 Nov 2026", status: "Approved", img: "https://i.pravatar.cc/150?img=32" },
];
const donations = [
  { id: 1, donor: "Ali Ahmed", item: "Winter Jackets", qty: "20 pcs", cat: "Clothes", loc: "Lahore", status: "Available", date: "18 Nov", img: "https://images.unsplash.com/photo-1548126032-079a0fb0099d?w=500" },
  { id: 2, donor: "Sara Khan", item: "Panadol Extra", qty: "50 boxes", cat: "Medicines", loc: "Gujranwala", status: "Matched", date: "17 Nov", img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500" },
  { id: 3, donor: "Hamza Tariq", item: "Food Packages", qty: "10 boxes", cat: "Food", loc: "Gujranwala", status: "Available", date: "16 Nov", img: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=500" },
  { id: 4, donor: "Ayesha Noor", item: "Cash Donation", qty: "Rs. 25,000", cat: "Money", loc: "Lahore", status: "Delivered", date: "15 Nov", img: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=500" },
];
const notifications = [
  { t: "New Donor Registered", d: "Sara Khan registered as a donor", time: "5 min ago", type: "donor" },
  { t: "New Needy Application", d: "Fatima Bibi applied for Medicines", time: "1 hour ago", type: "needy" },
  { t: "Pending Verification", d: "2 applications waiting for verification", time: "2 hours ago", type: "verify" },
  { t: "Donation Matched", d: "Ali Ahmed matched with Usman Ghani - 98%", time: "3 hours ago", type: "match" },
  { t: "Delivery Completed", d: "Food Package delivered to Zainab Akhtar", time: "Yesterday", type: "delivery" },
];

export default function FocalPerson() {
  const [active, setActive] = useState("Dashboard");
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<any>(null);
  const [confirm, setConfirm] = useState<any>(null);
  const [showProfile, setShowProfile] = useState(false);
  const [toast, setToast] = useState("");

  const menu = [
    { n: "Dashboard", i: "▦" }, { n: "Donor Management", i: "♥" }, { n: "Needy Person Management", i: "◉" },
    { n: "Applications", i: "▤" }, { n: "Donation Management", i: "▣" }, { n: "Verification", i: "✓" },
    { n: "Donation Matching", i: "⇄" }, { n: "Delivery Tracking", i: "◐" }, { n: "Notifications", i: "🔔" },
    { n: "Reports & Analytics", i: "▃" }, { n: "Settings", i: "⚙" },
  ];

  const showToast = (m: string) => { setToast(m); setTimeout(() => setToast(""), 2500); };
  const statusColor = (s: string) => s === "Approved" || s === "Verified" || s === "Delivered" ? "bg-green-100 text-green-700" : s === "Pending" ? "bg-amber-100 text-amber-700" : s === "Rejected" ? "bg-red-100 text-red-600" : "bg-blue-100 text-blue-700";

  const filteredDonors = donors.filter(d => d.name.toLowerCase().includes(search.toLowerCase()) && (filter === "All" || d.cat === filter));
  const filteredNeedy = needy.filter(n => n.name.toLowerCase().includes(search.toLowerCase()) && (filter === "All" || n.cat === filter));
  const filteredDonations = donations.filter(d => filter === "All" || d.cat === filter);

  return (
    <div className="flex min-h-screen bg-[#F8FAF9] font-sans text-[#202B26]">
      {/* SIDEBAR */}
      <aside className="w-[270px] bg-white border-r fixed h-screen flex flex-col z-20 hidden md:flex">
        <div className="p-5 flex gap-3 items-center border-b">
          <div className="w-11 h-11 bg-[#176B45] text-white rounded-xl grid place-items-center font-bold text-xl">A</div>
          <div><h1 className="font-bold text-lg leading-none tracking-widest">AJAR</h1><p className="text-[11px] text-gray-500 mt-1">Spread Kindness • Charity</p></div>
        </div>
        <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
          {menu.map(m => (
            <button key={m.n} onClick={() => setActive(m.n)} className={`w-full text-left px-3 py-2.5 rounded-xl text-[13.5px] font-medium flex gap-3 items-center transition ${active === m.n ? "bg-[#E8F3EC] text-[#176B45] font-bold" : "text-gray-600 hover:bg-gray-50"}`}>
              <span className="w-6 text-center">{m.i}</span>{m.n}
              {m.n === "Notifications" && <span className="ml-auto bg-red-500 text-white text-[10px] w-5 h-5 rounded-full grid place-items-center">5</span>}
            </button>
          ))}
        </nav>
        <div className="p-4 border-t">
          <div className="flex gap-3 items-center bg-[#F8FAF9] p-3 rounded-xl">
            <img src="https://i.pravatar.cc/100?img=32" className="w-10 h-10 rounded-full" alt="" />
            <div className="flex-1"><p className="text-sm font-bold leading-none">Focal Person</p><p className="text-xs text-gray-500 mt-1">Gujranwala Branch</p></div>
            <button onClick={() => showToast("Logged out successfully")} className="text-xs bg-white border px-2 py-1.5 rounded-lg">Logout</button>
          </div>
        </div>
      </aside>

      {/* MAIN */}
      <main className="flex-1 md:ml-[270px] p-4 md:p-7">
        {/* TOPBAR */}
        <div className="flex flex-wrap gap-4 justify-between items-center mb-6 bg-white p-4 rounded-2xl border shadow-sm sticky top-3 z-10">
          <div><h1 className="text-xl md:text-2xl font-bold">{active === "Dashboard" ? "Dashboard Overview" : active}</h1><p className="text-sm text-gray-500">Welcome Back, Focal Person! Manage donations, verify applications and make a difference.</p></div>
          <div className="flex gap-3 items-center">
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search..." className="pl-4 pr-4 py-2.5 bg-[#F8FAF9] border rounded-full w-48 md:w-64 text-sm outline-none focus:border-[#176B45]" />
            <button onClick={() => setActive("Notifications")} className="relative w-10 h-10 bg-[#F8FAF9] rounded-full grid place-items-center">🔔<span className="absolute -top-0.5 -right-0.5 bg-red-500 text-white text-[10px] w-5 h-5 rounded-full grid place-items-center">5</span></button>
            <div className="relative"><button onClick={() => setShowProfile(!showProfile)} className="flex gap-2 items-center"><img src="https://i.pravatar.cc/100?img=32" className="w-10 h-10 rounded-full" alt="" /><div className="text-left hidden lg:block"><p className="text-sm font-bold leading-none">Focal Person</p><p className="text-xs text-[#176B45] mt-1">Focal Person</p></div></button>
              {showProfile && <div className="absolute right-0 top-12 bg-white border rounded-xl shadow-xl p-2 w-48 text-sm"><button className="w-full text-left px-3 py-2 hover:bg-gray-50 rounded-lg">My Profile</button><button className="w-full text-left px-3 py-2 hover:bg-gray-50 rounded-lg" onClick={() => setActive("Settings")}>Settings</button><button className="w-full text-left px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg" onClick={() => showToast("Logged out")}>Logout</button></div>}
            </div>
          </div>
        </div>

        {/* DASHBOARD */}
        {active === "Dashboard" && <>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {[{ t: "Total Donors", v: "1,284", up: "+12% this month", icon: "♥" }, { t: "Total Needy Persons", v: "890", up: "+8% this month", icon: "◉" }, { t: "Pending Applications", v: "42", up: "Needs action", icon: "◷" }, { t: "Completed Donations", v: "1,102", up: "+24% this month", icon: "✓" }].map(c => (
              <div key={c.t} className="bg-white p-5 rounded-2xl border shadow-sm"><div className="flex justify-between"><div className="w-11 h-11 bg-[#E8F3EC] rounded-xl grid place-items-center text-xl">{c.icon}</div><span className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded-full h-fit">↗ {c.up}</span></div><p className="text-sm text-gray-500 mt-4">{c.t}</p><h2 className="text-3xl font-bold mt-1">{c.v}</h2></div>
            ))}
          </div>
          <div className="bg-white rounded-2xl border shadow-sm overflow-hidden">
            <div className="p-5 flex justify-between items-center"><h3 className="font-bold text-lg">Recent Applications</h3><button onClick={() => setActive("Applications")} className="text-sm text-[#176B45] font-bold">View All →</button></div>
            <div className="overflow-x-auto"><table className="w-full text-sm min-w-[700px]"><thead className="bg-gray-50 text-xs text-gray-500 uppercase"><tr><th className="p-4 text-left">Applicant Name</th><th className="p-4 text-left">ID</th><th className="p-4 text-left">Type</th><th className="p-4 text-left">Category</th><th className="p-4 text-left">Date</th><th className="p-4 text-left">Status</th><th className="p-4 text-left">Actions</th></tr></thead><tbody>
              {[...donors, ...needy].slice(0, 5).map((a: any, i) => (<tr key={i} className="border-t hover:bg-gray-50"><td className="p-4 font-medium flex gap-3 items-center"><img src={a.img} className="w-9 h-9 rounded-full" alt="" />{a.name}</td><td className="p-4 font-bold text-[#176B45]">{a.id}</td><td className="p-4"><span className="bg-gray-100 px-2 py-1 rounded-full text-xs">{a.email ? "Donor" : "Needy Person"}</span></td><td className="p-4">{a.cat}</td><td className="p-4 text-gray-500">{a.date}</td><td className="p-4"><span className={`px-2.5 py-1 rounded-full text-xs font-bold ${statusColor(a.status)}`}>{a.status}</span></td><td className="p-4 flex gap-1"><button onClick={() => setSelected(a)} className="bg-[#0F281A] text-white px-3 py-1.5 rounded-lg text-xs">View</button><button onClick={() => setConfirm({ ...a, action: "Approve" })} className="bg-green-100 text-green-700 px-3 py-1.5 rounded-lg text-xs font-bold">Approve</button><button onClick={() => setConfirm({ ...a, action: "Reject" })} className="bg-red-50 text-red-600 px-3 py-1.5 rounded-lg text-xs font-bold">Reject</button></td></tr>))}
            </tbody></table></div>
            <div className="p-4 flex justify-between text-sm text-gray-500 border-t"><span>Showing 1 to 5 of 42 applications</span><span className="flex gap-1"><button className="px-3 py-1 border rounded-lg bg-gray-50">Prev</button><button className="px-3 py-1 bg-[#176B45] text-white rounded-lg">1</button><button className="px-3 py-1 border rounded-lg">2</button><button className="px-3 py-1 border rounded-lg">Next</button></span></div>
          </div>
        </>}

        {/* DONORS */}
        {active === "Donor Management" && <><FilterBar filter={filter} setFilter={setFilter} />
          {filteredDonors.length === 0 ? <Empty /> : <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">{filteredDonors.map(d => (<div key={d.id} className="bg-white rounded-2xl border p-5 shadow-sm"><div className="flex gap-4"><img src={d.img} className="w-14 h-14 rounded-full" alt="" /><div><h4 className="font-bold">{d.name}</h4><p className="text-xs text-gray-500">{d.email} • {d.date}</p><span className={`text-xs px-2 py-0.5 rounded-full mt-1 inline-block ${statusColor(d.status)}`}>{d.status}</span></div></div><div className="mt-4 text-sm space-y-1.5 text-gray-600"><p>📞 {d.phone}</p><p>📍 {d.address}</p><p>🎁 {d.cat} - {d.desc}</p></div><div className="mt-4 flex gap-2"><button onClick={() => setSelected(d)} className="flex-1 bg-[#176B45] text-white py-2.5 rounded-xl text-sm font-bold">View Details</button><button onClick={() => showToast(d.name + " verified")} className="flex-1 border py-2.5 rounded-xl text-sm font-bold">Verify ✓</button></div></div>))}</div>}
        </>}

        {/* NEEDY */}
        {active === "Needy Person Management" && <><FilterBar filter={filter} setFilter={setFilter} />
          <div className="grid md:grid-cols-2 gap-4">{filteredNeedy.map(n => (<div key={n.id} className="bg-white rounded-2xl border p-5 shadow-sm"><div className="flex gap-4"><img src={n.img} className="w-16 h-16 rounded-full" alt="" /><div><h4 className="font-bold">{n.name} • {n.family}</h4><p className="text-sm text-gray-500">{n.city} • {n.cat}</p><p className="text-xs mt-1">Reason: {n.reason}</p></div><span className={`ml-auto h-fit px-2 py-1 rounded-full text-xs font-bold ${statusColor(n.status)}`}>{n.status}</span></div><div className="mt-4 text-sm grid grid-cols-2 gap-2 text-gray-600"><p>📞 {n.phone}</p><p>📍 {n.address}</p><p>🎯 Need: {n.need}</p><p>📅 {n.date}</p></div><button onClick={() => setSelected(n)} className="mt-4 w-full bg-[#0F281A] text-white py-2.5 rounded-xl text-sm font-bold">View Complete Profile + Documents</button></div>))}</div>
        </>}

        {/* APPLICATIONS + VERIFICATION */}
        {(active === "Applications" || active === "Verification") && (
          <div className="bg-white rounded-2xl border shadow-sm overflow-hidden"><div className="p-5"><h3 className="font-bold">{active} - Review Documents & Approve / Reject</h3><p className="text-sm text-gray-500 mt-1">Click View to check CNIC, documents and full details.</p></div>
            <div className="overflow-x-auto"><table className="w-full text-sm min-w-[600px]"><thead className="bg-gray-50"><tr><th className="p-4 text-left">Applicant</th><th className="p-4 text-left">Category</th><th className="p-4 text-left">Documents</th><th className="p-4 text-left">Status</th><th className="p-4 text-left">Action</th></tr></thead><tbody>{[...donors, ...needy].map((a: any) => (<tr key={a.id} className="border-t"><td className="p-4 flex gap-3 items-center"><img src={a.img} className="w-9 h-9 rounded-full" alt="" />{a.name}<span className="text-xs text-gray-400">{a.id}</span></td><td className="p-4">{a.cat}</td><td className="p-4"><span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full">CNIC ✓ • Proof ✓</span></td><td className="p-4"><span className={`px-2 py-1 rounded-full text-xs font-bold ${statusColor(a.status)}`}>{a.status}</span></td><td className="p-4 flex gap-1"><button onClick={() => setSelected(a)} className="bg-black text-white px-3 py-1.5 rounded-lg text-xs">View</button><button onClick={() => setConfirm({ ...a, action: "Approve" })} className="bg-green-100 text-green-700 px-3 py-1.5 rounded-lg text-xs font-bold">Approve</button><button onClick={() => setConfirm({ ...a, action: "Reject" })} className="bg-red-50 text-red-600 px-3 py-1.5 rounded-lg text-xs font-bold">Reject</button></td></tr>))}</tbody></table></div>
          </div>
        )}

        {/* DONATIONS */}
        {active === "Donation Management" && <><FilterBar filter={filter} setFilter={setFilter} /><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">{filteredDonations.map(d => (<div key={d.id} className="bg-white rounded-2xl border overflow-hidden shadow-sm"><img src={d.img} className="h-36 w-full object-cover" alt="" /><div className="p-4"><h4 className="font-bold">{d.item}</h4><p className="text-xs text-gray-500 mt-1">{d.donor} • {d.qty} • {d.loc}</p><div className="flex justify-between mt-3"><span className="text-xs bg-gray-100 px-2 py-1 rounded-full">{d.cat}</span><span className={`text-xs px-2 py-1 rounded-full font-bold ${statusColor(d.status)}`}>{d.status}</span></div><button onClick={() => showToast("Donation details opened")} className="w-full mt-3 border py-2 rounded-xl text-sm font-bold">View Details</button></div></div>))}</div></>}

        {/* MATCHING */}
        {active === "Donation Matching" && (
          <div className="bg-white rounded-2xl border p-6 md:p-8 shadow-sm"><h3 className="font-bold text-xl text-center">Smart Donation Matching</h3><p className="text-center text-sm text-gray-500 mt-1">Matched on Category + Location + Availability</p>
            <div className="grid md:grid-cols-[1fr_120px_1fr] items-center gap-5 mt-7">
              <div className="border-2 border-dashed border-emerald-200 bg-emerald-50/50 p-5 rounded-2xl"><p className="text-xs font-bold text-emerald-700">DONOR</p><div className="flex gap-3 mt-3"><img src={donors[0].img} className="w-12 h-12 rounded-full" alt="" /><div><h4 className="font-bold">{donors[0].name}</h4><p className="text-sm">{donors[0].cat} - {donors[0].desc}</p><p className="text-xs text-gray-500">{donors[0].city} • Qty: 20 pcs</p></div></div></div>
              <div className="text-center"><div className="w-16 h-16 bg-[#176B45] text-white rounded-full grid place-items-center mx-auto text-xl">⇄</div><p className="text-sm font-bold text-[#176B45] mt-2">98% Match</p><p className="text-xs text-gray-500">Category + Location</p></div>
              <div className="border-2 border-dashed border-orange-200 bg-orange-50/50 p-5 rounded-2xl"><p className="text-xs font-bold text-orange-700">NEEDY PERSON</p><div className="flex gap-3 mt-3"><img src={needy[1].img} className="w-12 h-12 rounded-full" alt="" /><div><h4 className="font-bold">{needy[1].name}</h4><p className="text-sm">{needy[1].need} - {needy[1].cat}</p><p className="text-xs text-gray-500">{needy[1].city} • {needy[1].family}</p></div></div></div>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mt-5 text-sm"><div className="bg-gray-50 p-4 rounded-xl">✅ Category Match: Clothes = Clothes<br />✅ Location Match: Lahore = Lahore<br />✅ Quantity Available</div><div className="bg-gray-50 p-4 rounded-xl">Other Suggestion: Sara Khan (Medicines) → Fatima Bibi (Medicines) - 96% Match<br />Other Suggestion: Hamza Tariq (Food) → Zainab Akhtar (Food) - 94% Match</div></div>
            <button onClick={() => showToast("Match Confirmed! Notification sent to both")} className="mx-auto block mt-7 bg-[#176B45] text-white px-10 py-3.5 rounded-xl font-bold">✓ Confirm Match</button>
          </div>
        )}

        {/* TRACKING */}
        {active === "Delivery Tracking" && (
          <div className="grid md:grid-cols-2 gap-4"><div className="bg-white rounded-2xl border p-7 shadow-sm"><h3 className="font-bold text-lg">Tracking - ID: AJ-101 • Ali Ahmed → Usman Ghani</h3><div className="mt-6 ml-2 border-l-2 border-gray-100 pl-7 space-y-7">{["Application Submitted", "Application Verified", "Application Approved", "Donation Matched", "Delivery In Progress", "Successfully Delivered"].map((s, i) => (<div key={s} className="relative"><div className={`absolute -left-[37px] top-0 w-6 h-6 rounded-full border-4 ${i <= 3 ? "bg-[#176B45] border-emerald-100" : "bg-gray-200 border-white"}`}></div><h4 className={`font-bold ${i <= 3 ? "" : "text-gray-400"}`}>{s}</h4><p className="text-xs text-gray-500">12 Nov 2026 - 10:30 AM • Gujranwala</p></div>))}</div></div>
            <div className="bg-white rounded-2xl border p-7 shadow-sm"><h3 className="font-bold">Delivery Details</h3><div className="mt-4 space-y-3 text-sm"><p><b>Courier:</b> AJAR Volunteer - Bilal Ahmed</p><p><b>Phone:</b> 0300-9998888</p><p><b>Address:</b> Shahdara, Lahore</p><p><b>Status:</b> <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-bold">In Progress</span></p></div><div className="mt-5 bg-[#E8F3EC] p-4 rounded-xl text-sm"><b>Progress: 65%</b><div className="h-2 bg-white rounded-full mt-2"><div className="h-full bg-[#176B45] rounded-full w-[65%]"></div></div></div></div></div>
        )}

        {/* NOTIFICATIONS */}
        {active === "Notifications" && (
          <div className="bg-white rounded-2xl border shadow-sm divide-y">{notifications.map((n, i) => (<div key={i} className="p-5 flex gap-4 items-center"><div className="w-11 h-11 bg-[#E8F3EC] rounded-full grid place-items-center">🔔</div><div className="flex-1"><h4 className="font-bold text-sm">{n.t}</h4><p className="text-sm text-gray-500">{n.d}</p></div><span className="text-xs text-gray-400">{n.time}</span><button onClick={() => showToast("Marked as read")} className="text-xs bg-gray-100 px-3 py-1.5 rounded-full">Mark Read</button></div>))}</div>
        )}

        {/* REPORTS */}
        {active === "Reports & Analytics" && (
          <><div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-4">{[{ t: "Total Donations", v: "1,450" }, { t: "Monthly", v: "182" }, { t: "Approved", v: "980" }, { t: "Rejected", v: "45" }, { t: "Delivered", v: "1,102" }].map(c => (<div key={c.t} className="bg-white p-5 rounded-2xl border shadow-sm"><p className="text-sm text-gray-500">{c.t}</p><h2 className="text-2xl font-bold mt-1">{c.v}</h2></div>))}</div>
            <div className="grid md:grid-cols-2 gap-4"><div className="bg-white p-6 rounded-2xl border shadow-sm"><h3 className="font-bold">Donation Categories</h3><div className="mt-5 space-y-4 text-sm">{[["Clothes", 45], ["Medicines", 30], ["Food", 15], ["Money", 10]].map(([n, p]: any) => (<div key={n}><div className="flex justify-between mb-1"><span>{n}</span><span className="font-bold">{p}%</span></div><div className="h-2.5 bg-gray-100 rounded-full"><div className="h-full bg-[#176B45] rounded-full" style={{ width: p + "%" }}></div></div></div>))}</div><button onClick={() => showToast("Report Exported as PDF")} className="mt-5 bg-[#0F281A] text-white px-5 py-2 rounded-xl text-sm font-bold">Export Report</button></div>
              <div className="bg-white p-6 rounded-2xl border shadow-sm"><h3 className="font-bold">Monthly Donation Activity</h3><div className="flex items-end gap-3 h-44 mt-6">{[40, 65, 50, 80, 95, 70, 110, 130, 90, 120, 145, 182].map((h, i) => (<div key={i} className="flex-1 bg-[#E8F3EC] hover:bg-[#176B45] rounded-t-lg transition" style={{ height: h / 2 }}></div>))}</div><div className="flex justify-between text-xs text-gray-400 mt-2"><span>Jan</span><span>Jun</span><span>Dec</span></div></div></div></>
        )}

        {/* SETTINGS */}
        {active === "Settings" && (
          <div className="bg-white rounded-2xl border p-7 shadow-sm max-w-2xl"><h3 className="font-bold text-lg">Settings</h3><div className="mt-5 space-y-4 text-sm"><label className="block">Full Name<input defaultValue="Focal Person" className="w-full mt-1 border p-3 rounded-xl outline-none focus:border-[#176B45]" /></label><label className="block">Email<input defaultValue="focal@ajar.org" className="w-full mt-1 border p-3 rounded-xl outline-none focus:border-[#176B45]" /></label><label className="block">Branch<input defaultValue="Gujranwala Branch" className="w-full mt-1 border p-3 rounded-xl outline-none focus:border-[#176B45]" /></label><label className="flex gap-2 items-center"><input type="checkbox" defaultChecked /> Email notifications on</label><label className="flex gap-2 items-center"><input type="checkbox" defaultChecked /> SMS notifications on</label></div><button onClick={() => showToast("Settings Saved")} className="mt-6 bg-[#176B45] text-white px-8 py-3 rounded-xl font-bold">Save Changes</button></div>
        )}
      </main>

      {/* DETAIL MODAL */}
      {selected && (
        <div className="fixed inset-0 bg-black/50 grid place-items-center z-50 p-4" onClick={() => setSelected(null)}>
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between"><h3 className="font-bold text-lg">Full Details - {selected.id}</h3><button onClick={() => setSelected(null)} className="w-8 h-8 bg-gray-100 rounded-full">×</button></div>
            <img src={selected.img} className="w-20 h-20 rounded-full mt-4" alt="" />
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm"><p><b>Name:</b> {selected.name}</p><p><b>Phone:</b> {selected.phone}</p><p><b>City:</b> {selected.city}</p><p><b>Category:</b> {selected.cat}</p><p className="col-span-2"><b>Address:</b> {selected.address}</p><p className="col-span-2"><b>Details:</b> {selected.desc || selected.need || selected.reason}</p><p className="col-span-2"><b>Documents:</b> <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-xs">CNIC Front ✓ • CNIC Back ✓ • Proof ✓</span></p></div>
            <div className="mt-6 flex gap-2"><button onClick={() => { setSelected(null); showToast("Approved Successfully") }} className="flex-1 bg-[#176B45] text-white py-3 rounded-xl font-bold">Approve</button><button onClick={() => { setSelected(null); showToast("Marked Under Review") }} className="flex-1 bg-blue-50 text-blue-700 py-3 rounded-xl font-bold">Under Review</button><button onClick={() => { setSelected(null); showToast("Rejected with Reason") }} className="flex-1 bg-red-50 text-red-600 py-3 rounded-xl font-bold">Reject</button></div>
          </div>
        </div>
      )}

      {/* CONFIRM MODAL */}
      {confirm && (
        <div className="fixed inset-0 bg-black/50 grid place-items-center z-50 p-4"><div className="bg-white rounded-2xl max-w-sm w-full p-6 text-center"><div className="w-14 h-14 bg-[#E8F3EC] rounded-full grid place-items-center mx-auto text-2xl">?</div><h3 className="font-bold text-lg mt-4">Are you sure?</h3><p className="text-sm text-gray-500 mt-1">Do you want to {confirm.action} {confirm.name}?</p>{confirm.action === "Reject" && <textarea placeholder="Enter rejection reason..." className="w-full border rounded-xl p-3 mt-4 text-sm outline-none" /> }<div className="flex gap-2 mt-5"><button onClick={() => setConfirm(null)} className="flex-1 border py-3 rounded-xl">Cancel</button><button onClick={() => { showToast(confirm.name + " " + confirm.action + "d"); setConfirm(null); }} className={`flex-1 text-white py-3 rounded-xl font-bold ${confirm.action === "Approve" ? "bg-[#176B45]" : "bg-red-600"}`}>{confirm.action}</button></div></div></div>
      )}

      {/* TOAST */}
      {toast && <div className="fixed bottom-5 right-5 bg-[#0F281A] text-white px-5 py-3 rounded-xl shadow-xl z-[60] text-sm">✓ {toast}</div>}
    </div>
  );
}

function FilterBar({ filter, setFilter }: any) {
  return <div className="flex gap-2 mb-5 flex-wrap">{["All", "Clothes", "Medicines", "Food", "Money"].map(c => (<button key={c} onClick={() => setFilter(c)} className={`px-4 py-2 rounded-full text-sm border ${filter === c ? "bg-[#176B45] text-white border-[#176B45]" : "bg-white"}`}>{c}</button>))}</div>;
}
function Empty() { return <div className="bg-white rounded-2xl border p-12 text-center"><p className="text-4xl">📭</p><h3 className="font-bold mt-3">No Results Found</h3><p className="text-sm text-gray-500">Try changing search or filter.</p></div>; }