// All site content lives here — edit this file to update the portfolio.

export const profile = {
  firstName: 'parth',
  fullName: 'Parth Chaitanya',
  tagline: 'an ai & ml engineer building llm apps, agentic rag systems and ml pipelines',
  email: 'chaitanyaparth.17@gmail.com',
  location: 'Noida, India',
  // Hero portrait from the template. For reliability, download it into /public
  // (e.g. /public/portrait.png) and set this to '/portrait.png'. Set to null to show the 3D orb instead.
  portrait: 'https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png' as string | null,
  about:
    "I'm a B.Tech AI & ML student at Galgotias College, Noida. I build LLM-powered applications, agentic RAG systems and ML pipelines with Python, FastAPI, LangGraph and vector databases, and I ship them with Docker, CI/CD and automated tests. Let's build something intelligent together!",
};

export const socials = [
  { label: 'GitHub', href: 'https://github.com/parthchaitanya' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/parthchaitanya' },
  { label: 'X / Twitter', href: 'https://x.com/mtankparth' },
  { label: 'Linktree', href: 'https://linktr.ee/ParthChaitnya' },
];

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export type Tile = { name: string; group: string };

export const marqueeRow1: Tile[] = [
  { name: 'Python', group: 'Language' },
  { name: 'LangGraph', group: 'Agentic AI' },
  { name: 'FastAPI', group: 'Backend' },
  { name: 'Pinecone', group: 'Vector DB' },
  { name: 'OpenAI API', group: 'LLM' },
  { name: 'Groq', group: 'LLM' },
  { name: 'Tavily', group: 'Web Search' },
  { name: 'sentence-transformers', group: 'Embeddings' },
  { name: 'Scikit-learn', group: 'Machine Learning' },
  { name: 'Pandas', group: 'Data' },
  { name: 'NumPy', group: 'Data' },
];

export const marqueeRow2: Tile[] = [
  { name: 'React', group: 'Frontend' },
  { name: 'Tailwind CSS', group: 'Frontend' },
  { name: 'Docker', group: 'DevOps' },
  { name: 'GitHub Actions', group: 'CI / CD' },
  { name: 'SQLAlchemy', group: 'ORM' },
  { name: 'MySQL', group: 'Database' },
  { name: 'MongoDB', group: 'Database' },
  { name: 'Streamlit', group: 'Dashboards' },
  { name: 'TensorFlow', group: 'Deep Learning' },
  { name: 'pytest', group: 'Testing' },
];

export const skills = [
  {
    name: 'Generative AI',
    description:
      'LLM apps, retrieval-augmented generation and agentic workflows with LangGraph, semantic search on Pinecone, and the OpenAI, Groq and Tavily APIs.',
  },
  {
    name: 'Machine Learning',
    description:
      'Supervised and unsupervised learning, regression, classification, NLP and embeddings using Scikit-learn, TensorFlow, Pandas, NumPy and sentence-transformers.',
  },
  {
    name: 'Backend & APIs',
    description:
      'Production-style REST APIs with FastAPI and Flask, SQLAlchemy, OAuth 2.0 and APScheduler jobs, backed by MySQL, MongoDB and SQLite.',
  },
  {
    name: 'Frontend & Dashboards',
    description:
      'React and Tailwind CSS interfaces and Streamlit dashboards that put models in front of real users with fast, clear feedback.',
  },
  {
    name: 'DevOps & Testing',
    description:
      'Docker containers, GitHub Actions CI/CD pipelines and pytest suites, so projects run the same on a laptop as they do in a public demo.',
  },
];

export const experience = [
  {
    period: 'Jun 2026 – Jul 2026',
    role: 'Program Management Intern',
    org: 'NeGD, Ministry of Electronics & IT (MeitY)',
    description:
      'Built a dual-interface portal for project managers and developer teams, an LLM-powered document reader that scores project health from SharePoint data, and tested 6 government websites end to end (DPDP, LBSNAA, MoSJE, Sports, MoTA, UPSC).',
  },
  {
    period: 'Sep 2024 – Present',
    role: 'Technical Coordinator',
    org: 'GeeksForGeeks Campus Body',
    description:
      'Organised 2 major hackathons, coding bootcamps and tech seminars, engaging 500+ students across campus.',
  },
  {
    period: '2024 – Present',
    role: 'B.Tech, Artificial Intelligence & Machine Learning',
    org: 'Galgotias College of Engineering and Technology, Noida',
    description: 'Coursework and projects across machine learning, NLP, data engineering and software development.',
  },
];

export type Project = {
  name: string;
  subtitle: string;
  category: string;
  description: string;
  stat: { value: string; label: string };
  tech: string[];
  highlights: string[];
  github: string;
  live?: string;
  theme: [string, string, string];
};

const gh = (repo: string) => `https://github.com/parthchaitanya/${repo}`;

export const projects: Project[] = [
  {
    name: 'RemoteHunt',
    subtitle: 'AI Job-Search Assistant',
    category: 'Full-Stack AI',
    description:
      'A self-hosted assistant that aggregates remote roles, ranks them against your resume with embeddings, flags scams and tailors application material.',
    stat: { value: '20+', label: 'job sources aggregated' },
    tech: ['Python', 'FastAPI', 'SQLAlchemy', 'sentence-transformers', 'Groq', 'React', 'Tailwind', 'Docker', 'GitHub Actions'],
    highlights: [
      '6-stage pipeline: dedupe, scam detection, eligibility and match scoring',
      '0–100 ATS score with a guardrail that blocks fabricated claims',
      '60+ pytest tests in CI; public demo runs in under 512 MB RAM',
    ],
    github: gh('remotehunt'),
    live: 'https://remotehunt-demo.onrender.com',
    theme: ['#18011F', '#B600A8', '#7621B0'],
  },
  {
    name: 'HR Policy Copilot',
    subtitle: 'Enterprise Agentic RAG System',
    category: 'Agentic RAG',
    description:
      'An HR assistant that answers employee policy questions from a private Pinecone knowledge base, grading its own evidence before it answers.',
    stat: { value: '4', label: 'end-to-end scenarios validated' },
    tech: ['LangGraph', 'FastAPI', 'Pinecone', 'OpenAI', 'Tavily', 'SQLite', 'Docker'],
    highlights: [
      'Query routing, LLM evidence grading, rewriting and bounded retries',
      'Private-first retrieval with Tavily web search only as a fallback',
      'Secured ingestion endpoints with a SQLite audit trail',
    ],
    github: gh('Enterprise-HR-Policy-Employee-Support-Agentic-RAG-Copilot'),
    theme: ['#07121F', '#1D6FB8', '#7621B0'],
  },
  {
    name: 'Retail AI Assistant',
    subtitle: 'Conversational Shopping Chatbot',
    category: 'LLM App',
    description:
      'A retail chatbot that streams answers in real time through the Groq API inside a Gradio interface, using dynamic prompts to help shoppers.',
    stat: { value: 'Live', label: 'token-by-token streaming' },
    tech: ['Python', 'Groq API', 'Gradio', 'Prompt Engineering', 'Jupyter'],
    highlights: [
      'Real-time streamed responses for a natural chat feel',
      'Dynamic system prompts tuned to shopper questions',
      'Surfaces current sales and offers in the conversation',
    ],
    github: gh('Conversational_AI_Assistant'),
    theme: ['#1F0A01', '#BE4C00', '#B600A8'],
  },
  {
    name: 'Brochure Generator',
    subtitle: 'AI Company Brochure Builder',
    category: 'LLM App',
    description:
      'A Streamlit app that reads a company website, lets an LLM pick the pages that matter and writes a polished markdown brochure.',
    stat: { value: '1 URL', label: 'in, a full brochure out' },
    tech: ['Python', 'LLM', 'Streamlit', 'BeautifulSoup', 'Markdown'],
    highlights: [
      'Extracts and cleans content from a company website',
      'LLM filters links to the relevant pages (about, careers, products)',
      'Generates a structured markdown brochure in seconds',
    ],
    github: gh('AI-Company-Brochure-Generator'),
    theme: ['#0A1A12', '#12805C', '#1D6FB8'],
  },
  {
    name: 'Churn Prediction',
    subtitle: 'Bank Customer Attrition Model',
    category: 'Deep Learning',
    description:
      'An artificial neural network that predicts whether a bank customer will leave, deployed as a Streamlit app for entering customer details.',
    stat: { value: 'ANN', label: 'built with TensorFlow & Keras' },
    tech: ['TensorFlow', 'Keras', 'Pandas', 'Scikit-learn', 'Streamlit'],
    highlights: [
      'Encoding and scaling pipeline for customer features',
      'Neural network trained to classify attrition risk',
      'Interactive Streamlit form for instant predictions',
    ],
    github: gh('Customer-Churn-Prediction'),
    theme: ['#14011F', '#7621B0', '#1D6FB8'],
  },
  {
    name: 'FFI Predictor',
    subtitle: 'Forest Fire Risk Estimation',
    category: 'Machine Learning',
    description:
      'A regression model that predicts the Forest Fire Index from weather data, with a Streamlit dashboard for real-time predictions.',
    stat: { value: 'R² > 0.98', label: '~22% lower RMSE after benchmarking' },
    tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Streamlit'],
    highlights: [
      'Benchmarked 4+ algorithms on 5,000+ weather records',
      'Preprocessing, scaling and visual analysis of the dataset',
      'Streamlit dashboard with under 1 second prediction latency',
    ],
    github: gh('FFI-Predictor'),
    theme: ['#1F0701', '#BE4C00', '#E0A100'],
  },
];
