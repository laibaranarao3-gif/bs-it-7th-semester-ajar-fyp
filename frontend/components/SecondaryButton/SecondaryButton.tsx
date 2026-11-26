"use client";

export default function SecondaryButton({ text, onClick }: any) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full bg-[#FFF8E7] border border-[#2E7D4F]/30 text-[#0F3D2E] font-semibold py-3 rounded-lg transition text-sm sm:text-base hover:bg-[#2E7D4F]/10"
    >
      {text}
    </button>
  );
}