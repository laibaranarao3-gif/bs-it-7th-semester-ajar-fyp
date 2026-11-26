"use client";

import Link from "next/link";
import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900">Contact Us</h1>
        <p className="mt-2 text-gray-600">
          Koi sawal hai ya madad chahiye? Neeche form bharein, hum
          aap se rabta karenge.
        </p>

        {sent ? (
          <div className="mt-6 p-4 bg-green-100 text-green-800 rounded-lg font-medium">
            ✅ Shukriya! Aapka message mil gaya hai.
          </div>
        ) : (
          <form
            className="mt-6 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Naam
              </label>
              <input
                required
                type="text"
                placeholder="Apna naam likhein"
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                required
                type="email"
                placeholder="example@gmail.com"
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                required
                rows={4}
                placeholder="Apna message likhein..."
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700"
            >
              Message Bhejein
            </button>
          </form>
        )}

        <Link
          href="/"
          className="inline-block mt-8 px-5 py-2 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200"
        >
          ← Wapis Home par jayein
        </Link>
      </div>
    </div>
  );
}