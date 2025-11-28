// Mock data for Raheel A. Rehman Portfolio

export const personalInfo = {
  name: "Raheel A. Rehman",
  title: "AI/ML & GenAI Engineer | Data Scientist | Data Analyst",
  subtitle: "Building with data and intelligence one system at a time.",
  email: "raheelrehman312001@gmail.com",
  resumeLink: "/Raheel_Rehman.pdf",
  profileImage: "/profile.jfif",
  headerImage: "/assets/header.png",
  socialLinks: {
    github: "https://github.com/Raheel31",
    linkedin: "https://www.linkedin.com/in/raheelrehman/",
    huggingface: "https://huggingface.co/Raheel31"
  }
};

export const aboutMe = {
  bio: "Focused on building practical, reliable, and scalable solutions that support real-world workflows. Previously at Goldman Sachs working on large data pipelines, automation, quality checks, and real-time dashboards used across global teams. Project work spans experimentation, refining system performance, and developing components that are easy to maintain and integrate. Driven by clear problem-solving, steady improvement, and creating tools that make daily processes smoother and more efficient."
};

export const projects = [
  {
    id: 1,
    title: "GenAI Career Assistant Chatbot",
    description: "A generative AI system that evaluates resumes producing structured insights for candidates.",
    techStack: ["LangChain", "HuggingFace", "FastAPI", "FAISS", "Gradio", "Sentence-Transformers", "Requests"],
    features: ["Real-time scoring", "Improvement suggestions", "Job fit analysis"],
    githubLink: "https://github.com/Raheel31/GenAI_Career_Assistant.git",
  },
  {
    id: 2,
    title: "Synthetic Stock Data Generator",
    description: "An Autoencoder - GAN hybrid netowrk that generates realistic synthetic stock market data.",
    techStack: ["Pandas", "Numpy", "Pytorch", "Scikit-Learn", "Optuna", "OOPs", "Matplotlib"],
    features: ["Generates synthetic stock data", "Real vs synthetic model comparison", "Stock data Visualiser"],
    githubLink: "https://github.com/Raheel31/Synthetic-Stock-Data.git",
    demoLink: "https://huggingface.co/spaces/Raheel31/Synthetic-Stock-Data"
  },
  {
    id: 3,
    title: "Marks Guitar Assistant",
    description: "A recommendation system that suggests personalized guitar exercises by analysing the users skill level.",
    techStack: ["Pandas", "Scikit-learn", "Numpy", "Docker", "MiniBatchKMeans", "PCA", "FastAPI"],
    features: ["Personalized exercise recommendations", "Dockerized deployment for scalability", "FastAPI powered for real-time responses"],
    githubLink: "https://github.com/Raheel31/Marks_v1.0.git",
    demoLink: "https://huggingface.co/spaces/Raheel31/Marks.Guitar-Assistant-ui"
  },
  {
    id: 4,
    title: "Loan Delinquency Predictive Model",
    description: "A machine learning pipeline that predicts loan delinquency using classical ML models.",
    techStack: ["Pandas", "Numpy", "Logistic Regression", "Matplotlib", "Seaborn"],
    features: ["Preprocessing and feature engineering", "Model training with Logistic Regression", "Performance evaluation using accuracy, F1, recall, precision"],
    githubLink: "https://github.com/Raheel31/Loan-Delinquencies-Predictor.git",
    demoLink: null
  }
];

export const skills = {
  languages: ["Python", "R", "C", "JavaScript", "HTML", "CSS"],
  machineLearning: ["PyTorch", "TensorFlow", "Keras", "Scikit-Learn","OpenCV" ,"HuggingFace", "Transformers", "LangChain", "LangGraph","Optuna", "Faiss"],
  dataScience: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "XGBoost","Pylint", "Pytest"],
  dataEngineering: ["SQL", "PySpark","MongoDB", "BeautifulSoup", "Requests", "Postman", "BigQuery"],
  toolsTechnologies: ["GitHub","Gitlab","Docker", "VSCode", "PyCharm","Alteryx", "AWS"],
  additionalTools: ["Tableau", "PowerBI", "IBM Watson Studio", "Aqua Data Studio","Excel", "Gradio", "Streamlit", "FastAPI"]
};

export const experience = [
  {
    id: 1,
    company: "Goldman Sachs",
    role: "Data Analytics & Strategic Solutions",
    period: "2022 - 2025",
    highlights: [
      "Developed a real-time APAC loan exposure tracking system for regulatory compliance",
      "Developed a data-health dashboard achieving 99% integrity accuracy",
      "Created revenue and user analytics dashboards for 2M+ records",
      "Designed and optimized scalable data pipelines and schemas to improve ETL performance",
      "Built and maintained 10+ real-time dashboards with ongoing feature enhancements"
    ]
  },
    {
    id: 2,
    company: "Shinkan Pvt. Ltd.",
    role: "Data Scientist - Intern",
    period: "2022 - 2022",
    highlights: [
      "Developed an audio classification model using Scikit-learn and Keras with 98% accuracy",
      "Preprocessed and cleaned 1,500+ raw audio recordings",
      "Engineered and visualized key audio features using Matplotlib and Seaborn",
    ]
  }
];

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
];
