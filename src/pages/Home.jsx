import React from "react";

export default function Home() {
  return (
    <section className="grid md:grid-cols-2 gap-8 items-center">
      <div>
        <p className="text-sm uppercase tracking-wider text-indigo-600">Hi, I&apos;m</p>
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mt-2">
          Haranya — Software Engineer
        </h2>
        <p className="mt-4 text-slate-600">
          I build web applications with a focus on clean UX, reliable backend systems, and realtime features.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="/projects" className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
            See my work
          </a>
          <a href="/contact" className="px-4 py-2 border border-slate-200 rounded-lg hover:bg-slate-50">
            Contact me
          </a>
        </div>
      </div>
      <div className="flex justify-center md:justify-end">
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1531123414780-f0b5f0c9f9c3?auto=format&fit=crop&w=800&q=60"
            alt="avatar"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
