
"use client";
import { useState } from "react";

export default function NeedyPersons() {
  const [list, setList] = useState([
    { id: 1, name: "Insulin Injections", type: "Medicines", qty: "10 injections", person: "Fatima Bibi", city: "Gujranwala", phone: "0301-1112233", status: "Pending" },
    { id: 2, name: "Warm Clothes for Kids", type: "Clothes", qty: "12 pcs", person: "Usman Ghani", city: "Lahore", phone: "0321-4445566", status: "Under Review" },
    { id: 3, name: "Monthly Rashan", type: "Food", qty: "1 Month", person: "Zainab Akhtar", city: "Gujranwala", phone: "0300-7788990", status: "Approved" },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [success, setSuccess] = useState("");
  const [form, setForm] = useState({ name: "", type: "Food", qty: "", person: "", city: "", phone: "" });

  const handleAdd = (e: any) => {
    e.preventDefault();
    const newItem = { id: Date.now(), ...form, status: "Pending" };
    setList([newItem, ...list]);
    setShowForm(false);
    setForm({ name: "", type: "Food", qty: "", person: "", city: "", phone: "" });
    setSuccess(form.person + " ki Need Add ho gayi ✓");
    setTimeout(() => setSuccess(""), 3000);
  };

  return (
    <div>
      {/* TOP BAR + ADD LIST BUTTON */}
      <div className="flex flex-wrap gap-3 justify-between items-center bg-white p-4 rounded-2xl border shadow-sm mb-4">
        <div>
          <h2 className="font-bold text-xl">👥 Needy Persons List</h2>
          <p className="text-sm text-gray-500">Total {list.length} Persons ko Madad Chahiye</p>
        </div>
        <button onClick={() => setShowForm(true)} className="bg-green-900 text-white px-6 py-3 rounded-xl font-bold text-sm shadow-lg hover:bg-green-900">
          + Add List
        </button>
      </div>

      {success && <div className="bg-emerald-50 border border-emerald-200 text-emerald-700 p-4 rounded-2xl mb-4 font-bold text-sm">✓ {success}</div>}

      <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
        <table className="w-full text-sm">
          <thead className="bg-orange-50"><tr><th className="p-4 text-left">Need</th><th className="p-4 text-left">Person</th><th className="p-4 text-left">Status</th><th className="p-4 text-left">Action</th></tr></thead>
          <tbody>
            {list.map(item => (
              <tr key={item.id} className="border-t hover:bg-orange-50/50">
                <td className="p-4 font-medium">{item.name} - <span className="text-gray-500">{item.qty}</span><br /><span className="text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full font-bold">{item.type}</span></td>
                <td className="p-4 font-bold">{item.person}<br /><span className="text-xs font-normal text-gray-500">{item.city} • {item.phone}</span></td>
                <td className="p-4"><span className={`px-2 py-1 rounded-full text-xs font-bold ${item.status === "Approved" ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"}`}>{item.status}</span></td>
                <td className="p-4"><button onClick={() => setList(list.filter(x => x.id !== item.id))} className="bg-red-50 text-red-600 px-3 py-1.5 rounded-lg text-xs font-bold">Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ADD LIST POPUP FORM */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100] p-4" onClick={() => setShowForm(false)}>
          <form onSubmit={handleAdd} onClick={(e) => e.stopPropagation()} className="bg-white w-full max-w-md rounded-3xl p-6 shadow-2xl">
            <div className="flex justify-between items-center mb-5">
              <h2 className="text-xl font-bold">+ Add Needy Person</h2>
              <button type="button" onClick={() => setShowForm(false)} className="w-8 h-8 bg-gray-100 rounded-full font-bold">✕</button>
            </div>
            <div className="space-y-3 text-sm">
              <div><label className="font-bold text-gray-600">Needy Person ka Naam</label><input required value={form.person} onChange={e => setForm({ ...form, person: e.target.value })} placeholder="e.g. Fatima Bibi" className="w-full mt-1 border p-3 rounded-xl outline-none focus:border-orange-400" /></div>
              <div><label className="font-bold text-gray-600">Kya Chahiye? - Material ka Naam</label><input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="e.g. Insulin / Rashan / School Fees" className="w-full mt-1 border p-3 rounded-xl outline-none focus:border-orange-400" /></div>
              <div className="grid grid-cols-2 gap-3">
                <div><label className="font-bold text-gray-600">Type</label><select value={form.type} onChange={e => setForm({ ...form, type: e.target.value })} className="w-full mt-1 border p-3 rounded-xl bg-white"><option>Food</option><option>Medicines</option><option>Clothes</option><option>Money</option><option>Other</option></select></div>
                <div><label className="font-bold text-gray-600">Kitni Quantity?</label><input required value={form.qty} onChange={e => setForm({ ...form, qty: e.target.value })} placeholder="e.g. 10 injections / 1 Month" className="w-full mt-1 border p-3 rounded-xl" /></div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div><label className="font-bold text-gray-600">City</label><input required value={form.city} onChange={e => setForm({ ...form, city: e.target.value })} placeholder="Gujranwala" className="w-full mt-1 border p-3 rounded-xl" /></div>
                <div><label className="font-bold text-gray-600">Phone</label><input required value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="0300-1234567" className="w-full mt-1 border p-3 rounded-xl" /></div>
              </div>
            </div>
            <button type="submit" className="w-full mt-5 bg-gradient-to-r from-green-900 to-green-700 text-white py-3.5 rounded-xl font-bold shadow-lg">✓ Save to List</button>
          </form>
        </div>
      )}
    </div>
  );
}