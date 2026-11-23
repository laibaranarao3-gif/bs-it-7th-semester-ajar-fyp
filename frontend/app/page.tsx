
"use client";

import { useState } from "react";
import "./focus.css";

type Application = {
  id: string;
  name: string;
  type: "Donor" | "Needy Person";
  category: string;
  phone: string;
  date: string;
  status: "Pending" | "Approved" | "Rejected";
  address: string;
  description: string;
};

const applications: Application[] = [
  {
    id: "AJ-101",
    name: "Ali Ahmed",
    type: "Donor",
    category: "Clothes",
    phone: "03001234567",
    date: "18 Nov 2026",
    status: "Approved",
    address: "Lahore, Pakistan",
    description: "Donating winter clothes for needy families.",
  },
  {
    id: "AJ-102",
    name: "Fatima Noor",
    type: "Needy Person",
    category: "Medicines",
    phone: "03111234567",
    date: "17 Nov 2026",
    status: "Pending",
    address: "Gujranwala, Pakistan",
    description: "Needs medicines for her family.",
  },
  {
    id: "AJ-103",
    name: "Usman Khalid",
    type: "Donor",
    category: "Food",
    phone: "03221234567",
    date: "16 Nov 2026",
    status: "Pending",
    address: "Lahore, Pakistan",
    description: "Donating food packages.",
  },
  {
    id: "AJ-104",
    name: "Ayesha Bibi",
    type: "Needy Person",
    category: "Financial Aid",
    phone: "03331234567",
    date: "15 Nov 2026",
    status: "Approved",
    address: "Sialkot, Pakistan",
    description: "Needs financial assistance for education.",
  },
  {
    id: "AJ-105",
    name: "Hamza Tariq",
    type: "Donor",
    category: "Books",
    phone: "03441234567",
    date: "14 Nov 2026",
    status: "Rejected",
    address: "Gujranwala, Pakistan",
    description: "Donating used educational books.",
  },
];

export default function FocusPersonDashboard() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<Application | null>(null);

  const filteredApplications = applications.filter((app) => {
    const matchesSearch =
      app.name.toLowerCase().includes(search.toLowerCase()) ||
      app.id.toLowerCase().includes(search.toLowerCase()) ||
      app.category.toLowerCase().includes(search.toLowerCase());
    const matchesFilter =
      filter === "All" || app.status === filter || app.type === filter;
    return matchesSearch && matchesFilter;
  });

  const totalDonors = applications.filter((a) => a.type === "Donor").length;
  const totalNeedy = applications.filter((a) => a.type === "Needy Person").length;
  const pending = applications.filter((a) => a.status === "Pending").length;
  const approved = applications.filter((a) => a.status === "Approved").length;

  return (
    <main className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo"></div>
          <span className="logo-icon">✦</span>
          <div>
            <h2>AJAR</h2>
            <p>Giving with care</p>
          </div>
      </aside>    
    <div className="bg-[#FFF8E7] min-h-screen">
      {/* ===== Navbar ===== */}
      <header className="bg-[#0F3D2E] text-white px-6 py-4 flex flex-col items-center gap-4">
        <div className="flex items-center gap-2 text-2xl font-bold">
          <span className="bg-cream text-black w-8 h-8 grid place-items-center rounded-lg">♥</span>
          Ajar
        </div>

        <p className="menu-title">MENU</p>
        <nav>
          <a className="nav-item active" href="#"><span>▦</span> Dashboard</a>
          <a className="nav-item" href="#"><span>♙</span> Donors</a>
          <a className="nav-item" href="#"><span>♡</span> Needy Persons</a>
          <a className="nav-item" href="#"><span>▤</span> Applications</a>
          <a className="nav-item" href="#"><span>♧</span> Donations</a>
          <a className="nav-item" href="#"><span>✓</span> Verification</a>
        </nav>

        <div className="sidebar-bottom">
          <a className="nav-item" href="#"><span>⚙</span> Settings</a>
          <a className="nav-item" href="#"><span>↪</span> Logout</a>
          <div className="profile">
            <div className="avatar">FP</div>
            <div><strong>Focus Person</strong><p>Administrator</p></div>
          </div>
        </div>
      </header>
      
      

      {/* Main Content */}
      <section className="main-content">
        <header className="topbar">
          <div>
            <h1>Focus Person Dashboard</h1>
            <p>Manage donors and needy people in one place.</p>
          </div>
          <div className="top-actions">
            <button className="notification">♧</button>
            <div className="avatar green">FP</div>
          </div>
        </header>

        <div className="welcome">
          <div>
            <h2>Assalam-o-Alaikum 👋</h2>
            <p>Here&apos;s an overview of your AJAR activities.</p>
          </div>
          <span className="welcome-icon">✦</span>
        </div>

        <div className="stats-grid">
          <div className="stat-card"><div className="stat-icon donor-icon">♙</div><p>Total Donors</p><h2>{totalDonors}</h2><span className="stat-note">Registered donors</span></div>
          <div className="stat-card"><div className="stat-icon needy-icon">♡</div><p>Needy Persons</p><h2>{totalNeedy}</h2><span className="stat-note">Registered applicants</span></div>
          <div className="stat-card"><div className="stat-icon pending-icon">◷</div><p>Pending Applications</p><h2>{pending}</h2><span className="stat-note">Needs review</span></div>
          <div className="stat-card"><div className="stat-icon approved-icon">✓</div><p>Approved Donations</p><h2>{approved}</h2><span className="stat-note">Successfully approved</span></div>
        </div>

        <section className="applications-card">
          <div className="section-header">
            <div><h2>Applications Management</h2><p>Manage donor and needy person requests.</p></div>
            <button className="export-btn">↓ Export</button>
          </div>

          <div className="toolbar">
            <input type="text" placeholder="Search name, ID or category..." value={search} onChange={(e) => setSearch(e.target.value)} />
            <select value={filter} onChange={(e) => setFilter(e.target.value)}>
              <option value="All">All Applications</option>
              <option value="Donor">Donors</option>
              <option value="Needy Person">Needy Persons</option>
              <option value="Pending">Pending</option>
              <option value="Approved">Approved</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>

          <div className="table-container">
            <table>
              <thead><tr><th>ID</th><th>Applicant</th><th>Type</th><th>Category</th><th>Contact</th><th>Date</th><th>Status</th><th>Action</th></tr></thead>
              <tbody>
                {filteredApplications.map((app) => (
                  <tr key={app.id}>
                    <td className="application-id">{app.id}</td>
                    <td><strong>{app.name}</strong></td>
                    <td><span className={`type-badge ${app.type === "Donor" ? "donor" : "needy"}`}>{app.type}</span></td>
                    <td>{app.category}</td>
                    <td>{app.phone}</td>
                    <td>{app.date}</td>
                    <td><span className={`status ${app.status.toLowerCase()}`}>{app.status}</span></td>
                    <td><button className="view-btn" onClick={() => setSelected(app)}>View Details</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
            {filteredApplications.length === 0 && <div className="empty">No applications found.</div>}
          </div>
          <div className="table-footer">Showing {filteredApplications.length} applications</div>
        </section>
      </section>

      {/* Modal */}
      {selected && (
        <div className="modal-overlay" onClick={() => setSelected(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div><h2>Application Details</h2><p>{selected.id}</p></div>
              <button className="close-btn" onClick={() => setSelected(null)}>×</button>
            </div>
            <div className="details-grid">
              <div><label>Applicant Name</label><strong>{selected.name}</strong></div>
              <div><label>Applicant Type</label><strong>{selected.type}</strong></div>
              <div><label>Category</label><strong>{selected.category}</strong></div>
              <div><label>Contact Number</label><strong>{selected.phone}</strong></div>
              <div><label>Application Date</label><strong>{selected.date}</strong></div>
              <div><label>Status</label><span className={`status ${selected.status.toLowerCase()}`}>{selected.status}</span></div>
              <div className="full-width"><label>Address</label><strong>{selected.address}</strong></div>
              <div className="full-width"><label>Description</label><p>{selected.description}</p></div>
            </div>
            <button className="modal-done" onClick={() => setSelected(null)}>Close Details</button>
          </div>
        </div>
      )}
    
    
    </div>
    </main>
  );
}
