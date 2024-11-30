import React from "react";

export default function layout({ children }) {
  return (
    <div className="flex">
      <div className="w-1/4">Sidebar</div>
      <div className="">{children}</div>
    </div>
  );
}
