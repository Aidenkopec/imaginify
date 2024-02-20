import SideBar from "@/components/shared/SideBar";
import React from "react";
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="root">
      <SideBar />
      <div className="root">
        <div className="wrapper">{children}</div>
      </div>
    </main>
  );
};

export default Layout;
