"use client";
import SideBar from "../../../components/SideBar/SideBar";

export default function NeedHelpPage() {
  return (
    <div className="flex min-h-screen bg-[#FFF8E7]">
      <SideBar role="admin" active="/admin/need-help" />
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold text-[#0F3D2E]">Need Help Requests</h1>
        <p className="text-gray-500 text-sm mt-1">Yahan sari help wali requests ayengi</p>
      </div>
    </div>
  );
}