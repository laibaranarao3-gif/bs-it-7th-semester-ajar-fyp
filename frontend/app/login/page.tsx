"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";

const USERS = [
  { email: "admin@gmail.com", password: "12345678", role: "admin", redirect: "/admin" },
  { email: "focal@gmail.com", password: "12345678", role: "focal", redirect: "/focalperson" },
  { email: "donor@gmail.com", password: "12345678", role: "donor", redirect: "/donate" },
  { email: "needy@gmail.com", password: "12345678", role: "needy", redirect: "/need-help" },
];

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleLogin = (e: any) => {
    e.preventDefault();
    setError("");
    setEmailError("");
    setPasswordError("");

    let valid = true;

    if (!email) {
      setEmailError("Email لکھنا ضروری ہے");
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("صحیح Email لکھیں، جیسے admin@gmail.com");
      valid = false;
    }

    if (!password) {
      setPasswordError("Password لکھنا ضروری ہے");
      valid = false;
    } else if (password.length < 8) {
      setPasswordError("Password 8 کا ہونا چاہیے، جیسے 12345678");
      valid = false;
    }

    if (!valid) return;

    const user = USERS.find(
      (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
    );

    if (!user) {
      setError("Email یا Password غلط ہے۔ دوبارہ کوشش کریں۔");
      return;
    }

    localStorage.setItem("userRole", user.role);
    localStorage.setItem("userEmail", user.email);

    router.push(user.redirect);
    document.cookie = `userRole=${user.role}; path=/`;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFF8E7] p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 border border-[#2E7D4F]/20">
        
        <div className="text-center mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#0F3D2E]">Admin Login</h1>
          <p className="text-sm sm:text-base text-gray-500 mt-2">
            اپنے Account میں Login کریں
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#0F3D2E] mb-1">Email</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@gmail.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E7D4F] focus:border-[#2E7D4F] focus:outline-none text-sm sm:text-base"
            />
            {emailError && <p className="text-red-500 text-xs mt-1">{emailError}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-[#0F3D2E] mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="12345678"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E7D4F] focus:border-[#2E7D4F] focus:outline-none text-sm sm:text-base pr-12"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-sm font-medium text-[#2E7D4F]"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            {passwordError && <p className="text-red-500 text-xs mt-1">{passwordError}</p>}
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 text-sm p-3 rounded-lg">
              {error}
            </div>
          )}

          <PrimaryButton text="Login" type="submit" />

        </form>

        <div className="mt-6 bg-[#FFF8E7] p-4 rounded-lg text-xs sm:text-sm text-gray-600 border border-[#2E7D4F]/20">
          <p className="font-bold text-[#0F3D2E] mb-2">Test karne ke liye:</p>
          <p>Admin: admin@gmail.com / 12345678</p>
          <p>Focal: focal@gmail.com / 12345678</p>
          <p>Donor: donor@gmail.com / 12345678</p>
          <p>Needy: needy@gmail.com / 12345678</p>
        </div>
      </div>
    </div>
  );
}