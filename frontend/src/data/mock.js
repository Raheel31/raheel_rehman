// Mock data for Raheel A. Rehman Portfolio

export const personalInfo = {
  name: "Raheel A. Rehman",
  title: "Machine Learning & Generative AI Engineer",
  subtitle: "Building intelligent, end-to-end AI systems with LLMs, Deep Learning, and Data Engineering.",
  email: "contact@raheel.ai",
  resumeLink: "/assets/resume.pdf",
  profileImage: "/assets/profile.png",
  headerImage: "/assets/header.png",
  socialLinks: {
    github: "https://github.com/raheel",
    linkedin: "https://linkedin.com/in/raheel",
    huggingface: "https://huggingface.co/raheel"
  }
};

export const aboutMe = {
  bio: "Machine Learning and Generative AI Engineer experienced in building end-to-end AI systems across classical ML, deep learning, and LLM-based applications. Driven by a strong understanding of data engineering, model training, evaluation, and real-world deployment. Previously at Goldman Sachs. Passionate about RAG systems, LLM fine-tuning, optimization, and AI product development."
};

export const projects = [
  {
    id: 1,
    title: "GenAI Resume Analyzer",
    description: "Summarizes job fit using LLMs with real-time scoring and improvement suggestions for candidates.",
    techStack: ["LangChain", "HuggingFace", "FastAPI", "FAISS"],
    features: ["Real-time scoring", "Improvement suggestions", "Job fit analysis"],
    githubLink: "https://github.com/raheel/genai-resume-analyzer",
    demoLink: "https://demo.raheel.ai/resume-analyzer"
  },
  {
    id: 2,
    title: "Web Scraper + LLM Summarizer",
    description: "Scrapes articles with BeautifulSoup + Requests and summarizes using transformers with full pipeline UI.",
    techStack: ["BeautifulSoup", "Requests", "Transformers", "Python"],
    features: ["Article scraping", "AI summarization", "Full pipeline UI"],
    githubLink: "https://github.com/raheel/web-scraper-summarizer",
    demoLink: "https://demo.raheel.ai/scraper"
  },
  {
    id: 3,
    title: "ML Model Optimization with Optuna",
    description: "Automated hyperparameter optimization with performance comparisons and visualization dashboards.",
    techStack: ["Optuna", "Scikit-learn", "Pandas", "Matplotlib"],
    features: ["Hyperparameter tuning", "Performance visualization", "Automated optimization"],
    githubLink: "https://github.com/raheel/ml-optuna-optimization",
    demoLink: null
  },
  {
    id: 4,
    title: "Vector Search Engine (FAISS)",
    description: "Semantic search engine built using embeddings and FAISS for lightning-fast similarity search.",
    techStack: ["HuggingFace", "LangChain", "FastAPI", "FAISS"],
    features: ["Semantic search", "Vector embeddings", "Fast retrieval"],
    githubLink: "https://github.com/raheel/vector-search-faiss",
    demoLink: "https://demo.raheel.ai/vector-search"
  },
  {
    id: 5,
    title: "Hugging Face Model Space",
    description: "Collection of fine-tuned models and inference widgets hosted on Hugging Face platform.",
    techStack: ["HuggingFace", "Transformers", "Gradio", "PyTorch"],
    features: ["Model cards", "Inference widgets", "Fine-tuned models"],
    githubLink: null,
    demoLink: "https://huggingface.co/raheel"
  }
];

export const skills = {
  languages: ["Python", "R", "C", "JavaScript", "HTML", "CSS"],
  machineLearning: ["PyTorch", "TensorFlow", "Keras", "Scikit-Learn", "HuggingFace", "Transformers", "LangChain"],
  dataScience: ["NumPy", "Pandas", "Matplotlib", "Seaborn"],
  toolsTechnologies: ["GitHub", "FastAPI", "Docker", "Gradio", "Streamlit", "VSCode", "PyCharm"],
  additionalTools: ["Requests", "Tableau", "PowerBI", "Optuna", "Pytest", "Pylint", "BeautifulSoup", "MongoDB"]
};

export const experience = [
  {
    id: 1,
    company: "Goldman Sachs",
    role: "Data & AI Engineer",
    period: "2022 - 2025",
    highlights: [
      "Built ML pipelines to automate analysis workflows",
      "Developed GenAI prototypes using HuggingFace Transformers",
      "Reduced manual processing time by 40%",
      "Created dashboards using Tableau and PowerBI",
      "Built automation tools in Python improving efficiency"
    ]
  }
];

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" }
];
