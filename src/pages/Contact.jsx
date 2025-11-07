import React, { useState } from "react";

export default function Contact() {
  const [contact, setContact] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Contact form submitted:", contact);
    setSent(true);
    setContact({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  }

  return (
    <section className="grid md:grid-cols-2 gap-6 items-start">
      {/* Contact Form */}
      <div className="bg-white p-6 rounded-2xl shadow-sm">
        <h3 className="text-xl font-semibold">Get in touch</h3>
        <p className="mt-2 text-slate-600">
          I&apos;m open to freelance and full-time opportunities. Leave a
          message and I&apos;ll reply as soon as I can.
        </p>

        <form className="mt-4 space-y-3" onSubmit={handleSubmit}>
          <div>
            <label className="text-sm">Name</label>
            <input
              required
              value={contact.name}
              onChange={(e) =>
                setContact({ ...contact, name: e.target.value })
              }
              className="w-full mt-1 p-2 border rounded-md"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="text-sm">Email</label>
            <input
              required
              type="email"
              value={contact.email}
              onChange={(e) =>
                setContact({ ...contact, email: e.target.value })
              }
              className="w-full mt-1 p-2 border rounded-md"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="text-sm">Message</label>
            <textarea
              required
              value={contact.message}
              onChange={(e) =>
                setContact({ ...contact, message: e.target.value })
              }
              rows={5}
              className="w-full mt-1 p-2 border rounded-md"
              placeholder="Write your message here..."
            />
          </div>

          <div>
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              Send message
            </button>
            {sent && (
              <span className="ml-3 text-sm text-green-600">
                Message sent (demo)
              </span>
            )}
          </div>
        </form>
      </div>

      {/* Contact Info Card */}
      <aside className="bg-white p-6 rounded-2xl shadow-sm">
        <h4 className="font-medium">Contact info</h4>
        <p className="text-sm text-slate-600 mt-2">
          Email:{" "}
          <a href="mailto:you@example.com" className="text-indigo-600">
            haranya05@gmail.com
          </a>
        </p>
        <p className="text-sm text-slate-600 mt-2">Location: 63 Main Road,Radhapuram,Villupuram,Tamil Nadu, India</p>

        <div className="mt-4">
          <h5 className="text-sm font-medium">Availability</h5>
          <p className="text-sm text-slate-600 mt-1">
            Open to freelance & remote roles
          </p>
        </div>

        <div className="mt-6">
          <h5 className="text-sm font-medium">Resume</h5>
          <a
            href="#"
            className="inline-block mt-2 text-sm border px-3 py-1 rounded-lg hover:bg-indigo-50"
          >
            Download CV
          </a>
        </div>
      </aside>
    </section>
  );
}
