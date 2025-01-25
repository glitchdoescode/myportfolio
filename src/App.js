import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Terminal, Code, Bot, Instagram } from 'lucide-react';

const Portfolio = () => {
  const workExperience = [
    {
      company: "SLOTHPAYS",
      role: "Founding Engineer Intern",
      period: "Oct 2024 - Present",
      location: "Remote, Bengaluru, Karnataka, India",
      details: [
        {
          description: "Architected and implemented an AI-Driven interview scheduling automation system reducing communication and meeting scheduling time by 85--90%.",
          demoLink: "https://drive.google.com/file/d/11qH0BIFL43zMeJg_H0m-cZipJ6jvhl_G/view"
        }
      ]
    },
    {
      company: "SHUNYA.EK",
      role: "Software Development Engineer Intern",
      period: "May 2024 - Sept 2024",
      location: "Remote, Goa, India",
      details: [
        {
          description: "Developed a command-line workflow automation tool using Bash, Python, and JavaScript, streamlining engineering operations and reducing manual tasks by 85--95%."
        },
        {
          description: "Deployed a Raspberry Pi-based web server using Nginx and Ngrok for secure remote SSH tunneling, enhancing system accessibility."
        },
        {
          description: "Engineered a disk imaging utility in Bash for automating USB drive flashing with custom configurations, improving deployment efficiency.",
          demoLink: "https://github.com/glitchdoescode/imager"
        },
        {
          description: "Implemented a proof-of-concept for video segmentation and motion tracking using Python and Mediapipe, achieving real-time performance.",
          demoLink: "https://drive.google.com/drive/folders/1eyVZ6idPk0TW2u5xbQdPR1KRfB3VYy-O?usp=sharing"
        },
        {
          description: "Fine-tuned GPT-3.5-turbo for custom NLP applications using JSONL datasets and OpenAI APIs, enhancing conversational capabilities."
        },
        {
          description: "Implemented CI/CD pipelines using Git and Terraform for automated model deployment, ensuring efficient and reliable updates."
        }
      ]
    }
  ];

  const projects = [
    {
      title: "Real-Time Sign Language Detection",
      description: "Engineered a real-time sign language recognition system utilizing TensorFlow and OpenCV, achieving 95% accuracy in complex gesture detection.",
      tech: ["Python", "TensorFlow", "OpenCV", "Mediapipe"],
      link: "https://github.com/glitchdoescode/Real-time-sign-language-detection-Complex-gesture-navigation"
    },
    {
      title: "TCP Client-Server Implementation",
      description: "Designed and implemented a robust TCP client-server model using C and socket programming based on Beej's Guide to Network Programming, ensuring reliable data transmission and error handling.",
      tech: ["C", "Socket Programming"],
      link: "https://github.com/glitchdoescode/Networking"
    },
    {
      title: "9-Axis Spatial Orientation Tracker",
      description: "Developed a real-time phone orientation tracking system using IMU sensors (accelerometer, gyroscope) and magnetometer data.",
      tech: ["Python", "WebSocket", "ADB", "Sensor Fusion"],
      link: "https://github.com/glitchdoescode/"
    }
  ];

  const skills = [
    { category: "Languages", items: "Python, C, C++, Bash/Shell Scripting, JavaScript, Rust" },
    { category: "Frameworks & Libraries", items: "Flask, Node.js, TensorFlow, PyTorch, OpenCV, Mediapipe, LangChain, LangGraph" },
    { category: "AI/ML", items: "Machine Learning, Deep Learning, Natural Language Processing (NLP), Computer Vision, Model Fine-tuning" },
    { category: "Systems & Embedded", items: "Linux/Unix, Raspberry Pi, Systemd, Socket Programming, Network Protocols (TCP/IP)" },
    { category: "Cloud & DevOps", items: "Google Cloud Platform (GCP), Terraform, CI/CD Pipelines, Docker, Kubernetes, Cloud Functions" },
    { category: "Tools & Utilities", items: "Git, tcpdump, Wireshark, Nginx, Ngrok, Neovim, Android Debug Bridge (ADB)" },
    { category: "Databases", items: "PostgreSQL, MongoDB, SQL, Supabase" },
    { category: "Prompt Engineering", items: "Large Language Models (LLMs), OpenAI API, Natural Language Understanding" }
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <header className="fixed top-0 w-full bg-black/50 backdrop-blur-xl border-b border-white/10 z-50">
        <nav className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold">DKS</span>
            <div className="flex space-x-8">
              <a href="#about" className="text-sm text-gray-400 hover:text-white transition-colors">About</a>
              <a href="#experience" className="text-sm text-gray-400 hover:text-white transition-colors">Experience</a>
              <a href="#projects" className="text-sm text-gray-400 hover:text-white transition-colors">Projects</a>
              <a href="#skills" className="text-sm text-gray-400 hover:text-white transition-colors">Skills</a>
              <a href="#contact" className="text-sm text-gray-400 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </nav>
      </header>

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
              A dedicated software craftsman specializing in systems programming, AI development, and scalable architectures. Experienced in building robust solutions across the full stack with a focus on performance and reliability.
            </p>
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="p-6 bg-white/5 rounded-2xl backdrop-blur-xl">
                <h3 className="text-xl font-semibold mb-2">{skill.category}</h3>
                <p className="text-gray-400">{skill.items}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
                    <li key={i} className="text-gray-300 text-sm">
                      {detail.description}
                      {detail.demoLink && (
                        <a href={detail.demoLink} target="_blank" rel="noopener noreferrer" className="text-blue-400 ml-2">(Demo)</a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

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

      <section id="contact" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Contact Information</h2>
          <div className="text-gray-400 space-y-4">
            <p>Email: <a href="mailto:deepakkrsoni16@gmail.com" className="text-white">deepakkrsoni16@gmail.com</a></p>
            <p>Phone: <a href="tel:+919179687775" className="text-white">+91 9179687775</a></p>
            <p>GitHub: <a href="https://github.com/glitchdoescode" target="_blank" rel="noopener noreferrer" className="text-white">github.com/glitchdoescode</a></p>
            <p>LinkedIn: <a href="https://linkedin.com/in/glitchxx0" target="_blank" rel="noopener noreferrer" className="text-white">linkedin.com/in/glitchxx0</a></p>
            <p>Instagram: <a href="https://instagram.com/deepak_krsoni" target="_blank" rel="noopener noreferrer" className="text-white">instagram.com/deepak_krsoni</a></p>
          </div>
        </div>
      </section>

      <footer className="py-8 text-center text-gray-400 border-t border-white/10">
        <p className="text-sm">
          © {new Date().getFullYear()} Deepak Kumar Soni. View my code on{' '}
          <a href="https://github.com/glitchdoescode" className="text-white hover:text-gray-300">GitHub</a>
        </p>
      </footer>
    </div>
  );
};

export default Portfolio;
