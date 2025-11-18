import React from "react";
import GraphqlBadge from "./GraphqlBadge";

export default function Footer() {
  return (
    <footer
      style={{
        padding: "30px 20px",
        marginTop: "40px",
        textAlign: "center",
        borderTop: "1px solid #e5e5e5",
        color: "#555",
        fontSize: "14px",
      }}
    >
      <div style={{ marginBottom: "10px" }}>
        © {new Date().getFullYear()} BookStack — React Bookstore
      </div>

      <div style={{ opacity: 0.75 }}>
        <GraphqlBadge />
      </div>
    </footer>
  );
}
