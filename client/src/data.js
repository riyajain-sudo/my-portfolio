// All the content on the site lives here — edit freely, no need to touch component files.

export const profile = {
  name: "Riya Jain",
  tagline: "Biotechnology undergrad building at the intersection of code and biology.",
  bio: "Biotechnology undergraduate with a foundation in laboratory techniques and Python-based projects, interested in machine learning, bioinformatics, and drug discovery. Also exploring web development, backend technologies, and database management, with an interest in applying technical skills across biotechnology and IT.",
  linkedin: "https://www.linkedin.com/in/riya-jain-biotech/", 
  github: "https://github.com/riyajain-sudo", 
};

export const skills = [
  {
    group: "Languages",
    items: ["Python", "JavaScript", "C++", "SQL"],
  },
  {
    group: "Frameworks & Libraries",
    items: ["Django", "Flask", "Node.js", "Streamlit", "Biopython"],
  },
  {
    group: "Databases",
    items: ["MySQL", "SQLite", "MongoDB"],
  },
  {
    group: "Bioinformatics & Research",
    items: ["NCBI BLAST", "UniProt API", "PyRx"],
  },
  {
    group: "Developer Tools",
    items: ["Git/GitHub", "Docker"],
  },
];

export const experience = [
  {
    role: "Intern",
    org: "Jawaharlal Nehru University, Delhi",
    period: "Jul 2026 – Aug 2026",
    points: [
      "Performed aseptic handling, media preparation, microbial culturing, and bacterial isolation using standard microbiological techniques.",
      "Assisted in the revival and cultivation of Staphylococcus aureus for antimicrobial resistance studies.",
      "Performed genomic DNA isolation from soil samples and maintained laboratory records following biosafety practices.",
    ],
  },

  {
    role: "Trainee Intern",
    org: "SN Medical College, Agra",
    period: "Jul 2025 – Aug 2025",
    points: [
      "Performed TSH estimation in female serum samples using ELISA and assisted with automated CLIA-based analysis.",
      "Helped with sample handling, data recording, and report preparation.",
      "Gained exposure to clinical laboratory workflows and diagnostic instruments.",
    ],
  }
];

export const projects = [
  {
    title: "In Silico Functional Characterization of Human p53 Protein",
    year: "2026",
    tags: ["Python", "Biopython", "NCBI BLAST", "UniProt API"],
    description:
      "A bioinformatics pipeline for in silico analysis of the human p53 protein — sequence analysis, quality validation, and homology search using BLASTp to study conserved similarities across species, with automated retrieval of functional annotation from UniProt.",
  },
  {
    title: "AI English Assistant",
    year: "2026",
    tags: ["Generative AI", "Gemini API", "Authentication"],
    description:
      "A generative-AI learning assistant integrating the Gemini model through an OpenAI-compatible API. Features story generation, vocabulary building, games, and quizzes, with secure user authentication and prompt-based context-aware outputs.",
  },
  {
    title: "Tourism — Full-Stack Travel App",
    year: "2025",
    tags: ["MERN", "MongoDB", "Express", "JWT"],
    description:
      "A full-stack tourism application built while learning the MERN stack — full CRUD for tourist places, RESTful APIs with Node.js and Express, JWT-based signup/login, and backend routes designed for efficient data handling.",
  },
  {
    title: "Bioinformatics Toolkit",
    year: "2025",
    tags: ["Python", "Streamlit", "Pandas"],
    description:
      "An interactive DNA sequence analysis tool combining web development with biological data analysis — including nucleotide frequency analysis — built with Python, Streamlit, and Pandas.",
  },
  {
    title: "Comparative Study of TSH Levels in Female Blood Serum",
    year: "2025",
    tags: ["Research Report", "ELISA", "CLIA"],
    description:
      "A project report from her internship studying Thyroid Stimulating Hormone (TSH) using ELISA and CLIA methods, identifying method-specific deviations in reported values, with detailed biotechnology and healthcare documentation.",
  },
  {
    title: "Vaccine Development for HIV/AIDS: Progress, Challenges, and Future Perspectives",
    year: "2024",
    tags: ["Review Paper", "Immunology"],
    description:
      "A review of traditional and modern HIV vaccine development strategies, covering recombinant vaccines, DNA vaccines, viral vectors, and immune-based approaches, alongside vaccine efficacy and future research directions.",
  },
];

export const education = {
  school: "Amity University Madhya Pradesh",
  location: "Gwalior, India",
  degree: "Bachelor of Technology — Biotechnology",
  gpa: "8.86",
  period: "Aug 2023 – Jul 2027",
  courses: ["Fullstack Gen and Agentic AI (Python)", "MERN Fullstack Guide"],
};
