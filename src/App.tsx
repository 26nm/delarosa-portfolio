function App() {
  return (
    <main className="min-h-screen bg-slate-50 text-gray900">
      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Hero */}
        <section className="mb-20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            {/* LEFT SIDE (text) */}
            <div className="max-w-2xl">
              <p className="text-sm font-medium text-blue-600 mb-3">
                Full-Stack Developer
              </p>

              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
                Nolan Dela Rosa
              </h1>

              <p className="text-lg text-gray-600 leading-8 mb-8">
                Hello there! I'm a Computer Science graduate from the University
                of Washington who enjoys building thoughtful, user-focused
                applications with modern web technologies. My work includes
                full-stack projects in React, Firebase, Node.js, and Java, with
                a growing focus on creating practical tools that solve real
                problems.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="/NolanDelaRosa_SWE_Backend.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-gray-900 px-5 py-3 text-sm font-medium text-white hover:bg-gray-800 transition"
                >
                  View Resume
                </a>

                <a
                  href="https://github.com/26nm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-gray-300 px-5 py-3 text-sm font-medium text-gray-900 hover:bg-gray-100 transition"
                >
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/nolan-dela-rosa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-gray-300 px-5 py-3 text-sm font-medium text-gray-900 hover:bg-gray-100 transition"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            {/* RIGHT SIDE (photo) */}
            <div className="flex-shrink-0">
              <img
                src="/website_photo.jpg"
                alt="Nolan Dela Rosa"
                className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover shadow-md"
              />
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-16">
          <h2 className="text-2xl font semi-bold mb-6">Projects</h2>

          <div className="grid gap-6 md:grid-cols-2 items-start">
            <div className="border border-black-200 rounded-xl p-5 shadow-sm transition duration-200 ease-out hover:shadow-md hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-1">
                <img
                  src="/careerpath.svg"
                  alt="CareerPath"
                  className="h-10 w-10 object-contain"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-1">CareerPath</h3>
              <p className="text-lg text-gray-600 text-base leading-relaxed mb-3">
                A full-stack job tracking app designed to help users organize
                job applications, schedule interviews, and analyze resumes in
                one place.
              </p>

              <div className="flex gap-5 text-sm font-medium">
                <a
                  href="https://github.com/26nm/careerpath"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline hover:text-blue-700 transition"
                >
                  GitHub
                </a>
                <a
                  href="https://careerpath-cad61.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline hover:text-blue-700 transition"
                >
                  Live Demo
                </a>
              </div>
            </div>

            <div className="border border-black-200 rounded-xl p-5 shadow-sm transition duration-200 ease-out hover:shadow-md hover:-translate-y-1">
              {/* Logo */}
              <div className="flex items-center gap-3 mb-1">
                <img
                  src="/Pisayian.svg"
                  alt="Pisayian"
                  className="h-10 w-10 object-contain"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-1">
                Pisayian Data Cleaner
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-3">
                A hackathon-winning backend tool that helps clean, normalize,
                and process uploaded datasets more efficiently.
              </p>

              <div className="flex gap-5 text-sm font-medium">
                <a
                  href="https://github.com/ravello/pisayian-hackathon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  GitHub
                </a>

                <a
                  href="https://csv-umber.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="mt-24">
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>

          <p className="text-gray-700 mb-4">
            Feel free to reach out or connect with me!
          </p>

          <div className="flex items-center text-sm">
            <a
              href="mailto:ndelarosa@gmail.com"
              className="text-blue-600 hover:underline pr-3 border-r border-black-300"
            >
              Email
            </a>

            <a
              href="https://github.com/26nm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline px-3 border-r border-black-300"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/nolan-dela-rosa/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline px-3 border-r border-black-300"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
