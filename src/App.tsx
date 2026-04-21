function App() {
  return (
    <main className="min-h-screen bg-slate-50 text-gray900">
      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Hero */}
        <section className="mb-20 pt-8">
          <p className="text-sm font-medium text-blue-600 mb-3">
            Full-Stack Developer
          </p>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            Nolan Dela Rosa
          </h1>

          <p className="max-w-2xl text-lg text-gray-600 leading-8 mb-8">
            Hello there! I'm a Computer Science graduate from the University of
            Washington who enjoys building thoughtful, user-focused applications
            with modern web technologies. My work includes full-stack projects
            in React, Firebase, Node.js, and Java, with a growing focus on
            creating practical tools that solve real problems.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#"
              className="rounded-lg bg-gray-900 px-5 py-3 text-sm font-medium text-white hover:bg-gray-800 transition"
            >
              View Resume
            </a>

            <a
              href="#"
              className="rounded-lg border border-gray-300 px-5 py-3 text-sm font-medium text-gray-900 hover:bg-gray-100 transition"
            >
              GitHub
            </a>

            <a
              href="#"
              className="rounded-lg border border-gray-300 px-5 py-3 text-sm font-medium text-gray-900 hover:bg-gray-100 transition"
            >
              LinkedIn
            </a>
          </div>
        </section>

        {/* About */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">About</h2>
          <p className="text-gray-700">
            I'm a Computer Science grad from the University of Washington with
            experience in React, Firebase, and backend development. I enjoy
            building practical tools that solve real-world problems.
          </p>
        </section>

        {/* Projects */}
        <section className="mb-16">
          <h2 className="text-2xl font semi-bold mb-6">Projects</h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="border rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">CareerPath</h3>
              <p className="text-gray-600">
                A full-stack job tracking app designed to help users organize
                job applications, schedule interviews, and analyze resumes in
                one place.
              </p>

              <div className="mb-4">
                <p className="text-sm font-medium text-gray-900"> Tech Stack</p>
                <p className="text-sm text-gray-600">
                  React, Firebase, JavaScript, CSS
                </p>
              </div>

              <ul className="text-sm text-gray-700 space-y-2 mb-4">
                <li>
                  • Built features for job tracking, interview scheduling, and
                  resume analysis.
                </li>

                <li>
                  • Designed the UI and structured the app around a user-focused
                  workflow.
                </li>

                <li>
                  • Integrated Firebase for storing user and application data.
                </li>
              </ul>

              <div className="flex gap-4 text-sm font-medium">
                <a href="#" className="text-blue-600 hover:underline">
                  GitHub
                </a>
                <a href="#" className="text-blue-600 hover:underline">
                  Live Demo
                </a>
              </div>
            </div>

            <div className="border rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">
                Pisayian Data Cleaner
              </h3>
              <p className="text-gray-600">
                A hackathon-winning backend tool that helps clean, normalize,
                and process uploaded datasets more efficiently.
              </p>

              <div className="mb-4">
                <p className="text-sm font-medium text-gray-900">Tech Stack</p>
                <p className="text-sm text-gray-600">
                  Node.js, Express.js, Multer, PapaParse
                </p>
              </div>

              <ul className="text-sm text-gray-700 space-y-2 mb-4">
                <li>
                  • Helped build backend logic for file handling and data
                  processing.
                </li>
                <li>
                  • Worked on a team project developed during Kapwa Codefest
                  2025.
                </li>
                <li>
                  • Contributed to a tool intended to support real
                  organizational data workflows.
                </li>
              </ul>

              <div className="flex gap-4 text-sm font-medium">
                <a href="#" className="text-blue-600 hover:underline">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p className="text-gray-700">GitHub | LinkedIn | Email</p>
        </section>
      </div>
    </main>
  );
}

export default App;
