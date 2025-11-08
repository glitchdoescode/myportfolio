import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Terminal, Code, Bot, Instagram, Monitor, Cpu, Twitter } from 'lucide-react';
import avatarImage from './avatar.jpeg';

const Portfolio = () => {
  const workExperience = [
    {
      company: "FIKA ARTIFICIAL INTELLIGENCE RESEARCH",
      role: "Founding Engineer",
      period: "Oct 2024 - Present",
      location: "Bengaluru, Karnataka, India",
      website: "https://powersmy.biz/",
      details: [
        {
          description: "Contributed 676+ commits across the organization in 2025, architecting a serverless, event-driven workflow automation platform leveraging Google Cloud Pub/Sub, FastAPI microservices, and LangGraph for multi-agent orchestration, enabling PRD-to-chatbot deployment in under 10 minutes."
        },
        {
          description: "Designed and implemented multi-tenant architecture with PostgreSQL Row-Level Security, Qdrant vector database namespace isolation, and Redis-based configuration hot-reload achieving zero-downtime updates."
        },
        {
          description: "Built AI-powered conversational agents using Google Gemini with LangChain for natural language configuration updates, implementing streaming SSE responses and comprehensive test coverage (71% overall, 92% on core business logic)."
        },
        {
          description: "Developed production-grade database schemas using Pydantic V2 validation, Alembic migrations with RLS policies, and full-text search indexes, ensuring enterprise-grade data integrity and security."
        },
        {
          description: "Acted as a key technical point of contact in client and advisory meetings, confidently communicating complex architectural concepts and project roadmaps."
        }
      ]
    },
    {
      company: "SHUNYA.EK",
      role: "Software Development Engineer Intern",
      period: "May 2024 - Sept 2024",
      location: "Remote, Goa, India",
      certificateLink: "https://drive.google.com/file/d/1F9niCTFMyG4IYy_Mg0WNfUFjl01VvuUS/view?usp=sharing",
      details: [
        {
          description: "Spearheaded the creation of a command-line workflow automation tool using Bash, Python, and JavaScript, eliminating 85-95% of manual tasks and boosting engineering team productivity."
        },
        {
          description: "Deployed a Raspberry Pi-based web server using Nginx and Ngrok to enable secure remote SSH tunneling, significantly improving system accessibility and reliability."
        },
        {
          description: "Designed and implemented an automated disk imaging utility in Bash for USB drive flashing with custom configurations, increasing deployment speed and reducing error rates.",
          demoLink: "https://github.com/glitchdoescode/imager"
        },
        {
          description: "Pioneered a real-time video segmentation and motion tracking proof-of-concept using Python and Mediapipe, enabling advanced analytics and visualizations.",
          demoLink: "https://drive.google.com/drive/folders/1eyVZ6idPk0TW2u5xbQdPR1KRfB3VYy-O?usp=sharing"
        },
        {
          description: "Fine-tuned GPT-3.5-turbo with JSONL datasets and OpenAI APIs, elevating the platform's conversational capabilities for specialized NLP tasks."
        },
        {
          description: "Implemented robust CI/CD pipelines using Git and Terraform for automated model deployments, reducing downtime and accelerating updates."
        }
      ]
    }
  ];

  const volunteerExperience = [
    {
      company: "Red Hen Labs",
      role: "Volunteer Researcher/Contributor",
      period: "February 2025 - Present",
      location: "Distributed / Online",
      details: [
        {
          description: "Co-authored and submitted a research paper, \"Frame Blending Is Essential For Advancing Creative Generative AI,\" to the NeurIPS 2025 Position Paper Track in collaboration with Prof. Mark Turner.",
          demoLink: "https://drive.google.com/file/d/12EovyR6VogkiF08TVnS8uvfzkz10k3Ry/view?usp=sharing"
        },
        {
          description: "Developed TalentScout, a proof-of-concept multi-agent system using LangGraph and RAG to intelligently match candidates with internship opportunities based on deep contextual understanding."
        },
        {
          description: "Initiated and implemented architectural improvements to the Frame Blender framework, enhancing multi-modal data processing performance and scalability for a distributed research team."
        }
      ]
    },
    {
      company: "IIT Hyderabad",
      role: "Volunteer Researcher/Contributor",
      period: "Jan 2025 - Present",
      location: "Hyderabad, India",
      details: [
        {
          description: "Prototyping a warzone-focused object detection pipeline with Detectron2 and a ConvNeXt backbone, targeting challenges such as camouflage, partial occlusion, and changing environmental conditions.",
          demoLink: "https://colab.research.google.com/drive/1oCPqvHvaEQuJhBSTo_yHAJ9YCmgxzlvC?usp=sharing"
        },
        {
          description: "Experimenting with advanced data augmentation (dust, smoke, low-light) to improve model generalization in early-stage R&D, currently limited by a small dataset of a few hundred images."
        },
        {
          description: "Investigating methods for scaling to thousands of images and optimizing real-time inference performance, contributing to ongoing research and development efforts."
        }
      ]
    }
  ];

  const projects = [
    {
      title: "Krishna Diagnostics AI Assistant",
      description: "Designed AI business assistant using LangGraph 2-node pattern for multi-channel integration (WhatsApp, Instagram, Web, CRMs). Implemented 6 specialized workflows with Razorpay payment integration and MCP protocol. Built with enterprise-grade patterns: Langfuse observability, structured JSON logging, circuit breaker resilience, PostgreSQL state management, and Redis caching for production deployment.",
      tech: ["LangGraph", "FastAPI", "PostgreSQL", "Gemini"],
      link: "https://github.com/pupiltree/krsna-d",
      demoLink: "http://104.197.233.188:8000/static/demo-chat.html"
    },
    {
      title: "Private-AI Wellness Content Platform",
      description: "Built RAG pipeline with ChromaDB vector database and Gemini embeddings for IP-protected wellness content generation with semantic search capabilities. Integrated Google Drive API for automated document ingestion with chunked processing and persistent storage. Implemented production-grade security with environment-based credential management, Pydantic V2 validation, and Alembic database migrations.",
      tech: ["FastAPI", "LangChain", "ChromaDB", "Gemini"],
      link: "https://github.com/glitchdoescode/private-ai",
      demoLink: "http://104.197.233.188:8002/"
    },
    {
      title: "Cloud-Native E-Commerce Platform (Microservices)",
      description: "Deployed 11-microservice e-commerce application on Google Kubernetes Engine with Grafana/Prometheus monitoring for metrics and Loki for centralized logging. Implemented PostgreSQL persistence layer for checkout service, modifying order processing to store transaction data with proper schema design and gRPC integration. Configured traffic simulation with Locust and visualized application/Kubernetes metrics through Grafana dashboards.",
      tech: ["Kubernetes", "GKE", "Grafana", "Go"],
      link: "https://github.com/glitchdoescode/microservices-demo"
    },
    {
      title: "Real-Time Sign Language Detection",
      description: "Spearheaded the design and implementation of a real-time sign language recognition system utilizing TensorFlow and OpenCV, achieving 95% accuracy in complex gesture detection. Integrated Mediapipe for efficient hand tracking and constructed robust data preprocessing pipelines to augment training data.",
      tech: ["Python", "TensorFlow", "OpenCV", "Mediapipe"],
      link: "https://github.com/glitchxxx0/Real-time-sign-language-detection-Complex-gesture-navigation"
    }
  ];

  const achievements = [
    {
      title: "NeurIPS 2025 Research Paper",
      description: "Co-authored and submitted \"Frame Blending Is Essential For Advancing Creative Generative AI\" to NeurIPS 2025 Position Paper Track with Prof. Mark Turner",
      link: "https://drive.google.com/file/d/12EovyR6VogkiF08TVnS8uvfzkz10k3Ry/view?usp=sharing"
    },
    {
      title: "4th Place - AI-for-Good Hackathon",
      description: "Secured 4th place developing Rakht Setu - an agentic AI blood donation platform using LangGraph multi-agent architecture, reducing donor-patient matching time by 40%"
    },
    {
      title: "1,574+ GitHub Contributions",
      description: "Maintained 1,574+ GitHub contributions in the last year, demonstrating sustained commitment to software development",
      link: "https://github.com/glitchdoescode"
    },
    {
      title: "Smart India Hackathon 2024 & Top 10 Great India Hackathon",
      description: "Selected for Smart India Hackathon (SIH) 2024 and Top 10 at The Great India Hackathon - Jabalpur with innovative healthcare projects"
    },
    {
      title: "UC Berkeley RDI's LLM Agents MOOC Hackathon",
      description: "Participated in UC Berkeley RDI's LLM Agents MOOC Hackathon, developing 'ScheduleBot' AI scheduling agent",
      link: "https://devpost.com/software/schedulebot-vax4zl?ref_content=my-projects-tab&ref_feature=my_projects"
    }
  ];

  const certifications = [
    {
      title: "CCNA (Cisco Certified Network Associate)",
      description: "Mastered fundamental networking concepts including IP connectivity, security, and automation",
      link: "https://drive.google.com/drive/folders/1CZHAecI9JuE2XrJn2QT4nnr_pTn-MmLK?usp=sharing"
    },
    {
      title: "Python Essentials 1 & 2",
      description: "Covered foundational Python programming from basic syntax to object-oriented principles",
      link: "https://drive.google.com/drive/folders/1rkyVeLwu4ZdurV4lRsdPG8bBoUcFw96k?usp=sharing"
    },
    {
      title: "Linux Essentials",
      description: "Acquired core skills in Linux command-line operations, system administration, and scripting",
      link: "https://drive.google.com/file/d/1vr_SV1MJ6BmSnzIiTPfoYmEkAcX_DHGz/view?usp=sharing"
    },
    {
      title: "Introduction to Cybersecurity",
      description: "Gained foundational knowledge of cybersecurity principles, common threats, and defense strategies",
      link: "https://drive.google.com/file/d/1WWbvRDZ6xkJSdu_elIz-kkAIwQKGfiey/view?usp=sharing"
    }
  ];

  const skills = [
    { category: "Languages", items: "Python (Primary), JavaScript, Bash/Shell Scripting, C/C++", icon: <Code className="w-5 h-5" /> },
    { category: "AI/ML & GenAI", items: "Multi-Agent Systems, LangGraph, RAG, NLP, LLMs, Model Fine-tuning, Prompt Engineering, LangChain, TensorFlow, PyTorch, OpenCV", icon: <Bot className="w-5 h-5" /> },
    { category: "Backend & Frameworks", items: "FastAPI, Flask, Streamlit, Node.js", icon: <Code className="w-5 h-5" /> },
    { category: "Cloud & DevOps", items: "GCP (GKE, Pub/Sub, Cloud Run, Secret Manager), Kubernetes, Docker, CI/CD (GitHub Actions), Terraform, Nginx", icon: <Monitor className="w-5 h-5" /> },
    { category: "Databases & Vector Stores", items: "PostgreSQL (RLS), Redis, Supabase, ChromaDB, FAISS, Qdrant", icon: <Cpu className="w-5 h-5" /> },
    { category: "Tools & Systems", items: "Git, Linux/Unix, Docker Compose, Grafana, Prometheus, Loki, gRPC, MCP Protocol, Alembic, Pydantic", icon: <Terminal className="w-5 h-5" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0A0A] via-[#0F0F0F] to-[#1A1A1A] text-white">
      <header className="fixed top-0 w-full bg-black/30 backdrop-blur-2xl border-b border-white/5 z-50 shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-blue-500/5 to-cyan-500/5"></div>
        <nav className="relative max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <img src={avatarImage} alt="Deepak Kumar Soni" className="w-10 h-10 rounded-lg border border-white/20" />
              <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">DKS</span>
            </div>
            <div className="flex space-x-6">
              <a href="#experience" className="text-sm text-gray-400 hover:text-white transition-all duration-300 hover:scale-105">Experience</a>
              <a href="#projects" className="text-sm text-gray-400 hover:text-white transition-all duration-300 hover:scale-105">Projects</a>
              <a href="#achievements" className="text-sm text-gray-400 hover:text-white transition-all duration-300 hover:scale-105">Achievements</a>
              <a href="#skills" className="text-sm text-gray-400 hover:text-white transition-all duration-300 hover:scale-105">Skills</a>
              <a href="#certifications" className="text-sm text-gray-400 hover:text-white transition-all duration-300 hover:scale-105">Certifications</a>
              <a href="#contact" className="text-sm text-gray-400 hover:text-white transition-all duration-300 hover:scale-105">Contact</a>
            </div>
          </div>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 blur-3xl"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="space-y-8 flex-1">
              <div className="inline-block px-6 py-2 bg-white/10 backdrop-blur-xl rounded-full text-sm border border-white/20 shadow-2xl">
                <Terminal className="inline w-4 h-4 mr-2" />
                Software Craftsman • Arch Linux Enthusiast
              </div>
              <h1 className="text-6xl font-bold bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent">
                Deepak Kumar Soni
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
                An innovative AI Engineer and Systems Architect with proven experience in leading projects from ideation to deployment. 
                Specializing in <span className="text-cyan-400">multi-agent systems</span>, product architecture, and client-facing roles to build 
                scalable, intelligent solutions. Passionate about <span className="text-cyan-400">Arch Linux</span> and open-source development with 
                <span className="text-green-400"> 935+ GitHub contributions</span> this year.
              </p>
              <div className="flex space-x-4">
                <a href="#contact" className="px-6 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-300 hover:scale-105 shadow-xl">
                  Get In Touch
                </a>
                <a href="#projects" className="px-6 py-3 bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-xl border border-white/20 rounded-lg hover:scale-105 transition-all duration-300 shadow-xl">
                  View Projects
                </a>
              </div>
            </div>
            <div className="ml-12 hidden lg:block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-2xl blur-xl"></div>
                <img src={avatarImage} alt="Deepak Kumar Soni" className="relative w-64 h-64 rounded-2xl border border-white/20 shadow-2xl object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 bg-gradient-to-b from-black/50 to-gray-900/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-blue-500/5 to-cyan-500/5"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="group p-6 bg-white/5 backdrop-blur-2xl rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 shadow-2xl">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg mr-3 group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                    {skill.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-cyan-200 transition-colors duration-300">{skill.category}</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{skill.items}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Professional Experience</h2>
          
          <h3 className="text-2xl font-semibold mb-8 text-center text-cyan-400">Work Experience</h3>
          <div className="space-y-8 mb-16">
            {workExperience.map((work, index) => (
              <div key={index} className="group p-8 bg-white/5 backdrop-blur-2xl rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-[1.02] shadow-2xl">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                      {work.website ? (
                        <a href={work.website} target="_blank" rel="noopener noreferrer" className="hover:underline">
                          {work.company}
                        </a>
                      ) : work.company}
                    </h3>
                    <p className="text-gray-300 text-lg mb-1">
                      {work.role}
                      {work.certificateLink && (
                        <a href={work.certificateLink} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 ml-2 text-sm">
                          (Certificate)
                        </a>
                      )}
                    </p>
                    <p className="text-gray-500 text-sm flex items-center">
                      <Monitor className="w-4 h-4 mr-2" />
                      {work.location}
                    </p>
                  </div>
                  <span className="text-gray-400 bg-white/5 px-4 py-2 rounded-lg">{work.period}</span>
                </div>
                <ul className="space-y-3">
                  {work.details.map((detail, i) => (
                    <li key={i} className="text-gray-300 leading-relaxed flex items-start">
                      <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        {detail.description}
                        {detail.demoLink && (
                          <a href={detail.demoLink} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 ml-2 inline-flex items-center transition-colors duration-300">
                            <ExternalLink className="w-4 h-4 ml-1" />
                          </a>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-semibold mb-8 text-center text-purple-400">Research & Volunteer Experience</h3>
          <div className="space-y-8">
            {volunteerExperience.map((work, index) => (
              <div key={index} className="group p-8 bg-white/5 backdrop-blur-2xl rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-[1.02] shadow-2xl">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">{work.company}</h3>
                    <p className="text-gray-300 text-lg mb-1">{work.role}</p>
                    <p className="text-gray-500 text-sm flex items-center">
                      <Monitor className="w-4 h-4 mr-2" />
                      {work.location}
                    </p>
                  </div>
                  <span className="text-gray-400 bg-white/5 px-4 py-2 rounded-lg">{work.period}</span>
                </div>
                <ul className="space-y-3">
                  {work.details.map((detail, i) => (
                    <li key={i} className="text-gray-300 leading-relaxed flex items-start">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        {detail.description}
                        {detail.demoLink && (
                          <a href={detail.demoLink} target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 ml-2 inline-flex items-center transition-colors duration-300">
                            <ExternalLink className="w-4 h-4 ml-1" />
                          </a>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 bg-gradient-to-b from-gray-900/50 to-black/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-blue-500/5 to-cyan-500/5"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group p-6 bg-white/5 backdrop-blur-2xl rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 shadow-2xl">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-lg mr-3 group-hover:from-purple-500/30 group-hover:to-cyan-500/30 transition-all duration-300">
                    <Code className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-cyan-200 transition-colors duration-300">{project.title}</h3>
                </div>
                <p className="text-gray-400 mb-6 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-white/10 backdrop-blur-xl rounded-full text-sm text-gray-300 border border-white/10 group-hover:border-white/20 transition-all duration-300">
                      {tech}
                    </span>
                  ))}
                </div>
                <a href={project.link} 
                   className="inline-flex items-center text-gray-400 hover:text-cyan-400 transition-all duration-300 group-hover:scale-105">
                  <Github className="mr-2 w-4 h-4" />
                  View Project <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="achievements" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-blue-500/5 to-purple-500/5"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Achievements & Recognition</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="group p-6 bg-white/5 backdrop-blur-2xl rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 shadow-2xl">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg mr-3 group-hover:from-green-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                    <Bot className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-green-200 transition-colors duration-300">{achievement.title}</h3>
                </div>
                <p className="text-gray-400 mb-4 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{achievement.description}</p>
                {achievement.link && (
                  <a href={achievement.link} target="_blank" rel="noopener noreferrer"
                     className="inline-flex items-center text-gray-400 hover:text-green-400 transition-all duration-300 group-hover:scale-105">
                    View Details <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="certifications" className="py-20 bg-gradient-to-b from-black/50 to-gray-900/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="group p-6 bg-white/5 backdrop-blur-2xl rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 shadow-2xl">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg mr-3 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                    <Terminal className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-blue-200 transition-colors duration-300">{cert.title}</h3>
                </div>
                <p className="text-gray-400 mb-4 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{cert.description}</p>
                <a href={cert.link} target="_blank" rel="noopener noreferrer"
                   className="inline-flex items-center text-gray-400 hover:text-blue-400 transition-all duration-300 group-hover:scale-105">
                  View Certificate <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gradient-to-r from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-blue-500/5 to-cyan-500/5"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Let's Connect</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <a href="mailto:deepakkrsoni16@gmail.com" className="group p-6 bg-white/5 backdrop-blur-2xl rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 shadow-2xl">
              <div className="flex items-center">
                <div className="p-3 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-lg mr-4 group-hover:from-red-500/30 group-hover:to-orange-500/30 transition-all duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-white group-hover:text-orange-200 transition-colors duration-300">Email</h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">deepakkrsoni16@gmail.com</p>
                </div>
              </div>
            </a>
            
            <a href="https://github.com/glitchdoescode" target="_blank" rel="noopener noreferrer" className="group p-6 bg-white/5 backdrop-blur-2xl rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 shadow-2xl">
              <div className="flex items-center">
                <div className="p-3 bg-gradient-to-r from-gray-500/20 to-gray-700/20 rounded-lg mr-4 group-hover:from-gray-500/30 group-hover:to-gray-700/30 transition-all duration-300">
                  <Github className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-white group-hover:text-gray-200 transition-colors duration-300">GitHub</h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">@glitchdoescode</p>
                </div>
              </div>
            </a>
            
            <a href="https://linkedin.com/in/glitchxx0" target="_blank" rel="noopener noreferrer" className="group p-6 bg-white/5 backdrop-blur-2xl rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 shadow-2xl">
              <div className="flex items-center">
                <div className="p-3 bg-gradient-to-r from-blue-500/20 to-blue-700/20 rounded-lg mr-4 group-hover:from-blue-500/30 group-hover:to-blue-700/30 transition-all duration-300">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-white group-hover:text-blue-200 transition-colors duration-300">LinkedIn</h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">@glitchxx0</p>
                </div>
              </div>
            </a>
            
            <a href="https://instagram.com/deepak_krsoni" target="_blank" rel="noopener noreferrer" className="group p-6 bg-white/5 backdrop-blur-2xl rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 shadow-2xl">
              <div className="flex items-center">
                <div className="p-3 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-lg mr-4 group-hover:from-pink-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                  <Instagram className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-white group-hover:text-pink-200 transition-colors duration-300">Instagram</h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">@deepak_krsoni</p>
                </div>
              </div>
            </a>
            
            <a href="https://x.com/kernel_glitch" target="_blank" rel="noopener noreferrer" className="group p-6 bg-white/5 backdrop-blur-2xl rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 shadow-2xl">
              <div className="flex items-center">
                <div className="p-3 bg-gradient-to-r from-gray-500/20 to-slate-500/20 rounded-lg mr-4 group-hover:from-gray-500/30 group-hover:to-slate-500/30 transition-all duration-300">
                  <Twitter className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-white group-hover:text-gray-200 transition-colors duration-300">X</h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">@kernel_glitch</p>
                </div>
              </div>
            </a>
            
            <a href="tel:+919179687775" className="group p-6 bg-white/5 backdrop-blur-2xl rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 shadow-2xl">
              <div className="flex items-center">
                <div className="p-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg mr-4 group-hover:from-green-500/30 group-hover:to-emerald-500/30 transition-all duration-300">
                  <Terminal className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-white group-hover:text-green-200 transition-colors duration-300">Phone</h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">+91 9179687775</p>
                </div>
              </div>
            </a>
            
            <div className="group p-6 bg-white/5 backdrop-blur-2xl rounded-2xl border border-white/10 shadow-2xl">
              <div className="flex items-center">
                <div className="p-3 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-lg mr-4">
                  <Monitor className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-white">System</h3>
                  <p className="text-gray-400">Arch Linux • Neovim</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 text-center bg-black/50 backdrop-blur-xl border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-blue-500/5 to-cyan-500/5"></div>
        <div className="relative">
          <div className="flex items-center justify-center mb-4">
            <img src={avatarImage} alt="Deepak Kumar Soni" className="w-12 h-12 rounded-lg border border-white/20 mr-3" />
            <p className="text-gray-400">
              © {new Date().getFullYear()} Deepak Kumar Soni • Built with ❤️ on Arch Linux
            </p>
          </div>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/glitchdoescode" className="text-gray-500 hover:text-white transition-colors duration-300">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/glitchxx0" className="text-gray-500 hover:text-white transition-colors duration-300">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://x.com/kernel_glitch" className="text-gray-500 hover:text-white transition-colors duration-300">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="mailto:deepakkrsoni16@gmail.com" className="text-gray-500 hover:text-white transition-colors duration-300">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
