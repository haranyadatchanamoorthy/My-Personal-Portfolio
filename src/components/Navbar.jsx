import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="max-w-6xl mx-auto p-6 flex items-center justify-between">
      <h1 className="text-2xl font-bold tracking-tight">
        Haranya D<span className="text-indigo-600">.</span>
      </h1>
      <nav className="space-x-4 text-sm">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/projects" className="hover:underline">Projects</Link>
        <Link to="/skills" className="hover:underline">Skills</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
      </nav>
    </header>
  );
}
