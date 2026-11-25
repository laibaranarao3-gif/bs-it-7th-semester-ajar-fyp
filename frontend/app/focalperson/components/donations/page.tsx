export default function Donations() {
  const list = [
    { id: 1, name: "Winter Jackets", person: "Ali Ahmed", qty: "20 pcs", city: "Lahore", type: "Clothes" },
    { id: 2, name: "Food Packages", person: "Hamza Tariq", qty: "10 boxes", city: "Gujranwala", type: "Food" },
    { id: 3, name: "Panadol Extra", person: "Sara Khan", qty: "50 boxes", city: "Gujranwala", type: "Medicines" },
    { id: 4, name: "Cash Donation", person: "Ayesha Noor", qty: "Rs. 25,000", city: "Lahore", type: "Money" },
  ];
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">{list.map(d => (
      <div key={d.id} className="bg-white rounded-2xl border overflow-hidden shadow-sm hover:shadow-lg transition"><div className="h-28 bg-gradient-to-br from-emerald-400 to-teal-600 grid place-items-center text-5xl">🎁</div><div className="p-4"><h4 className="font-bold">{d.name}</h4><p className="text-xs text-gray-500">{d.person} • {d.qty} • {d.city}</p><span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full font-bold mt-2 inline-block">{d.type}</span></div></div>))}
    </div>
  );
}