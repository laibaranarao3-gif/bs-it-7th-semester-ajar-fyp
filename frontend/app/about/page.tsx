import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900">About Us</h1>
        
        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
          Ajar App ek donation platform hai. Yahan log zarooratmand
          logo ki madad kar sakte hain. Hamara maqsad hai ke madad
          sahi logo tak, aasani se pahunche.
        </p>

        <h2 className="mt-8 text-xl font-bold text-gray-900">
          Hamara Maqsad
        </h2>

        <ul className="mt-3 space-y-2 text-gray-700">
          <li className="flex gap-2">
            <span>✅</span> Zarooratmand logo ko madad pahunchana
          </li>
          <li className="flex gap-2">
            <span>✅</span> Donations ko transparent banana
          </li>
          <li className="flex gap-2">
            <span>✅</span> Ek aasan aur bharosemand platform dena
          </li>
        </ul>

        <Link
          href="/"
          className="inline-block mt-8 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          ← Wapis Home par jayein
        </Link>
      </div>
    </div>
  );
}