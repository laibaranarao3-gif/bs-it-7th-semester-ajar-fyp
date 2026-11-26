import Link from "next/link";

export default function Admin() {
  return (
    <div className="bg-[#FFF8E7] min-h-screen font-sans flex">

      {/* ===== SIDEBAR - Left Side ===== */}
      <div className="w-[220px] min-h-screen bg-[#0F3D2E] text-white p-5 hidden md:block fixed left-0 top-0 bottom-0">
        <div className="flex items-center gap-2 text-2xl font-bold">
          <span className="bg-[#FFF8E7] text-black w-8 h-8 grid place-items-center rounded-lg">A </span>
          Ajar
        </div>
        <p className="text-xs opacity-70 mt-1">Admin Panel</p>

        <div className="mt-8 space-y-2 text-sm">
          <Link href="/admin" className="block bg-white text-black px-4 py-3 rounded-lg font-bold">📊 Dashboard</Link>
          <Link href="/admin/alldonations" className="block px-4 py-3 rounded-lg hover:bg-white/10">🎁 All Donations</Link>
          <Link href="/admin/need-help" className="block px-4 py-3 rounded-lg hover:bg-white/10">🙏 Need Help</Link>
          <Link href="/admin/users" className="block px-4 py-3 rounded-lg hover:bg-white/10">👥 All Users</Link>
          <Link href="/" className="block px-4 py-3 rounded-lg hover:bg-white/10">🏠 Home</Link>
          <Link href="/about" className="block px-4 py-3 rounded-lg hover:bg-white/10">ℹ️ About</Link>
          <Link href="/contact" className="block px-4 py-3 rounded-lg hover:bg-white/10">📞 Contact</Link>
        </div>

        <div className="absolute bottom-5 left-5 right-5 bg-white/10 p-3 rounded-xl text-xs text-center">
          Admin - Ajar App
        </div>
      </div>

      {/* ===== RIGHT SIDE - Main Content ===== */}
      <div className="flex-1 md:ml-[220px] pb-24">

        {/* Top Bar */}
        <header className="bg-[#0F3D2E] text-white px-6 py-4 flex justify-between items-center md:hidden">
          <h1 className="text-xl font-bold">Ajar - Admin</h1>
          <Link href="/" className="bg-white text-black px-3 py-1 rounded-lg text-sm">Home</Link>
        </header>
        <header className="hidden md:flex bg-white px-6 py-4 justify-between items-center shadow-sm">
          <h1 className="text-xl font-bold text-[#0F3D2E]">Hello, Admin</h1>
          <Link href="/" className="bg-[#0F3D2E] text-white px-4 py-2 rounded-lg text-sm">Back to Home</Link>
        </header>

        <main className="max-w-5xl mx-auto px-6 py-6">
          <p className="text-gray-500 text-sm">Here you can see all donations and requests.</p>

          {/* Boxes */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-white p-5 rounded-2xl shadow-sm text-center"><p className="text-3xl font-bold text-[#2E7D4F]">12</p><p className="text-sm text-gray-500">Total Donations</p></div>
            <div className="bg-white p-5 rounded-2xl shadow-sm text-center"><p className="text-3xl font-bold text-[#2E7D4F]">8</p><p className="text-sm text-gray-500">Need Help Requests</p></div>
            <div className="bg-white p-5 rounded-2xl shadow-sm text-center"><p className="text-3xl font-bold text-[#2E7D4F]">20</p><p className="text-sm text-gray-500">Total Users</p></div>
          </div>

          {/* New Donations */}
          <h3 className="text-xl font-bold text-[#0F3D2E] mt-8">New Donations</h3>
          <div className="bg-white rounded-2xl p-5 mt-4 shadow-sm space-y-4">
            <div className="flex justify-between items-center border-b pb-3">
              <div><p className="font-bold">Medicine - Ali</p><p className="text-xs text-gray-500">Multan - 2 days ago</p></div>
              <div className="flex gap-2"><button className="bg-[#0F3D2E] text-white px-3 py-1 rounded-lg text-xs">Approve</button><button className="border px-3 py-1 rounded-lg text-xs">Reject</button></div>
            </div>
            <div className="flex justify-between items-center border-b pb-3">
              <div><p className="font-bold">Clothes - Fatima</p><p className="text-xs text-gray-500">Lahore - 1 day ago</p></div>
              <div className="flex gap-2"><button className="bg-[#0F3D2E] text-white px-3 py-1 rounded-lg text-xs">Approve</button><button className="border px-3 py-1 rounded-lg text-xs">Reject</button></div>
            </div>
            <div className="flex justify-between items-center">
              <div><p className="font-bold">Shoes - Ahmed</p><p className="text-xs text-gray-500">Karachi - Today</p></div>
              <div className="flex gap-2"><button className="bg-[#0F3D2E] text-white px-3 py-1 rounded-lg text-xs">Approve</button><button className="border px-3 py-1 rounded-lg text-xs">Reject</button></div>
            </div>
          </div>

          {/* Need Help + Users - Scroll karne par */}
          <h3 className="text-xl font-bold text-[#0F3D2E] mt-8">Need Help Requests</h3>
          <div className="bg-white rounded-2xl p-5 mt-4 shadow-sm space-y-2">
            <p>📚 Books - Student needs books</p>
            <p>🍲 Food - Family needs food</p>
            <p>💊 Medicine - Old man needs medicine</p>
          </div>

          <h3 className="text-xl font-bold text-[#0F3D2E] mt-8">All Users</h3>
          <div className="bg-white rounded-2xl p-5 mt-4 shadow-sm space-y-2">
            <p>Ali - Donor - Multan</p>
            <p>Fatima - Donor - Lahore</p>
            <p>Ahmed - Need Help - Karachi</p>
          </div>
        </main>

        {/* Bottom Bar - Mobile ke liye */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white flex justify-around py-3 shadow-[0_-2px_10px_rgba(0,0,0,0.1)]">
          <Link href="/" className="text-center text-gray-600 text-xs">🏠<br />Home</Link>
          <Link href="/admin" className="text-center text-[#0F3D2E] font-bold text-xs">⚙️<br />Admin</Link>
          <Link href="/about" className="text-center text-gray-600 text-xs">ℹ️<br />About</Link>
          <Link href="/contact" className="text-center text-gray-600 text-xs">📞<br />Contact</Link>
        </div>

      </div>
    </div>
  );
}