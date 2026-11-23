'use client';
import { useState } from "react";
import Link from "next/link";

type DonatedItem = {
  id: number;
  itemName: string;
  category: string;
  quantity: string;
  city: string;
  donor: string;
  status: string;
};

export default function NeedyPage() {
  const [qrScanned, setQrScanned] = useState(false);

  // Ye data Donor ne donate kiya hai aur Focal ne verify kiya hai
  const [availableItems, setAvailableItems] = useState<DonatedItem[]>([
    { id: 1, itemName: "Bachon ke kapre", category: "Clothes", quantity: "1 bag", city: "Gujranwala", donor: "Ali", status: "Available" },
    { id: 2, itemName: "9th class ki books", category: "Books", quantity: "5 books", city: "Lahore", donor: "Sara", status: "Available" },
    { id: 3, itemName: "Jootay - Size 8", category: "Shoes", quantity: "2 pairs", city: "Sialkot", donor: "Ahmed", status: "Available" },
    { id: 4, itemName: "Khilonay", category: "Toys", quantity: "10 toys", city: "Gujranwala", donor: "Fatima", status: "Available" },
  ]);

  function handleRequest(id: number) {
    alert(`Request bhej di gayi hai! Item ID: ${id}. Focal person ap se rabta karega.`);
    // request ke baad status change
    setAvailableItems(availableItems.map(item => 
      item.id === id ? {...item, status: "Requested"} : item
    ));
  }

  function handleQrScan() {
    setQrScanned(true);
    alert("QR Code Scan ho gaya! Ab apko listed cheezen nazar arahi hain.");
  }

  return (
    <main className="min-h-screen bg-orange-50 p-4">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-3xl font-bold text-center text-orange-700 my-6">
          AJAR-need-help
        </h1>

        {/* QR SCAN SECTION */}
        {!qrScanned ? (
          <div className="bg-white p-8 rounded-2xl shadow-md text-center mb-6">
            <h2 className="font-bold text-lg mb-4">Cheezen dekhne ke liye QR Scan karen</h2>
            <div className="w-40 h-40 bg-gray-200 mx-auto rounded-lg flex items-center justify-center mb-4 border-2 border-dashed">
              <span className="text-gray-500">QR CODE</span>
            </div>
            <button onClick={handleQrScan} className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-8 py-3 rounded-lg">
              Scan QR Code
            </button>
            <p className="text-xs text-gray-500 mt-3">Focal person ke paas laga QR code scan karo</p>
          </div>
        ) : (
          <>
            {/* Available Items List */}
            <div className="bg-white p-6 rounded-2xl shadow-md mb-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-bold text-lg text-gray-800">Available Donated Items: {availableItems.length}</h2>
                <button onClick={()=>setQrScanned(false)} className="text-xs bg-gray-200 px-3 py-1 rounded">Rescan QR</button>
              </div>

              <div className="grid gap-4">
                {availableItems.map((item) => (
                  <div key={item.id} className="border p-4 rounded-xl bg-gray-50">
                    <div className="flex justify-between">
                      <div>
                        <p className="font-bold text-black text-lg">{item.itemName}</p>
                        <p className="text-sm text-gray-600">{item.category} | {item.quantity} | {item.city}</p>
                        <p className="text-xs text-gray-400">Donated by: {item.donor}</p>
                      </div>
                      <span className={`h-fit text-xs px-2 py-1 rounded ${item.status === 'Available' ? 'bg-green-200 text-green-800' : 'bg-yellow-200 text-yellow-800'}`}>
                        {item.status}
                      </span>
                    </div>
                    <button 
                      disabled={item.status !== 'Available'}
                      onClick={()=>handleRequest(item.id)} 
                      className={`w-full mt-3 font-bold p-2 rounded-lg ${item.status === 'Available' ? 'bg-green-600 text-white' : 'bg-gray-300 text-gray-500'}`}
                    >
                      {item.status === 'Available' ? 'Request Karo' : 'Requested'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* Navigation Buttons */}
        <div className="grid grid-cols-2 gap-4">
          <Link href="/donate" className="bg-green-600 text-white text-center font-bold p-3 rounded-lg">
            Go to Donor
          </Link>
          <Link href="/focal" className="bg-blue-600 text-white text-center font-bold p-3 rounded-lg">
            Go to Focal Person
          </Link>
        </div>
        <Link href="/" className="block text-center mt-4 text-gray-600 underline">
          Back to Home
        </Link>

      </div>
    </main>
  );
}