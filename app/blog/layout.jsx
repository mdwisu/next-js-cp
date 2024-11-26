import React from "react";

export default function layout({ children }) {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: "1" }}>{children}</div>
    </div>
  );
}
