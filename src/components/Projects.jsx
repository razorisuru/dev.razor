import { useState } from "react";
import { allProjects } from "../data/projects";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredProject, setHoveredProject] = useState(null);

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Development" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "hosting", label: "Hosting & Maintenance" },
    { id: "consultation", label: "Tech Consultation" },
  ];

  const gradients = [
    "from-steel-azure-500 to-french-blue-500",
    "from-school-bus-yellow-500 to-gold-500",
    "from-french-blue-400 to-steel-azure-400",
    "from-gold-400 to-school-bus-yellow-400",
    "from-imperial-blue-400 to-french-blue-400",
    "from-steel-azure-400 to-imperial-blue-400",
  ];

  const projects = allProjects.map((project, index) => ({
    id: index + 1,
    title: project.title,
    description: project.description,
    image: project.image,
    gradient: gradients[index % gradients.length],
    category: project.category,
    technologies: project.tags,
    link: project.link,
    source: project.source,
    featured: index < 3,
  }));

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-imperial-blue-500 via-french-blue-500/20 to-imperial-blue-500"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-steel-azure-500/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-school-bus-yellow-400/5 rounded-full blur-[100px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 glass-light rounded-full text-school-bus-yellow-400 text-sm font-medium mb-6">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            A selection of my recent work across different industries and
            platforms
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? "bg-gradient-to-r from-school-bus-yellow-400 to-gold-400 text-imperial-blue-500 shadow-lg shadow-school-bus-yellow-400/20"
                  : "glass-light text-white/70 hover:text-white hover:bg-white/10"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group glass rounded-3xl overflow-hidden transition-all duration-500 card-glow"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />

                {/* Overlay on Hover */}
                <div
                  className={`absolute inset-0 bg-imperial-blue-500/90 flex items-center justify-center gap-4 transition-all duration-300 ${hoveredProject === project.id ? "opacity-100" : "opacity-0"}`}
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-school-bus-yellow-400 flex items-center justify-center text-imperial-blue-500 hover:scale-110 transition-transform"
                    aria-label="View Project"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                  <a
                    href={project.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                    aria-label="View Source"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>

                {/* Featured Badge */}
                {project.featured && (
                  <span className="absolute top-4 right-4 px-3 py-1.5 bg-school-bus-yellow-400 text-imperial-blue-500 text-xs font-semibold rounded-full">
                    Featured
                  </span>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-school-bus-yellow-400 transition-colors">
                    {project.title}
                  </h3>
                </div>

                <p className="text-white/60 text-sm mb-5 line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 text-xs font-medium bg-imperial-blue-400/60 text-steel-azure-100 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1.5 text-xs font-medium bg-imperial-blue-400/60 text-steel-azure-100 rounded-full">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-14 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 glass-light text-white rounded-full font-semibold hover:bg-school-bus-yellow-400/10 hover:border-school-bus-yellow-400/30 transition-all duration-300 border border-white/10"
          >
            View All Projects
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
