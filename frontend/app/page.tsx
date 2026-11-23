// app/page.tsx - Full Home Page

import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[#FFF8E7] min-h-screen">
      {/* ===== Navbar ===== */}
      <header className="bg-[#0F3D2E] text-white px-6 py-4 flex flex-col items-center gap-4">
        <div className="flex items-center gap-2 text-2xl font-bold">
          <span className="bg-cream text-black w-8 h-8 grid place-items-center rounded-lg">♥</span>
          Ajar
        </div>
        <nav className="flex flex-wrap justify-center items-center gap-5 text-sm">
          <Link href="/" className="bg-white text-black px-4 py-2 rounded-lg">Home</Link>
          <Link href="#">How It Works</Link>
          <Link href="#">Available Items</Link>
          <Link href="#">Join Us</Link>
          <Link href="#" className="border border-white/40 px-4 py-2 rounded-lg">Scan QR</Link>
        </nav>
      </header>

      {/* ===== Hero Section ===== */}
      <main className="max-w-6xl mx-auto px-6 py-14 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side */}
        <div>
          <p className="text-[11px] tracking-widest text-green-800 font-semibold">
            A SIMPLE WAY TO SHARE
          </p>
          <h1 className="text-5xl font-extrabold text-[#2E7D4F] leading-tight mt-3">
            Ajar - Help Each<br />Other
          </h1>
          <p className="text-gray-500 mt-4 text-lg">
            Give what you have. Take what you need.
          </p>

          {/* ===== Donate + Need Help Buttons ===== */}
          <div className="flex flex-col gap-3 mt-7 w-fit">
            <Link href="/donate" className="bg-[#0F3D2E] text-white px-6 py-3 rounded-xl font-semibold">
              I Want To Donate →
            </Link>
            <Link href="/need-help" className="border border-gray-300 px-6 py-3 rounded-xl font-semibold">
              I Need Help →
            </Link>
          </div>
        </div>

        {/* Right Side Illustration */}
        <div className="relative bg-[#F5EAD1] rounded-full aspect-square grid place-items-center">
          <div className="bg-[#0F3d2E] w-40 h-40 rounded-[2rem] grid place-items-center text-white text-6xl rotate-3 shadow-xl">♥</div>
          <span className="absolute top-10 text-green-600 text-2xl">♥</span>
          <span className="absolute bottom-16 right-16 text-green-700/40 text-2xl">♥</span>
          <div className="absolute bottom-4 right-0 bg-white shadow rounded-xl px-4 py-2 text-xs">
            <b>Safe and checked</b><br />Every request is checked.
          </div>
        </div>
      </main>
    </div>
  );
}