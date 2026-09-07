export const profile = {
  name: "Chinmay Omkar Bitne",
  shortName: "Chinmay Bitne",
  email: "chinmaybitne82@gmail.com",
  phone: "+1 623-212-8463",
  location: "Tempe, Arizona",
  github: "https://github.com/ChinmayBitne",
  linkedin: "https://www.linkedin.com/in/chinmaybitne/",
  resumes: {
    ai: "/documents/chinmay-bitne-ai-engineer-resume.pdf",
    data: "/documents/chinmay-bitne-data-analyst-resume.pdf",
  },
  availability: "Open to new opportunities",
};

export const focuses = {
  ai: {
    slug: "ai",
    eyebrow: "AI/ML Engineering",
    title: "Models are only useful when the surrounding system works.",
    headlines: [
      "Models are only useful when the surrounding system works.",
      "Retrieval should be grounded, inspectable, and useful.",
      "Agents need evaluation, memory, and clear boundaries.",
      "Multimodal AI turns complex signals into useful products.",
    ],
    accent: "#3562a8",
    secondary: "#b8683a",
    surface: "#eef3f9",
    dark: "#111c2f",
    highlight: "#f0c36a",
    featured: ["answerleaf", "astra", "nutriassist", "ldws", "emotion", "alternovation"],
    statement: "Explore work across RAG, agents, NLP, multimodal AI, and vision.",
    identity: "AI/ML Engineer",
    roleCycle: ["AI Engineer", "ML Engineer"],
    tags: ["RAG", "Agents", "NLP", "Computer vision", "Multimodal AI"],
    about: {
      headline: "I build AI systems beyond the model.",
      lead:
        "Grounded RAG, agents, multimodal products, and computer vision—from evaluation to user experience.",
      body: [
        "My work spans retrieval-augmented generation, AI agents, natural language processing, multimodal systems, and computer vision. I connect model behavior with retrieval, inference, evaluation, and the product experience that makes an AI capability genuinely useful.",
        "I approach AI/ML engineering through grounding, measurable evaluation, explicit agent boundaries, and careful failure analysis. The goal is not a clever demo; it is a system whose outputs can be inspected, improved, and trusted in real use.",
      ],
      principles: ["Grounded retrieval", "Evaluated behavior", "Clear agent boundaries", "Production-minded inference"],
    },
  },
  data: {
    slug: "data",
    eyebrow: "Data science & analytics",
    title: "I turn messy signals into decisions people can act on.",
    headlines: [
      "Good analysis begins with a precise question.",
      "Reliable data makes confident decisions possible.",
      "Dashboards should reveal the story, not decorate it.",
      "Models matter when their results can be explained.",
    ],
    accent: "#147568",
    secondary: "#c98527",
    surface: "#edf7f2",
    dark: "#10251f",
    highlight: "#f0c66a",
    featured: ["nyc-airbnb", "alternovation", "answerleaf", "disease", "weather"],
    statement: "Explore dashboards, predictive systems, retrieval data, and IoT workflows.",
    identity: "Data scientist & analytics engineer",
    roleCycle: ["Data Scientist", "Data Analyst"],
    tags: ["Python", "SQL", "Tableau", "Power BI", "Predictive modeling"],
    about: {
      headline: "I turn analysis into decisions people can trust.",
      lead:
        "My data work connects exploratory analysis, statistics, visualization, machine learning, and production data systems with a clear business question.",
      body: [
        "I use SQL and Python to investigate data quality, uncover patterns, test assumptions, and develop statistical or predictive approaches that answer a defined business question.",
        "I translate the analysis into clear Tableau and Power BI experiences, reproducible workflows, and decision-ready communication so stakeholders can understand both the finding and the evidence behind it.",
      ],
      principles: ["Reliable data", "Clear questions", "Reproducible analysis", "Actionable communication"],
    },
  },
};

export const projects = [
  {
    slug: "answerleaf",
    title: "AnswerLeaf AI",
    kicker: "Grounded academic research workspace",
    year: "2026",
    status: "Live product",
    tracks: ["ai", "software", "data"],
    summary:
      "A production-deployed workspace that turns class materials and student-approved web evidence into assignment-ready work with inspectable APA citations.",
    impact: "100% citation validity across a scoped five-case regression baseline",
    challenge:
      "Generic chat tools make it difficult to control which sources are used or verify the exact evidence behind an answer.",
    contribution:
      "Designed and implemented the product architecture, source-review workflow, assignment allowlists, hybrid retrieval, authority-aware reranking, citation verification, retention controls, API layer, and deployment path.",
    decisions: [
      "Require explicit approval before web sources enter retrieval",
      "Prioritize class materials and required sources per assignment",
      "Keep provider keys request-scoped and out of persistent storage",
      "Make citations open the exact source evidence",
    ],
    results: [
      "Deployed with Vercel, Render, and Supabase",
      "Hybrid vector and keyword retrieval with pgvector",
      "Scoped baseline: 5/5 hit@3 and 5/5 valid clickable citations",
    ],
    stack: ["Next.js", "TypeScript", "FastAPI", "LangGraph", "PostgreSQL", "pgvector", "Gemini", "Tavily"],
    github: "https://github.com/ChinmayBitne/Answerleaf-AI",
    live: "https://answerleaf-ai-web-nine.vercel.app/",
    cover: "/images/generated/answerleaf-cover.webp",
    visualAlt: "Diagram of AnswerLeaf sources flowing through review, retrieval, and cited answers",
  },
  {
    slug: "astra",
    title: "ASTRA AI",
    kicker: "Voice-first Windows assistant",
    year: "2026",
    status: "Open-source desktop beta",
    tracks: ["ai", "software"],
    summary:
      "An open-source, localhost-first Windows desktop assistant using Gemini Live for real-time voice interaction and more than 50 local tools across applications, files, media, monitoring, reminders, and multi-step workflows.",
    impact: "50+ local tools connected through one voice-first system",
    challenge:
      "Desktop assistants often stop at conversation. ASTRA is designed to understand a request, choose tools, coordinate actions, and remain useful without moving the whole application into the cloud.",
    contribution:
      "Built the Electron application, React and TypeScript interface, Express control plane, Gemini Live audio loop, local tool layer, screen-understanding path, proactive alerts, and optional Google Workspace integrations.",
    decisions: [
      "Keep application control localhost-first",
      "Separate conversational state from tool execution",
      "Design visible confirmation for consequential actions",
      "Treat screen context and proactive alerts as explicit capabilities",
    ],
    results: [
      "Public MIT-licensed source with contributor and security documentation",
      "Bidirectional voice and typed interaction",
      "50+ application, file, media, and system tools",
      "NSIS installer workflow and native Windows integration",
    ],
    stack: ["Electron", "React", "TypeScript", "Vite", "Express", "Gemini Live", "Google Cloud"],
    github: "https://github.com/ChinmayBitne/ASTRA-AI",
    cover: "/images/generated/astra-cover.webp",
    gallery: [
      "/images/astra-main.png",
      "/images/astra-settings.png",
      "/images/astra-setup-guide.png",
    ],
    galleryAlts: [
      "ASTRA Windows desktop interface with system telemetry, voice controls, and status panels",
      "ASTRA settings panel for local configuration and optional integrations",
      "ASTRA setup guide explaining required and optional services",
    ],
    imageNote: "Product screenshots captured with isolated demo data; no personal settings or credentials are shown.",
    visualAlt: "Stylized ASTRA voice interface with live tool activity",
  },
  {
    slug: "nyc-airbnb",
    title: "NYC Airbnb Market Intelligence",
    kicker: "Interactive Tableau analysis",
    year: "2025",
    status: "Live dashboard",
    tracks: ["data"],
    summary:
      "An interactive Tableau investigation of review quality, pricing, host behavior, property types, and neighborhood patterns across more than 30,000 New York City listings.",
    impact: "30,000+ listings organized into an interactive decision dashboard",
    challenge:
      "Hosts, travelers, investors, and planners need to compare price, quality, inventory, and geography without losing the relationships between them.",
    contribution:
      "Prepared the analysis, defined the dashboard questions, built calculated fields and dynamic filters, and connected maps, distributions, price comparisons, and host segmentation through cross-chart interactions.",
    decisions: [
      "Use geography as the primary analytical anchor",
      "Expose room type and property filters for comparison",
      "Pair averages with distributions and outlier views",
      "Connect review volume with price rather than reporting isolated KPIs",
    ],
    results: [
      "Published publicly on Tableau",
      "Neighborhood and room-type price comparisons",
      "Host segmentation and review-pattern exploration",
    ],
    stack: ["Tableau", "Calculated Fields", "Dashboard Design", "Data Cleaning", "Exploratory Analysis"],
    live: "https://public.tableau.com/app/profile/chinmay.bitne6473/viz/NYCAirbnbDashboard_17463079612710/AirbnbNYCDashboard",
    cover: "/images/generated/nyc-airbnb-cover.webp",
    image: "/images/nyc-airbnb-tableau.png",
    gallery: ["/images/nyc-airbnb-tableau.png"],
    visualAlt: "NYC Airbnb Tableau dashboard with maps, distributions, and price analysis",
  },
  {
    slug: "alternovation",
    primaryTrack: "data",
    title: "Alternovation",
    kicker: "Furniture intelligence studio",
    year: "2023–2026",
    status: "Award-winning project",
    tracks: ["ai", "data"],
    summary:
      "An ML-assisted furniture concept workflow combining structured design inputs, generated visuals, cost estimation, exportable briefs, and business-intelligence reporting.",
    impact: "Best Project Award at Ural Federal University",
    challenge:
      "Furniture ideation, visualization, costing, and handoff typically happen in disconnected tools, slowing iteration and obscuring cost tradeoffs.",
    contribution:
      "Led the five-person international team, developed the ML-assisted cost-estimation concept, shaped the product workflow, and connected generated concepts with structured product analysis.",
    decisions: [
      "Capture material, purpose, dimensions, style, and finish as structured inputs",
      "Keep current model quality clearly labeled as a test-stage baseline",
      "Connect design outputs with costing and documentation",
      "Use the Power BI screenshot as historical project evidence; the report is not represented as solely owned",
    ],
    results: [
      "Best Project Award among participating teams",
      "Dashboard view covering 146 furniture items",
      "Modular Python, Gradio, SDXL, and CatBoost workflow",
    ],
    stack: ["Python", "CatBoost", "Power BI", "Gradio", "SDXL", "PyTorch"],
    github: "https://github.com/ChinmayBitne/Alternovation",
    cover: "/images/generated/alternovation-cover.webp",
    image: "/images/alternovation-powerbi.png",
    gallery: ["/images/alternovation-powerbi.png"],
    visualAlt: "Alternovation Power BI dashboard showing 146 items and purpose distribution",
    imageNote: "Historical dashboard screenshot from the collaborative Ural Federal University project.",
  },
  {
    slug: "nutriassist",
    title: "NutriAssist AI",
    kicker: "Multimodal nutrition assistant",
    year: "2026",
    status: "Completed product demo",
    tracks: ["ai", "software"],
    summary:
      "A local-first nutrition assistant that combines a fine-tuned Qwen model, grounded food data, meal tracking, user memory, and Gemini-powered food-image detection.",
    impact: "Recommendation accuracy increased from 71% to 92% in the documented evaluation",
    challenge:
      "Nutrition chat becomes unreliable when conversation, nutrient lookup, image understanding, portions, and daily tracking operate as separate experiences.",
    contribution:
      "Fine-tuned the Qwen model with LoRA, designed the grounded response flow, built the meal-tracking and memory modules, connected food-image detection, and packaged the application for reproducible local use.",
    decisions: [
      "Keep core nutrition lookup and tracking usable without a cloud API",
      "Use memory only when relevant to the current request",
      "Separate deterministic nutrition totals from generated advice",
      "Support quantized local inference for limited hardware",
    ],
    results: [
      "71% to 92% documented recommendation accuracy",
      "Meal-image detection and direct tracker entry",
      "Local dataset grounding and persistent session profiles",
    ],
    stack: ["Qwen", "LoRA/PEFT", "Streamlit", "Gemini API", "Python", "Docker"],
    github: "https://github.com/ChinmayBitne/NutriAssist-AI",
    cover: "/images/generated/nutriassist-cover.webp",
    image: "/images/nutriassist-chat.png",
    gallery: ["/images/nutriassist-chat.png", "/images/nutriassist-tracker.png"],
    visualAlt: "NutriAssist AI nutrition chat and meal tracking interface",
  },
  {
    slug: "ldws",
    title: "LDWS & Object Detection",
    kicker: "Driving-assistance research prototype",
    year: "2023–2026",
    status: "IEEE-published research",
    tracks: ["ai", "software"],
    summary:
      "A computer-vision prototype combining lane detection, object detection, approximate distance estimation, collision-in-path checks, and an ADAS-style overlay for low-end automobiles.",
    impact: "Research translated into a working multi-model inference prototype",
    challenge:
      "Road-safety assistance on constrained hardware requires coordinating multiple visual models while keeping latency and failure conditions visible.",
    contribution:
      "Co-authored the research and built the inference application combining lane and object detection, model backends, distance estimation, warnings, source selection, and recorded output.",
    decisions: [
      "Support ONNX and TensorRT backends",
      "Keep single-camera distance estimates explicitly approximate",
      "Show lane and collision state directly in the overlay",
      "Document that the prototype is not a certified driving system",
    ],
    results: [
      "File, webcam, and IP-camera inputs",
      "Lane, object, distance, and warning overlays",
      "IEEE publication connected to the research work",
    ],
    stack: ["Python", "YOLO", "OpenCV", "ONNX Runtime", "TensorRT", "CUDA"],
    github: "https://github.com/ChinmayBitne/LDWS-and-Object-Detection",
    cover: "/images/generated/ldws-cover.webp",
    image: "/images/ldws-demo.png",
    gallery: ["/images/ldws-demo.png"],
    visualAlt: "Road scene with detected lanes, a truck bounding box, and ADAS status overlays",
  },
  {
    slug: "emotion",
    title: "Emotional Tone & Readability",
    kicker: "NLP research application",
    year: "2026",
    status: "Completed",
    tracks: ["ai", "data"],
    summary:
      "A multi-label NLP system exploring whether linguistic complexity obscures emotional clarity by combining GoEmotions inference with readability measures.",
    impact: "27-emotion multi-label inference paired with real-time readability analysis",
    challenge:
      "Sentiment labels alone do not explain whether readers can easily interpret emotion when language becomes syntactically or lexically complex.",
    contribution:
      "Built the RoBERTa fine-tuning workflow, FastAPI inference layer, readability computation, clarity scoring, and browser interface.",
    decisions: [
      "Use multi-label rather than single-label emotion classification",
      "Keep readability and model confidence visible as separate signals",
      "Provide CPU fallback for local inference",
    ],
    results: ["27 GoEmotions labels", "Flesch and grade-level measures", "FastAPI application with a browser UI"],
    stack: ["RoBERTa", "PyTorch", "FastAPI", "GoEmotions", "Textstat"],
    github: "https://github.com/ChinmayBitne/Emotional-Tone-Readability-Analyzer",
    cover: "/images/generated/emotion-cover.webp",
    visualAlt: "Emotion confidence bars beside readability and clarity scores",
  },
  {
    slug: "disease",
    title: "Disease Risk & Readmission",
    kicker: "Healthcare machine-learning prototype",
    year: "2024",
    status: "Academic prototype",
    tracks: ["data"],
    summary:
      "A Flask application and notebook workflow for exploring multi-disease risk prediction using clinical-style tabular datasets and Random Forest models.",
    impact: "One interface spanning five disease-risk workflows",
    challenge:
      "Comparing disease-risk pipelines requires consistent preprocessing, model packaging, and an interface that exposes inputs without implying clinical certification.",
    contribution:
      "Prepared exploratory analysis and training notebooks, packaged model artifacts, and integrated five prediction workflows into a Flask interface.",
    decisions: [
      "Keep exploratory analysis alongside the application",
      "Present the system as an academic prototype, not medical advice",
      "Separate saved models from web request handling",
    ],
    results: ["Five risk workflows", "EDA and training notebooks", "Flask application for interactive inference"],
    stack: ["Python", "Pandas", "scikit-learn", "Random Forest", "Flask"],
    github: "https://github.com/ChinmayBitne/Predictive-Analysis-of-Various-Diseases-Risk-Readmission",
    cover: "/images/generated/disease-cover.webp",
    visualAlt: "Five connected healthcare data cards flowing into a risk model",
  },
  {
    slug: "weather",
    title: "Connected Weather Station",
    kicker: "IoT data workflow",
    year: "2024",
    status: "Hackathon project",
    tracks: ["data", "software"],
    summary:
      "An ESP8266 and Adafruit IO weather station collecting environmental readings for local display, remote monitoring, historical storage, and web visualization.",
    impact: "Sensor-to-dashboard workflow with automated web testing",
    challenge:
      "Environmental readings need to move reliably from constrained hardware into a form that can be monitored remotely and reviewed over time.",
    contribution:
      "Connected the device, data upload, PHP and MySQL web layer, visualization workflow, and Selenium-based interface tests as part of the Virtusa Jatayu project.",
    decisions: [
      "Separate device collection from web presentation",
      "Store historical readings for trend analysis",
      "Automate browser-level validation of the dashboard",
    ],
    results: ["Wi-Fi sensor ingestion", "Adafruit IO monitoring", "Historical database and web dashboard"],
    stack: ["ESP8266", "Adafruit IO", "Arduino", "PHP", "MySQL", "Selenium"],
    github: "https://github.com/ChinmayBitne/Weather-Station-with-Adafruit",
    cover: "/images/generated/weather-cover.webp",
    visualAlt: "Weather sensor readings traveling from an IoT device to a cloud dashboard",
  },
];

export const experience = [
  {
    period: "Apr 2024 — Jul 2024",
    role: "AI Engineer Intern",
    company: "Virtusa Corporation",
    location: "Hyderabad, India",
    summary:
      "Developed two mentor-guided RAG prototypes for internal use cases, working across document preparation, chunking, embeddings, retrieval, prompts, small language models, evaluation, Docker, CI/CD, and Google Cloud experimentation.",
    evidence: ["2 internal RAG use cases", "65% lower document retrieval latency", "62% to 89% semantic retrieval precision"],
  },
  {
    period: "Jul 2023",
    role: "Machine Learning Intern",
    company: "Ural Federal University",
    location: "Yekaterinburg, Russia",
    summary:
      "Led work on Alternovation during an international summer program, combining machine-learning cost estimation, furniture visualization, structured design inputs, and a collaborative presentation.",
    evidence: ["Five-person international team", "Best Project Award", "ML, visualization, and BI workflow"],
  },
  {
    period: "Jan 2023 — Jun 2023",
    role: "Campus Ambassador & RPA Project Developer",
    company: "UiPath",
    location: "Mumbai, India",
    summary:
      "Organized student RPA learning activities and built practical UiPath Studio automations, including a digital certificate generator and an Excel-to-PDF quotation workflow.",
    evidence: ["Campus learning and competitions", "Certificate automation", "Excel-to-PDF quotation workflow"],
  },
];

// The Data portfolio keeps the verified employers and official role titles,
// while emphasizing the data work that is most relevant to that audience.
export const dataExperience = [
  {
    period: "Apr 2024 — Jul 2024",
    role: "Data Analyst Intern",
    lens: "Document intelligence & retrieval analytics",
    company: "Virtusa Corporation",
    location: "Hyderabad, India",
    summary:
      "Prepared and analyzed document datasets for two mentor-guided internal prototypes. Compared chunking and retrieval configurations, monitored latency and relevance, and translated evaluation results into measurable improvements for semantic search.",
    evidence: ["Dataset preparation", "Retrieval KPI analysis", "62% to 89% semantic precision"],
  },
  {
    period: "Jul 2023",
    role: "Data Science Intern",
    lens: "Predictive analytics & business intelligence",
    company: "Ural Federal University",
    location: "Yekaterinburg, Russia",
    summary:
      "Led the data workstream for Alternovation by preparing structured furniture data, developing a cost-estimation model, and presenting product and pricing patterns through a Power BI dashboard to support the team’s recommendations.",
    evidence: ["Data preparation", "Cost-estimation analysis", "Power BI dashboard"],
  },
  {
    period: "Jan 2023 — Jun 2023",
    role: "Data Automation Developer",
    lens: "Reporting workflow automation",
    company: "UiPath",
    location: "Mumbai, India",
    summary:
      "Designed repeatable reporting workflows that validated structured spreadsheet inputs and transformed them into certificates and quotation PDFs, reducing manual document preparation through UiPath automation.",
    evidence: ["Spreadsheet validation", "Excel-to-PDF reporting", "UiPath automation"],
  },
];

export const capabilities = {
  ai: [
    { title: "Generative AI & NLP", items: ["LLMs", "Agentic AI", "RAG pipelines", "Prompt engineering", "Embeddings", "FAISS", "ChromaDB", "LangChain", "LlamaIndex", "LangGraph", "Fine-tuning (LoRA/PEFT)", "RoBERTa", "Hugging Face", "LLM evaluation", "Gemini Live"] },
    { title: "Computer Vision", items: ["YOLO", "OpenCV", "Lane detection", "Object detection", "ONNX Runtime", "TensorRT", "CUDA", "PyCUDA", "Real-time inference", "PyTorch", "TensorFlow", "Multimodal systems"] },
    { title: "Backend & MLOps", items: ["Python", "FastAPI", "Flask", "Django", "REST APIs", "Docker", "Kubernetes", "CI/CD", "GitHub Actions", "MLflow", "Weights & Biases", "Linux", "Model monitoring"] },
    { title: "Cloud, Data & Product", items: ["AWS", "Amazon Bedrock", "SageMaker", "EC2", "S3", "Lambda", "GCP Vertex AI", "SQL", "PostgreSQL", "Redis", "pgvector", "ETL pipelines", "Data warehousing", "Scikit-learn", "CatBoost", "Streamlit", "Gradio", "React", "TypeScript"] },
  ],
  data: [
    { title: "Analytics & BI", items: ["Tableau", "Power BI", "Dashboard design", "Data visualization", "Exploratory analysis", "Business intelligence", "KPI design", "Calculated fields", "Data storytelling"] },
    { title: "Programming & Statistics", items: ["Python", "SQL", "R", "Pandas", "NumPy", "Scikit-learn", "Statistical foundations", "Hypothesis testing", "Feature engineering", "Predictive modeling", "CatBoost", "Random Forest"] },
    { title: "Data Engineering", items: ["PostgreSQL", "MySQL", "MongoDB", "ETL pipelines", "Data cleaning", "Data transformation", "Data warehousing", "OLAP", "AWS Glue", "Amazon Redshift", "S3", "Lambda", "pgvector"] },
    { title: "Delivery & Systems", items: ["Jupyter", "Streamlit", "Gradio", "FastAPI", "Flask", "Docker", "Git", "GitHub Actions", "Linux", "GCP Vertex AI", "SageMaker", "REST APIs", "Selenium"] },
  ],
};

export const education = [
  {
    school: "Arizona State University",
    degree: "Master of Science in Information Technology",
    period: "Aug 2024 — May 2026",
    distinction: "4.00 GPA · With Distinction",
  },
  {
    school: "Sanjivani College of Engineering",
    degree: "Bachelor of Technology in Information Technology",
    period: "Aug 2020 — Jul 2024",
    distinction: "CGPA 8.54 / 10 · Savitribai Phule Pune University (SPPU)–affiliated autonomous college",
  },
];

export const coursework = {
  ai: ["Advanced Big Data Analytics / AI", "Natural Language Processing", "Machine Learning", "Deep Learning", "Artificial Intelligence", "Statistical Foundations"],
  data: ["Analyzing Big Data", "Advanced Database Management", "Data Visualization & Reporting", "Business Intelligence", "Data in the Cloud", "Big Data Analytics"],
};

export const certifications = [
  { issuer: "UiPath", title: "UiPath RPA Developer Certificate", year: "2023", summary: "RPA development from workflow fundamentals through production-ready UiPath automations.", skills: ["UiPath Studio", "Orchestrator", "UI automation", "Excel and PDF automation", "Selectors", "Exception handling", "RPA testing"], link: "https://drive.google.com/file/d/1ZRCCKMiJ4EgYBdNoKNSCujZAX1ICg6zt/view?usp=sharing" },
  { issuer: "Salesforce", title: "Salesforce Developer Virtual Internship", year: "2023", summary: "Eight-week developer program covering Salesforce configuration, automation, Apex, APIs, and Lightning Web Components.", skills: ["Apex", "Lightning Web Components", "Flows", "Security", "Testing and debugging", "Salesforce APIs"], link: "https://drive.google.com/file/d/1MgIU28gg84YOwnekMBsIV6tAoTc5Pc32/view?usp=sharing" },
  { issuer: "AWS Academy", title: "Data Engineering", year: "2025", summary: "Data ingestion, transformation, warehousing, analytics, and serverless data workflows on AWS.", skills: ["S3", "Glue", "Lambda", "Redshift", "ETL", "Data warehousing"], link: "https://www.credly.com/badges/31bb6ab6-3636-42f6-9500-13a4c03e21b1" },
  { issuer: "AWS Academy", title: "Machine Learning Foundations", year: "2025", summary: "Core machine-learning concepts, model preparation, evaluation, and AWS ML workflows.", skills: ["SageMaker", "Feature engineering", "Model training", "Evaluation", "Deployment"], link: "https://www.credly.com/badges/a23131c9-175c-45e5-875e-65554459aa99" },
  { issuer: "AWS Academy", title: "Machine Learning for NLP", year: "2025", summary: "Text preprocessing, classification, embeddings, sequence models, and AWS NLP services.", skills: ["NLP", "Text classification", "Embeddings", "AWS Comprehend", "Sequence models"], link: "https://www.credly.com/badges/bb1c73e1-f2c9-431a-a9c3-e52928f30ef4" },
  { issuer: "Google", title: "Google IT Automation with Python Professional Certificate", year: "2022", summary: "Seven-course program covering Python automation, Git, debugging, operating systems, and cloud configuration.", skills: ["Python", "Automation", "Git", "Debugging", "Configuration management", "Cloud basics"], link: "https://www.coursera.org/account/accomplishments/professional-cert/45PNDQCNAELP" },
  { issuer: "Google", title: "Crash Course on Python", year: "2022", summary: "Python syntax, control flow, functions, collections, and foundational object-oriented programming.", skills: ["Python", "Control flow", "Functions", "Data structures"], link: "https://www.coursera.org/account/accomplishments/verify/PH6BHU3DD2FA" },
  { issuer: "Google", title: "Introduction to Git and GitHub", year: "2022", summary: "Version control, branching, merging, remote repositories, and collaborative development workflows.", skills: ["Git", "GitHub", "Branching", "Collaboration"], link: "https://www.coursera.org/account/accomplishments/verify/HEWBWJPE6Z7W" },
  { issuer: "Google", title: "Using Python to Interact with the OS", year: "2022", summary: "File operations, processes, shell interaction, and system automation with Python.", skills: ["File I/O", "Subprocess", "Regular expressions", "Linux"], link: "https://www.coursera.org/account/accomplishments/verify/HA4QHDTFFM3L" },
  { issuer: "Google", title: "Troubleshooting and Debugging Techniques", year: "2022", summary: "Structured diagnosis of software, performance, and system failures.", skills: ["Root-cause analysis", "Debugging", "Logging", "Testing"], link: "https://www.coursera.org/account/accomplishments/verify/2Z5FFUQ5LQQN" },
  { issuer: "Google", title: "Configuration Management and the Cloud", year: "2022", summary: "Infrastructure automation, Puppet, cloud provisioning, and configuration at scale.", skills: ["Puppet", "Configuration as code", "Cloud provisioning", "Infrastructure management"], link: "https://www.coursera.org/account/accomplishments/verify/9BE67DWWRQNV" },
  { issuer: "Google", title: "Automating Real-World Tasks with Python", year: "2022", summary: "End-to-end Python automation using APIs, email, images, documents, and web services.", skills: ["REST APIs", "Email automation", "Image processing", "PDF handling"], link: "https://www.coursera.org/account/accomplishments/verify/PZFE4HP8VNJJ" },
  { issuer: "Coursera", title: "Web Applications with Django", year: "2022", summary: "Django models, views, templates, authentication, ORM, and web APIs.", skills: ["Django", "MVT", "ORM", "REST APIs", "Authentication"], link: "https://drive.google.com/file/d/17AsHlXv866tXakT0-4eDCDiiIRuacegG/view?usp=sharing" },
  { issuer: "GitHub", title: "GitHub Fundamentals", year: "2022", summary: "Repositories, pull requests, issues, Actions, and collaborative delivery practices.", skills: ["GitHub Actions", "Pull requests", "Issues", "CI/CD"], link: "https://drive.google.com/file/d/1hTifEvXWcMB8N4Rc_nBJoAyXvwTiUtsz/view?usp=sharing" },
  { issuer: "Udemy", title: "Hands-On Functional C#", year: "2022", summary: "Functional programming concepts in C# using LINQ, lambdas, immutability, and higher-order functions.", skills: ["C#", "LINQ", "Lambdas", "Functional patterns"], link: "https://drive.google.com/file/d/1E3HVRe1IXI_UkzI4NShXTvKVrK4fTmOc/view?usp=sharing" },
  { issuer: "MongoDB", title: "Introduction to MongoDB", year: "2022", summary: "Document databases, CRUD, aggregation, indexing, and schema design.", skills: ["MongoDB", "NoSQL", "Aggregation", "Indexing"], link: "https://drive.google.com/file/d/1YzTEO03LRjiRqJYpN6klm37KLvMI9hO6/view?usp=sharing" },
  { issuer: "Coursera", title: "Building Web Apps — TypeScript, Angular & React", year: "2022", summary: "Component-based frontend development and typed application architecture.", skills: ["TypeScript", "Angular", "React", "State management"], link: "https://drive.google.com/file/d/1o6XEN4r5ELFRT_bGFoIU2rlvdHowUeva/view?usp=sharing" },
  { issuer: "Coursera", title: "Beginning PHP", year: "2022", summary: "Server-side PHP, form handling, sessions, and MySQL connectivity.", skills: ["PHP", "MySQL", "Forms", "Sessions"], link: "https://drive.google.com/file/d/14ZLKrlbL0d7BD2gWFW8qR8HEeR09vp3V/view?usp=sharing" },
  { issuer: "Udemy", title: "Advanced Blender — Four-Week Course", year: "2022", summary: "3D modeling, materials, lighting, texturing, and product visualization.", skills: ["Blender", "3D modeling", "Materials", "Lighting", "Rendering"], link: "https://drive.google.com/file/d/16XB6e2jc7NpAxMsjBHdrHjASzDOiJTOq/view?usp=sharing" },
];

export const featuredCertificationTitles = {
  ai: [
    "Machine Learning Foundations",
    "Machine Learning for NLP",
    "Data Engineering",
    "Google IT Automation with Python Professional Certificate",
    "UiPath RPA Developer Certificate",
    "Introduction to MongoDB",
  ],
  data: [
    "Data Engineering",
    "Machine Learning Foundations",
    "Google IT Automation with Python Professional Certificate",
    "Crash Course on Python",
    "Introduction to MongoDB",
    "GitHub Fundamentals",
  ],
};

export const industryPrograms = [
  { company: "KPMG", title: "Data Analytics Virtual Experience", type: "Virtual simulation", summary: "Completed an industry simulation focused on analytical thinking, data quality, insight development, and communicating findings." },
  { company: "Accenture", title: "Data Analytics & Visualization Virtual Experience", type: "Virtual simulation", summary: "Worked through a consulting-style data workflow spanning cleaning, analysis, visualization, and presentation of business recommendations." },
  { company: "Salesforce", title: "Developer Virtual Internship", type: "Eight-week virtual program · 2023", summary: "Completed guided work in Salesforce fundamentals, process automation, Apex, testing, APIs, and Lightning Web Components." },
];

export const achievements = [
  {
    title: "IEEE Paper Publication",
    meta: "ICRTC 2023",
    summary: "Author of research on generative AI for lane departure, pedestrian detection, and autonomous-vehicle paving workflows.",
  },
  {
    title: "Virtusa Jatayu S3 Hackathon Winner",
    meta: "Predictive analytics",
    summary: "Led machine-learning pipeline development using connected weather-sensor data.",
  },
  {
    title: "Best Project Award",
    meta: "Ural Federal University",
    summary: "Recognized for Alternovation, an AI-assisted furniture visualization and cost-estimation prototype.",
  },
  {
    title: "Smart Pune Health Hackathon — Top 10 Finalist",
    meta: "Healthcare technology",
    summary: "Reached the final ten with a concept focused on improving healthcare accessibility through applied technology.",
  },
  {
    title: "Master’s Degree With Distinction",
    meta: "Arizona State University · 4.00 GPA",
    summary: "Completed the Master of Science in Information Technology with a 4.00 cumulative GPA and distinction.",
  },
];

export function getProject(slug) {
  return projects.find((project) => project.slug === slug);
}
