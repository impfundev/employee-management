"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const Sidebar = () => {
  return (
    <nav
      style={{ position: "fixed", top: 80, height: "100vh" }}
      className="uk-width-1-5 uk-background-default uk-box-shadow-medium"
    >
      <Menu1 />
      <h3 className="uk-margin-left">Setting</h3>
    </nav>
  );
};

const Menu1 = () => {
  const pathname = usePathname();
  return (
    <div className="uk-padding-small uk-flex uk-flex-column uk-width-1-1">
      <Link
        href="#"
        style={{
          color: pathname === `/dashboard` ? "white" : "black",
          width: "100%",
        }}
        className={`uk-button uk-border-pill uk-width-1-1 uk-margin-small-bottom ${
          pathname === `/dashboard` ? "uk-button-primary" : "uk-button-default"
        }`}
      >
        Data Karyawan
      </Link>
      <Link
        href="#"
        style={{
          color: pathname === `/position` ? "white" : "black",
          width: "100%",
        }}
        className={`uk-button uk-border-pill uk-width-1-1 uk-margin-small-bottom ${
          pathname === `/position` ? "uk-button-primary" : "uk-button-default"
        }`}
      >
        Posisi/Jabatan
      </Link>
      <Link
        href="#"
        style={{
          color: pathname === `/work-place` ? "white" : "black",
          width: "100%",
        }}
        className={`uk-button uk-border-pill uk-width-1-1 uk-margin-small-bottom ${
          pathname === `/work-place` ? "uk-button-primary" : "uk-button-default"
        }`}
      >
        Tempat Bekerja
      </Link>
      <Link
        href="#"
        style={{
          color: pathname === `/position` ? "white" : "black",
          width: "100%",
        }}
        className={`uk-button uk-border-pill uk-width-1-1 uk-margin-small-bottom ${
          pathname === `/position` ? "uk-button-primary" : "uk-button-default"
        }`}
      >
        RBAC
      </Link>
    </div>
  );
};
