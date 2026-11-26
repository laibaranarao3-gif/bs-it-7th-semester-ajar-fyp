"use client";

export default function PrimaryButton({ text, onClick, type = "button" }: any) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-full bg-[#0F3D2E] hover:bg-[#2E7D4F] text-white font-semibold py-3 rounded-lg transition text-sm sm:text-base"
    >
      {text}
    </button>
  );
}