import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Terminal, Code, Bot } from 'lucide-react';

const Portfolio = () => {
  const workExperience = [
    {
      company: "SLOTHPAYS",
      role: "Founding Engineer Intern",
      period: "Oct 2024 - Present",
      location: "Bengaluru, Karnataka, India (Remote)",
      details: [
        "Architected and implemented an AI-driven interview scheduling automation system using LangChain, LangGraph, Python, and Flask, reducing scheduling time by 30%.",
        "Enhanced natural language understanding capabilities by fine-tuning pre-trained NLP models for scheduling intents, increasing intent recognition accuracy by 15%.",
        "Developed robust data pipelines for cleaning, collecting, and processing interview-related datasets, ensuring high-quality data for model training and analysis."
      ]
    },
    {
      company: "SHUNYA.EK",
      role: "Software Development Engineer Intern",
      period: "May 2024 - Sept 2024",
      location: "Goa, India (Remote)",
      details: [
        "Developed a command-line workflow automation tool using Bash, Python, and JavaScript, streamlining engineering operations and reducing manual tasks by 40%.",
        "Deployed a Raspberry Pi-based web server using Nginx and Ngrok for secure remote SSH tunneling, enhancing system accessibility.",
        "Engineered a disk imaging utility in Bash for automating USB drive flashing with custom configurations, improving deployment efficiency.",
        "Implemented CI/CD pipelines using Git and Terraform for automated model deployment, ensuring efficient and reliable updates."
      ]
    }
  ];

  const projects = [
    {
      title: "Kontena: Linux Containers",
      description: "Developing a Linux container from scratch, focusing on container runtime, namespace isolation, cgroups, and network virtualization to enhance understanding of containerization and OS-level virtualization.",
      tech: ["C", "Linux", "Security"],
      link: "https://gitlab.com/glitchxxx0/kontena"
    },
    {
      title: "Real-Time Sign Language Detection",
      description: "Engineered a real-time sign language recognition system utilizing TensorFlow and OpenCV, achieving 95% accuracy in complex gesture detection.",
      tech: ["Python", "TensorFlow", "OpenCV", "Mediapipe"],
      link: "https://github.com/glitchxxx0/Real-time-sign-language-detection-Complex-gesture-navigation"
    },
    {
      title: "TCP Client-Server Implementation",
      description: "Designed and implemented a robust TCP client-server model based on Beej's Guide to Network Programming, optimized for high-frequency trading requirements.",
      tech: ["C", "Socket Programming"],
      link: "https://github.com/glitchxxx0/Networking"
    }
  ];

  const skills = [
    {
      category: "Systems & DevOps",
      items: "Linux/Unix, Docker, Kubernetes (GCP), Terraform, CI/CD, Cloud Operations",
      icon: <Terminal className="w-8 h-8 mb-4 text-blue-400" />
    },
    {
      category: "Languages & Frameworks",
      items: "Python, C, C++, Rust, JavaScript, Flask, Node.js",
      icon: <Code className="w-8 h-8 mb-4 text-purple-400" />
    },
    {
      category: "AI & Machine Learning",
      items: "TensorFlow, PyTorch, LangChain, Mediapipe, NLP, LLMs",
      icon: <Bot className="w-8 h-8 mb-4 text-green-400" />
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-black/50 backdrop-blur-xl border-b border-white/10 z-50">
        <nav className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold">DKS</span>
            <div className="flex space-x-8">
              <a href="#about" className="text-sm text-gray-400 hover:text-white transition-colors">About</a>
              <a href="#experience" className="text-sm text-gray-400 hover:text-white transition-colors">Experience</a>
              <a href="#projects" className="text-sm text-gray-400 hover:text-white transition-colors">Projects</a>
              <a href="#skills" className="text-sm text-gray-400 hover:text-white transition-colors">Skills</a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-8">
            <div className="inline-block px-4 py-1 bg-white/5 rounded-full text-sm">
              Software Engineer
            </div>
            <h1 className="text-6xl font-bold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
              Deepak Kumar Soni
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl">
              A dedicated software engineer specializing in systems programming, AI development, and scalable architectures. 
              Experienced in building robust solutions across the full stack with a focus on performance and reliability.
            </p>
            <div className="flex space-x-6">
              <a href="https://github.com/glitchxxx0" 
                 className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
              <a href="https://linkedin.com/in/glitchxx0" 
                 className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
              <a href="mailto:deepakkrsoni16@gmail.com" 
                 className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="p-6 bg-white/5 rounded-2xl backdrop-blur-xl">
                {skill.icon}
                <h3 className="text-xl font-semibold mb-2">{skill.category}</h3>
                <p className="text-gray-400">{skill.items}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Work Experience</h2>
          <div className="space-y-8">
            {workExperience.map((work, index) => (
              <div key={index} className="p-6 bg-white/5 rounded-2xl backdrop-blur-xl">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{work.company}</h3>
                    <p className="text-gray-400">{work.role}</p>
                    <p className="text-gray-500 text-sm">{work.location}</p>
                  </div>
                  <span className="text-gray-400">{work.period}</span>
                </div>
                <ul className="space-y-2">
                  {work.details.map((detail, i) => (
                    <li key={i} className="text-gray-300 text-sm">{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="p-6 bg-white/5 rounded-2xl backdrop-blur-xl group hover:bg-white/10 transition-all">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-white/5 rounded-full text-sm text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>
                <a href={project.link} 
                   className="inline-flex items-center text-gray-400 hover:text-white transition-colors">
                  View Project <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400 border-t border-white/10">
        <p className="text-sm">
          © {new Date().getFullYear()} Deepak Kumar Soni. View my code on{' '}
          <a href="https://github.com/glitchxxx0" className="text-white hover:text-gray-300">GitHub</a>
        </p>
      </footer>
    </div>
  );
};

export default Portfolio;