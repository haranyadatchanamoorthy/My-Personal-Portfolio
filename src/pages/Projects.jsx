import React, { useState } from "react";

const projectsData = [
  {
    id: 1,
    title: "E-commerce Application",
    description:
      "A full-stack e-commerce platform where users can browse products, add items to cart, and complete secure purchases.",
    details: `
A full-stack e-commerce platform with authentication, dynamic search, cart, checkout, and payment gateway integration.
Features include:
• User login/signup (JWT)
• Product management for admin
• Secure payments via Stripe or Razorpay
• Order tracking and history
• Mobile-friendly design
    `,
    frontend: ["React", "Bootstrap"],
    backend: ["Django REST Framework", "Python"],
    database: ["PostgreSQL"],
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=60",
    link: "#",
  },
  {
    id: 2,
    title: "Realtime Chat Application",
    description:
      "A realtime chat app with one-on-one and group messaging using WebSockets and Django Channels.",
    details: `
Realtime chat system inspired by WhatsApp — supports instant messaging, typing indicators, and group chats.
Features include:
• Realtime updates with Django Channels
• Private and group messaging
• Online/offline presence
• Chat history and media storage
• Responsive modern UI with Tailwind CSS
    `,
    frontend: ["React", "Tailwind CSS"],
    backend: ["Django Channels", "WebSocket", "Python"],
    database: ["SQLite"],
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=60",
    link: "#",
  },
];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const allTechs = Array.from(
    new Set(
      projectsData.flatMap((p) => [
        ...p.frontend,
        ...p.backend,
        ...p.database,
      ])
    )
  );

  const filteredProjects =
    filter === "All"
      ? projectsData
      : projectsData.filter(
          (p) =>
            p.frontend.includes(filter) ||
            p.backend.includes(filter) ||
            p.database.includes(filter)
        );

  return (
    <section className="p-6 bg-gray-50 rounded-2xl shadow-sm relative">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-semibold">Selected Projects</h3>
        <div className="flex items-center gap-3">
          <span className="text-sm text-slate-500">Filter:</span>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="text-sm border rounded-md p-2"
          >
            <option>All</option>
            {allTechs.map((tech) => (
              <option key={tech}>{tech}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((p) => (
          <article
            key={p.id}
            className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition"
          >
            <div className="h-40 sm:h-44 overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover transform hover:scale-105 transition"
              />
            </div>

            <div className="p-4">
              <h4 className="font-semibold text-lg">{p.title}</h4>
              <p className="text-sm text-slate-600 mt-2">{p.description}</p>

              <div className="mt-3 space-y-1">
                <p className="text-xs">
                  <span className="font-semibold text-indigo-600">Frontend:</span>{" "}
                  {p.frontend.join(", ")}
                </p>
                <p className="text-xs">
                  <span className="font-semibold text-indigo-600">Backend:</span>{" "}
                  {p.backend.join(", ")}
                </p>
                <p className="text-xs">
                  <span className="font-semibold text-indigo-600">Database:</span>{" "}
                  {p.database.join(", ")}
                </p>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(p)}
                  className="text-sm text-indigo-600 hover:underline"
                >
                  View
                </button>
                <a
                  href={p.link}
                  className="text-sm border px-3 py-1 rounded-lg hover:bg-indigo-50"
                >
                  Demo
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Modal for Project Details */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white w-[90%] md:w-[600px] rounded-2xl shadow-lg p-6 relative">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
            >
              ✕
            </button>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-48 object-cover rounded-lg"
            />
            <h3 className="text-xl font-semibold mt-4">{selectedProject.title}</h3>
            <p className="mt-2 text-slate-600">{selectedProject.description}</p>
            <pre className="mt-3 text-sm text-slate-700 whitespace-pre-wrap">
              {selectedProject.details}
            </pre>

            <div className="mt-4 space-y-1 text-sm">
              <p>
                <span className="font-semibold text-indigo-600">Frontend:</span>{" "}
                {selectedProject.frontend.join(", ")}
              </p>
              <p>
                <span className="font-semibold text-indigo-600">Backend:</span>{" "}
                {selectedProject.backend.join(", ")}
              </p>
              <p>
                <span className="font-semibold text-indigo-600">Database:</span>{" "}
                {selectedProject.database.join(", ")}
              </p>
            </div>

            <div className="mt-6 text-right">
              <a
                href={selectedProject.link}
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 text-sm"
              >
                Visit Demo
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
