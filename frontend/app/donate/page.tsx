'use client';
import { useState } from "react";

export default function DonorPage() {
  const [donorName, setDonorName] = useState("");
  const [category, setCategory] = useState("Clothes");
  const [quantity, setQuantity] = useState("");
  const [city, setCity] = useState("");
  const [activeTab, setActiveTab] = useState("Dashboard");

  function handleDonate(e: any) {
    e.preventDefault();
    alert("Donate kiya: " + donorName);
    setActiveTab("All Donations");
  }

  function tabStyle(tabName: string) {
    if (activeTab === tabName) {
      return "bg-white text-black p-2 rounded font-bold cursor-pointer";
    } else {
      return "p-2 opacity-60 cursor-pointer hover:opacity-100";
    }
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      
      <div className="w-52 bg-[#1e2d24] text-white p-5">
        <h1 className="font-bold text-xl mb-8">Ajar</h1>
        <ul className="space-y-2 text-sm">
          <li onClick={() => setActiveTab("Dashboard")} className={tabStyle("Dashboard")}>
            Dashboard
          </li>
          <li onClick={() => setActiveTab("All Donations")} className={tabStyle("All Donations")}>
            All Donations
          </li>
          <li onClick={() => setActiveTab("Need Help")} className={tabStyle("Need Help")}>
            Need Help
          </li>
          <li onClick={() => setActiveTab("All Users")} className={tabStyle("All Users")}>
            All Users
          </li>
        </ul>
      </div>

      <main className="flex-1 p-4">
        <div className="mx-auto max-w-2xl">

          {activeTab === "Dashboard" && (
            <div>
              <h1 className="text-3xl font-bold text-center text-green-700 my-6">
                AJAR - Donor Panel
              </h1>
              <form onSubmit={handleDonate} className="bg-white p-6 rounded-2xl shadow-md grid gap-4">
                <input className="border p-3 rounded-lg text-black" placeholder="Donor Name" value={donorName} onChange={(e) => setDonorName(e.target.value)} />
                <select className="border p-3 rounded-lg text-black" value={category} onChange={(e) => setCategory(e.target.value)}>
                  <option>Clothes</option>
                  <option>Books</option>
                  <option>Shoes</option>
        
                  <option>Medicine</option>
                  <option>Bag</option>
                  <option>Blankit</option>
                </select>
                <input className="border p-3 rounded-lg text-black" placeholder="Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                <input className="border p-3 rounded-lg text-black" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} />
                <button className="bg-green-600 text-white font-bold p-3 rounded-lg">Donate Karo</button>
              </form>
            </div>
          )}

          {activeTab === "All Donations" && (
            <div className="bg-green-950 p-6 rounded-2xl shadow-md">
              <h2 className="font-bold text-lg mb-4">All Donations</h2>
              <p className="text-sm border-b py-2">Medicines - Ali (Lahore)</p>
              <p className="text-sm border-b py-2">Clothes - Fatima (Gujranwala)</p>
              <p className="text-sm py-2">Shoes - Ahmed (Sialkot)</p>
            </div>
          )}

          {activeTab === "Need Help" && (
            <div className="bg-green-950 p-6 rounded-2xl shadow-md">
              <h2 className="font-bold text-lg mb-4">Need Help Requests</h2>
              <p className="text-sm border-b py-2">Books - Student need books</p>
              <p className="text-sm border-b py-2">Food - Family needs food</p>
              <p className="text-sm py-2">Medicine - Old man needs medicine</p>
            </div>
          )}

          {activeTab === "All Users" && (
            <div className="bg-green-950 p-6 rounded-2xl shadow-md">
              <h2 className="font-bold text-lg mb-4">All Users</h2>
              <p className="text-sm">Total Users: 20</p>
              <p className="text-sm">Donors: 12</p>
              <p className="text-sm">Needy: 8</p>
            </div>
          )}

        </div>
      </main>

    </div>
  );
}