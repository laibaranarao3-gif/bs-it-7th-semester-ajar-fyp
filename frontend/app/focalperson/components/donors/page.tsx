
"use client";
import { useState } from "react";

export default function Donors() {
  const [list, setList] = useState([
    { id: 1, name: "Winter Jackets", type: "Clothes", qty: "20 pcs", person: "Ali Ahmed", city: "Lahore", phone: "0300-1234567" },
    { id: 2, name: "Panadol Extra", type: "Medicines", qty: "50 boxes", person: "Sara Khan", city: "Gujranwala", phone: "0312-9876543" },
    { id: 3, name: "Food Packages", type: "Food", qty: "10 boxes", person: "Hamza Tariq", city: "Gujranwala", phone: "0333-5556677" },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [success, setSuccess] = useState("");

  // Form ka Data
  const [form, setForm] = useState({ name: "", type: "Clothes", qty: "", person: "", city: "", phone: "" });

  // ADD LIST BUTTON - Save karne par
  const handleAdd = (e: any) => {
    e.preventDefault();
    const newItem = { id: Date.now(), ...form };
    setList([newItem, ...list]); // List ke upar naya item aa jayega
    setShowForm(false);
    setForm({ name: "", type: "Clothes", qty: "", person: "", city: "", phone: "" });
    setSuccess(form.person + " ka " + form.name + " Add ho gaya ✓");
    setTimeout(() => setSuccess(""), 3000);
  };

  return (
    <div>
      {/* TOP BAR + ADD LIST BUTTON */}
      <div className="flex flex-wrap gap-3 justify-between items-center bg-white p-4 rounded-2xl border shadow-sm mb-4">
        <div>
          <h2 className="font-bold text-xl">❤️ Donors List</h2>
          <p className="text-sm text-gray-500">Total {list.length} Donations Available</p>
        </div>
        <button onClick={() => setShowForm(true)} className="bg-[#176B45] text-white px-6 py-3 rounded-xl font-bold text-sm shadow-lg hover:bg-[#0F281A]">
          + Add List
        </button>
      </div>

      {success && <div className="bg-emerald-50 border border-emerald-200 text-emerald-700 p-4 rounded-2xl mb-4 font-bold text-sm">✓ {success}</div>}

      {/* TABLE */}
      <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
        <table className="w-full text-sm">
          <thead className="bg-[#E8F3EC]"><tr><th className="p-4 text-left">Material</th><th className="p-4 text-left">Type</th><th className="p-4 text-left">Person</th><th className="p-4 text-left">City / Phone</th><th className="p-4 text-left">Action</th></tr></thead>
          <tbody>
            {list.map(item => (
              <tr key={item.id} className="border-t hover:bg-emerald-50/50">
                <td className="p-4 font-medium">{item.name} - <span className="text-gray-500">{item.qty}</span></td>
                <td className="p-4"><span className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full text-xs font-bold">{item.type}</span></td>
                <td className="p-4 font-bold">{item.person}</td>
                <td className="p-4">{item.city}<br /><span className="text-xs text-gray-500">{item.phone}</span></td>
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
              <h2 className="text-xl font-bold">+ Add New Donor List</h2>
              <button type="button" onClick={() => setShowForm(false)} className="w-8 h-8 bg-gray-100 rounded-full font-bold">✕</button>
            </div>
            <div className="space-y-3 text-sm">
              <div><label className="font-bold text-gray-600">Donor ka Naam</label><input required value={form.person} onChange={e => setForm({ ...form, person: e.target.value })} placeholder="e.g. Ali Ahmed" className="w-full mt-1 border p-3 rounded-xl outline-none focus:border-emerald-500" /></div>
              <div><label className="font-bold text-gray-600">Material ka Naam</label><input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="e.g. Winter Jackets" className="w-full mt-1 border p-3 rounded-xl outline-none focus:border-emerald-500" /></div>
              <div className="grid grid-cols-2 gap-3">
                <div><label className="font-bold text-gray-600">Type</label><select value={form.type} onChange={e => setForm({ ...form, type: e.target.value })} className="w-full mt-1 border p-3 rounded-xl bg-white"><option>Clothes</option><option>Medicines</option><option>Food</option><option>Money</option><option>Other</option></select></div>
                <div><label className="font-bold text-gray-600">Quantity</label><input required value={form.qty} onChange={e => setForm({ ...form, qty: e.target.value })} placeholder="e.g. 20 pcs / 50 boxes / Rs. 5000" className="w-full mt-1 border p-3 rounded-xl" /></div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div><label className="font-bold text-gray-600">City</label><input required value={form.city} onChange={e => setForm({ ...form, city: e.target.value })} placeholder="Gujranwala" className="w-full mt-1 border p-3 rounded-xl" /></div>
                <div><label className="font-bold text-gray-600">Phone</label><input required value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="0300-1234567" className="w-full mt-1 border p-3 rounded-xl" /></div>
              </div>
            </div>
            <button type="submit" className="w-full mt-5 bg-gradient-to-r from-[#176B45] to-[#22C07A] text-white py-3.5 rounded-xl font-bold shadow-lg">✓ Save to List</button>
          </form>
        </div>
      )}
    </div>
  );
}