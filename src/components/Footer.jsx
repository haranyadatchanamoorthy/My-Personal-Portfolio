import React from "react";

export default function Footer() {
  return (
    <footer className="border-t pt-6 pb-12 text-center text-sm text-slate-500">
      © {new Date().getFullYear()} Haranya D. Built with React + Tailwind.
    </footer>
  );
}
