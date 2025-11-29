// Mock data for Raheel A. Rehman Portfolio

export const personalInfo = {
  name: "Raheel A. Rehman",
  title: "AI/ML & GenAI Engineer | Data Scientist | Data Analyst",
  subtitle: "Building with data and intelligence one system at a time.",
  email: "raheel.312001@gmail.com",
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
  bio: "Focused on building practical, reliable, and scalable solutions that support real-world workflows. Previously at Goldman Sachs working on large data pipelines, automation, quality checks, and real-time dashboards used across global teams. Project work spans experimentation, refining system performance, and developing components that are easy to maintain and integrate. Driven by clear problem-solving, steady improvement, and creating tools that make daily processes smoother and more efficient.",
  education: {
    institution: "Manipal Institute of Technology",
    degree: "Bachelors of Technology in Mechatronics",
    minors: "Data Science"
  }
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

  machineLearning: [
    "PyTorch", "TensorFlow", "Keras", "Scikit-Learn", "XGBoost",
    "HuggingFace", "Transformers", "LangChain", "LangGraph",
    "Optuna", "Faiss", "OpenCV"
  ],

  dataAnalysisVisualization: ["NumPy", "Pandas", "Matplotlib", "Seaborn"],

  dataEngineering: ["SQL", "PySpark", "MongoDB", "BigQuery"],

  cloudDevOpsTools: [
    "AWS", "Docker", "GitHub", "GitLab",
    "VSCode", "PyCharm", "Pylint", "Pytest"
  ],

  additionalTools: [
    "FastAPI", "Gradio", "Streamlit",
    "Requests", "BeautifulSoup", "Postman",
    "Tableau", "PowerBI", "Excel",
    "IBM Watson Studio", "Aqua Data Studio"
  ]
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
  { label: "Certifications", href: "#certifications" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
];

export const certifications = [
  {
    id: 1,
    title: "IBM Generative AI Engineering", link: "https://www.coursera.org/account/accomplishments/professional-cert/G8443DMSKMSX",
    period: "2025",
    subCourses: [
      { title: "Introduction to Artificial Intelligence", link: "https://www.coursera.org/account/accomplishments/verify/W4KMU34YPQ5S" },
      { title: "Generative AI : Introduction and Applications", link: "https://www.coursera.org/account/accomplishments/verify/0LROD865L6AB" },
      { title: "Generative AI : Prompt Engineering Basics", link: "https://www.coursera.org/account/accomplishments/verify/3VZ0ICLE39LM" },
      { title: "Developing AI Applications with Python and Flask", link: "https://www.coursera.org/account/accomplishments/verify/7L9D7NVDEBRV" },
      { title: "Building Generative AI Powered Applications with Python", link: "https://www.coursera.org/account/accomplishments/verify/I5QD0MS5TIJT" },
      { title: "Generative AI and LLMs : Architecture and Data Preparation", link: "https://www.coursera.org/account/accomplishments/verify/QCLFKSA4MOAE" },
      { title: "Gen AI Foundational Models for NLP & Language Understanding", link: "https://www.coursera.org/account/accomplishments/verify/UA71Y2NOTOQU" },
      { title: "Generative AI Language Modelling iwth Transformers", link: "https://www.coursera.org/account/accomplishments/verify/NEKE3JW2WFZL" },
      { title: "Generative AI Engineering and Fine Tuning Transformers", link: "https://www.coursera.org/account/accomplishments/verify/GP7L1C6KHVU5" },
      { title: "Generative AI Advance Fine Tuning for LLMs", link: "https://www.coursera.org/account/accomplishments/verify/JOM5Y6XZHL6I" },
      { title: "Fundamentals of AI Agents using RAG nad LangChain", link: "https://www.coursera.org/account/accomplishments/verify/PK741D8I6XCZ" },
      { title: "Project : Generative AI Applications with RAG and LangChain", link: "https://www.coursera.org/account/accomplishments/verify/4ZLW9DRK4H1E" }
    ],
  },
  {
    id: 2,
    title: "IBM Deep Learning with PyTorch, Keras and TensorFlow", link: "https://www.credly.com/badges/8d246f45-e8e7-4d0f-aab7-aa1c590de473/public_url",
    period: "2025",
    subCourses: [
      { title: "Introduction to Deep Learning & Neural Networks with Keras", link: "https://www.coursera.org/account/accomplishments/verify/CNLHHQBT4H5Q" },
      { title: "Deep Learning with Keras and Tensorflow", link: "https://www.coursera.org/account/accomplishments/verify/WU1H602CMSB1" },
      { title: "Introduction to Neural Networks and PyTorch", link: "https://www.coursera.org/account/accomplishments/verify/WVIGVDIPCD8M" },
      { title: "Deep Learning with PyTorch", link: "https://www.coursera.org/account/accomplishments/verify/23GVTAZNN9ME" },
      { title: "AI Capstone Project with Deep Learning", link: "https://www.coursera.org/account/accomplishments/verify/WAKYBSPH0JUK" }
    ],
  },
  {
    id: 3,
    title: "IBM Data Science", link: "https://www.credly.com/badges/7b7a0be8-ea2d-4814-831a-f3c707763ee2/public_url",
    period: "2022",
    subCourses: [
      { title: "Tools for Data Science", link: "https://www.coursera.org/account/accomplishments/verify/AJ26Q5G84DHF" },
      { title: "Python for Data Sciecne, AI and Development", link: "https://www.coursera.org/account/accomplishments/verify/35A5DNSARXNA" },
      { title: "Python Project for Data Science", link: "https://www.coursera.org/account/accomplishments/verify/878LC8RFDJCJ" },
      { title: "Databases and SQL for Data Science with Python", link: "https://www.coursera.org/account/accomplishments/verify/8NBZGXCKCE8W" },
      { title: "Data Analysis with Python", link: "https://www.coursera.org/account/accomplishments/verify/PL53FPXE7829" },
      { title: "Data Visualisation with Python", link: "https://www.coursera.org/account/accomplishments/verify/9MRRWWPJPXB2" },
      { title: "Machine Leearning with Python", link: "https://www.coursera.org/account/accomplishments/verify/LHN64AXF8ZBD" },
      { title: "Applied Data Science Capstione", link: "https://www.coursera.org/account/accomplishments/verify/GUHG78EGZN5V" }
    ],
  }
];
