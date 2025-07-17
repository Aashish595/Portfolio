import { Download, Eye, FileText } from "lucide-react";

export default function ResumeSection() {
  return (
    <section id="resume" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Resume</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Download or view my resume to learn more about my background and skills.
          </p>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Resume Preview Card */}
          <div className="bg-white/70 dark:bg-gray-800/70 rounded-xl shadow-lg overflow-hidden backdrop-blur-sm">
            <div className="p-5 border-b flex items-center gap-2">
              <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Resume Preview</h3>
            </div>
            <div className="p-6 space-y-6 bg-white dark:bg-gray-900 border rounded-b-xl shadow-inner min-h-[400px]">
              <div className="text-center border-b pb-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Aashish Maurya</h3>
                <p className="text-gray-600 dark:text-gray-400">Full Stack Developer</p>
                <p className="text-sm text-gray-500">aashishmaurya959@gmail.com | +91 9919454692</p>
              </div>

              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Experience</h4>
                  <div>
                    <p className="font-medium">MERN Stack Developer @ Glitch Studio (May–Jul 2025)</p>
                    <p className="text-gray-500 dark:text-gray-400">Led development of scalable web apps...</p>
                  </div>
                  <div>
                    <p className="font-medium">Internship @ Glitch Studio (May–Jul 2025)</p>
                    <p className="text-gray-500 dark:text-gray-400">Maintained multiple client projects...</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Education</h4>
                  <p className="font-medium">B.Tech – CSE (AI-ML), Galgotias University (2021–2025)</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Skills</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    JavaScript, TypeScript, React, Next.js, Node.js, MongoDB...
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Actions + Stats */}
          <div className="space-y-8">
            {/* Download / View Options */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl shadow-lg">
              <div className="p-5 border-b">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Get My Resume</h3>
              </div>
              <div className="p-6 space-y-4">
                <a
                  href="/resume.pdf"
                  download
                  className="w-full flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-md shadow hover:scale-105 transition"
                >
                  <Download className="mr-2 h-5 w-5" /> Download PDF
                </a>
                <a
                  href="https://drive.google.com/view_resume_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center border dark:border-gray-600 text-gray-800 dark:text-gray-200 px-6 py-3 rounded-md shadow hover:bg-gray-100 dark:hover:bg-gray-800 transition hover:scale-105"
                >
                  <Eye className="mr-2 h-5 w-5" /> View Online
                </a>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 rounded-xl shadow-lg">
              <div className="p-5 border-b">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Quick Stats</h3>
              </div>
              <div className="p-6 grid grid-cols-2 gap-4 text-center">
                {[
                  { label: "Years Experience", value: "0+" },
                  { label: "Projects Completed", value: "15+" },
                  { label: "Technologies", value: "15+" },
                  { label: "Client Satisfaction", value: "100%" },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">{value}</div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
