import React from "react";

export default function Skills() {
  const skills = [
    "JavaScript",
    "React",
    "Python",
    "Django",
    "PostgreSQL",
    "Docker",
    "Git",
    "HTML / CSS",
    "Node.js",
  ];

  return (
    <section className="bg-white p-6 rounded-2xl shadow-sm">
      <h3 className="text-xl font-semibold">Skills</h3>
      <p className="mt-3 text-slate-600">Tools & technologies I work with regularly:</p>

      <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
        {skills.map((skill) => (
          <div
            key={skill}
            className="p-3 border rounded-lg text-center hover:bg-indigo-50 transition"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
