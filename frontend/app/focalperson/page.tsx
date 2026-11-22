"use client";
import { useState } from "react";

export default function Page() {
  const [page, setPage] = useState("Dashboard");
  const menu = ["Dashboard", "Donors", "Needy Persons", "Applications", "Donations", "Verification", "Matching", "Tracking", "Notifications", "Reports", "Settings"];

  return (
    <div style={{ display: "flex", minHeight: "100vh", fontFamily: "sans-serif", background: "#f6f8f6" }}>
      <div style={{ width: 230, background: "#0F281A", color: "white", padding: 20 }}>
        <h2>AJAR</h2>
        <p style={{ fontSize: 12, color: "#aaa" }}>Spread Kindness</p>
        {menu.map(m => (
          <div key={m} onClick={() => setPage(m)} style={{ padding: 10, marginTop: 5, borderRadius: 8, cursor: "pointer", background: page === m ? "#176B45" : "transparent" }}>{m}</div>
        ))}
      </div>

      <div style={{ flex: 1, padding: 25 }}>
        <h1>{page === "Dashboard" ? "Welcome Back, Focal Person!" : page}</h1>

        {page === "Dashboard" && (
          <div style={{ display: "flex", gap: 15, marginTop: 20 }}>
            <div style={box}>Total Donors: 1284</div>
            <div style={box}>Needy Persons: 890</div>
            <div style={box}>Pending: 42</div>
            <div style={box}>Completed: 1102</div>
          </div>
        )}

        {page === "Donors" && <div style={box2}>Ali Ahmed - Lahore - Clothes<br />Sara Khan - Gujranwala - Medicines</div>}
        {page === "Needy Persons" && <div style={box2}>Fatima Bibi - Gujranwala - Medicines<br />Usman Ghani - Lahore - Clothes</div>}
        {page === "Donations" && <div style={box2}>Clothes | Medicines | Food | Money</div>}
        {page === "Matching" && <div style={box2}>Ali Ahmed (Clothes) ⇄ Usman Ghani (Clothes) - 98% Match<br /><button style={btn}>Confirm Matching</button></div>}
        {page === "Tracking" && <div style={box2}>Submitted → Verified → Approved → Matched → In Progress → Delivered → Completed</div>}
        {["Applications", "Verification", "Notifications", "Reports", "Settings"].includes(page) && <div style={box2}>{page} Page</div>}
      </div>
    </div>
  );
}

const box = { background: "white", padding: 20, borderRadius: 12, flex: 1 };
const box2 = { background: "white", padding: 20, borderRadius: 12, marginTop: 20, lineHeight: 2 };
const btn = { background: "#176B45", color: "white", border: "none", padding: "8px 15px", borderRadius: 8, marginTop: 10 };