import React from "react";

export default function About() {
  const education = [
    {
      degree: "B.E(computer science and Enginerring)",
      institution: "E.S.College of Engineering And Technology",
      year: "2022 - 2026",
    },
    {
      degree: "Higher School",
      institution: "Government.Model.Girls.Higher.Secondary.School",
      year: "2020 - 2022",
    },
  ];

  const interests = [
    "Full stack Development",
    "Python Developer",
    "Data Science",
    "Web Development",
    "AI & Machine Learning",
    "Open Source",
    "UI/UX Design",
  ];

  return (
    <section className="bg-white p-6 rounded-2xl shadow-sm">
      <h3 className="text-xl font-semibold">About Me</h3>

      <p className="mt-4 text-slate-600 leading-relaxed">
          I’m a dedicated Full-Stack Developer and Python enthusiast who loves creating
  clean, functional, and visually engaging web applications. My work spans both
  frontend and backend — from building responsive interfaces with React and Bootstrap
  to developing robust server-side logic with Django and Python. I enjoy solving real-world
  problems through code, focusing on performance, scalability, and elegant design.
  Every project I build is a new opportunity to learn, innovate, and deliver meaningful
  digital experiences.
      </p>

      {/* Education Section */}
      <div className="mt-8">
        <h4 className="text-lg font-semibold mb-3 text-indigo-600">Education</h4>
        <ul className="space-y-3">
          {education.map((edu) => (
            <li key={edu.degree} className="border-l-4 border-indigo-500 pl-4">
              <p className="font-medium">{edu.degree}</p>
              <p className="text-slate-600">{edu.institution}</p>
              <p className="text-sm text-slate-500">{edu.year}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Interests Section */}
      <div className="mt-8">
        <h4 className="text-lg font-semibold mb-3 text-indigo-600">Interests</h4>
        <div className="flex flex-wrap gap-3">
          {interests.map((interest) => (
            <span
              key={interest}
              className="px-4 py-2 bg-indigo-50 text-indigo-600 rounded-full text-sm font-medium"
            >
              {interest}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
