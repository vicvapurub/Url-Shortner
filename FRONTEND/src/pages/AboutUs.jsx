import React from "react";

const AboutUs = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 text-gray-800">
      {/* Header */}
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
        About Me
      </h1>

      {/* Intro Section */}
      <section className="mb-10 text-center">
        <p className="text-lg">
          Hey! I'm <strong className="text-blue-600">Savan Kansagara</strong> — a passionate
          <strong> Full Stack Web Developer</strong> specialized in the{" "}
          <strong>MERN Stack (MongoDB, Express, React, Node.js)</strong>. I love turning ideas into
          real-world solutions using clean, modern, and scalable code. 🚀
        </p>
      </section>

      {/* Skills & Expertise */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-blue-500">💡 What I Do</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>🔧 Build full-stack web applications using the MERN stack</li>
          <li>🔐 Work on cybersecurity & ethical hacking projects</li>
          <li>🤖 Integrate AI-based features in products</li>
          <li>☁️ Develop cloud-based platforms and REST APIs</li>
          <li>🎓 Mentor juniors and actively contribute to tech communities (GDSC, GirlScript, etc.)</li>
        </ul>
      </section>

      {/* Tech Stack */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-blue-500">🛠 Tech Stack</h2>
        <div className="flex flex-wrap gap-4">
          {[
            "HTML5",
            "CSS3",
            "JavaScript",
            "React",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Tailwind CSS",
            "Redux",
            "Git & GitHub",
            "REST APIs",
            "Linux",
            "TanStack",
            "Docker",
          ].map((tech) => (
            <span
              key={tech}
              className="bg-gray-100 border border-blue-200 text-blue-600 px-3 py-1 rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-blue-500">📂 Projects</h2>
        <div className="space-y-6">

          {/* Wanderlust */}
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="text-lg font-bold">Wanderlust – Airbnb Clone 🌍</h3>
            <p className="text-gray-600">
              A full-stack Airbnb-inspired booking platform with authentication (Google/GitHub),
              Mapbox for maps, Cloudinary for image uploads, and secure backend API.
            </p>
            <a
              href="https://wanderlust2-hhb8.onrender.com/listings"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline text-sm"
            >
              🔗 Live Project
            </a>
          </div>

          {/* Code Review AI Tool */}
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="text-lg font-bold">Code Review – AI-Powered Code Analysis Tool 🤖💡</h3>
            <p className="text-gray-600">
              An intelligent tool that analyzes source code using AI and gives detailed suggestions
              on performance, readability, and security. Great for devs who want automated feedback.
            </p>
            <a
              href="https://code-review-lime.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline text-sm"
            >
              🔗 Live Project
            </a>
          </div>

          {/* Placeholder */}
          <div className="border-l-4 border-gray-300 pl-4">
            <h3 className="text-lg font-semibold">More Projects Coming Soon...</h3>
            <p className="text-sm text-gray-500">
              You’ll be able to explore all my future open-source & freelance works here.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="text-center">
        <p className="text-md text-gray-600 mb-2">
          Want to collaborate, hire, or just say hi?
        </p>
        <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=important.savan@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="text-blue-600 font-medium hover:underline"
>
  📧 important.savan@gmail.com
</a>

      </section>
    </div>
  );
};
export default AboutUs;
