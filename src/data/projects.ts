// Fuente única de contenido: para agregar un proyecto, añade un objeto aquí.
// El resto de la página (filtros, contadores, tarjetas) se actualiza sola.

export const GITHUB_USER = "astorress";
export const EMAIL = "sebastiantorres8800@gmail.com";
export const gh = (repo: string) => `https://github.com/${GITHUB_USER}/${repo}`;

export type Category =
  | "Forecasting & ML"
  | "Librerías desarrolladas"
  | "LLMs y agentes"
  | "Big Data"
  | "Bases de datos"
  | "MLOps"
  | "Aprendizaje desde cero"
  | "Web3"
  | "Open source";

export interface Project {
  name: string;
  repo?: string; // nombre del repo en GitHub (si es público)
  category: Category;
  alsoIn?: Category[]; // categorías extra en las que también cuenta para el filtro
  summary: string;
  tags: string[];
  featured?: boolean;
  stat?: { value: string; label: string }; // cifra protagonista del caso
  points?: string[]; // 2-3 puntos clave del proyecto
  links?: { label: string; href: string }[];
}

export const categories: Category[] = [
  "Forecasting & ML",
  "Librerías desarrolladas",
  "LLMs y agentes",
  "Big Data",
  "Bases de datos",
  "MLOps",
  "Aprendizaje desde cero",
  "Web3",
  "Open source",
];

export const projects: Project[] = [
  // ── Forecasting & ML ──────────────────────────────────────────────
  {
    name: "Mixture of Experts para demanda eléctrica",
    category: "Forecasting & ML",
    alsoIn: ["Librerías desarrolladas"],
    featured: true,
    summary:
      "De la investigación a la librería: el pipeline de mi tesis pronostica la demanda horaria del SIN de Colombia con Mixture of Experts, y moeforecast lo convierte en una librería con API estilo scikit-learn.",
    stat: { value: "9", label: "notebooks reproducibles" },
    points: [
      "Pipeline: datos de XM → clustering de perfiles → expertos → gating",
      "Librería: regímenes, gating duro, suave y adaptativo",
      "Corre en Colab, Conda, pip o Docker",
    ],
    tags: ["Python", "MoE", "Series de tiempo", "scikit-learn API", "Docker"],
    links: [
      { label: "MoEForecaster · tesis", href: gh("MoEForecaster") },
      { label: "moeforecast · librería", href: gh("moeforecast") },
    ],
  },
  {
    name: "moeforecast-validation",
    repo: "moeforecast-validation",
    category: "Forecasting & ML",
    summary:
      "Workspace Docker/Jupyter que valida la librería publicada sobre datasets públicos reales de distintos dominios y frecuencias.",
    tags: ["Docker", "Jupyter", "Validación"],
  },
  {
    name: "mlops-moe-demand-forecasting",
    repo: "mlops-moe-demand-forecasting",
    category: "Forecasting & ML",
    summary:
      "El modelo MoE para la demanda del SIN llevado a un flujo reproducible con Docker y notebooks.",
    tags: ["Python", "Docker", "MoE"],
  },
  {
    name: "llm-lab",
    repo: "llm-lab",
    category: "LLMs y agentes",
    featured: true,
    summary:
      "Laboratorio para construir y entrenar un LLM desde cero: tokenización, corpus, embeddings, transformer (RoPE, RMSNorm), entrenamiento, LoRA, evaluación e interpretabilidad, con la matemática explicada.",
    stat: { value: "9", label: "notebooks, de tokens a LoRA" },
    points: ["MiniGPT con atención, RoPE y RMSNorm escritos a mano", "Pipeline real de corpus: limpieza, dedup y splits sin fuga", "Versión SMALL (Colab Free) y LARGE (A100)"],
    tags: ["PyTorch", "Transformers", "LoRA", "NLP"],
  },

  {
    name: "langgraph-agent-lab",
    repo: "langgraph-agent-lab",
    category: "LLMs y agentes",
    featured: true,
    summary:
      "Laboratorio de LangChain y LangGraph: un agente ReAct armado a mano con StateGraph, herramientas, aprobación humana con interrupt, memoria persistente en SQLite y soporte para LangGraph Studio.",
    stat: { value: "HITL", label: "humano en el ciclo con interrupt" },
    points: ["Proveedor configurable: OpenAI o Anthropic", "Pausa y pide aprobación antes de guardar notas", "Pruebas con un modelo simulado: sin red ni API key"],
    tags: ["Python", "LangGraph", "LangChain", "Docker"],
  },
  {
    name: "Agentes LLM",
    category: "LLMs y agentes",
    summary:
      "Bases de despliegue, como infraestructura como código, de dos agentes de código abierto (OpenClaw y Hermes Agent) en Amazon Lightsail, con Claude en Amazon Bedrock, uso por Telegram y secretos en Secrets Manager.",
    tags: ["AWS Lightsail", "Bedrock", "Serverless Framework", "IaC", "Telegram"],
    links: [
      { label: "openclaw-lightsail", href: gh("openclaw-lightsail") },
      { label: "hermes-agent-lightsail", href: gh("hermes-agent-lightsail") },
    ],
  },

  // ── Big Data ──────────────────────────────────────────────────────
  {
    name: "big-data-architecture",
    repo: "big-data-architecture",
    category: "Big Data",
    featured: true,
    summary:
      "Plataforma big data de punta a punta (Hadoop, MapReduce, Spark y Kafka) sobre un caso real: 1.000 medidores inteligentes AMI y 2,88 millones de lecturas.",
    stat: { value: "2,88 M", label: "lecturas de medidores AMI" },
    points: ["1.000 medidores reportando cada 15 minutos", "Batch con Hadoop/Spark y streaming con Kafka", "Cortes, fraudes y medidores dañados simulados"],
    tags: ["Hadoop", "Spark", "Kafka", "AMI"],
  },
  {
    name: "hadoop-hdfs-yarn-architecture",
    repo: "hadoop-hdfs-yarn-architecture",
    category: "Big Data",
    summary:
      "Hadoop distribuido: HDFS con alta disponibilidad (dos NameNodes, JournalNodes, ZooKeeper), YARN, MapReduce, tolerancia a fallos y topología de racks.",
    tags: ["HDFS", "YARN", "ZooKeeper", "Docker"],
  },
  {
    name: "spark-processing-architecture",
    repo: "spark-processing-architecture",
    category: "Big Data",
    summary:
      "Spark como motor distribuido: driver y executors, Catalyst, shuffle, AQE, Delta Lake, Structured Streaming, MLlib y History Server.",
    tags: ["Spark", "Delta Lake", "Streaming", "MLlib"],
  },
  {
    name: "kafka-streaming-architecture",
    repo: "kafka-streaming-architecture",
    category: "Big Data",
    summary:
      "Kafka con KRaft: particiones, replicación, productores confiables, consumer groups, transacciones, compactación y resiliencia.",
    tags: ["Kafka", "KRaft", "Streaming"],
  },

  // ── Bases de datos ────────────────────────────────────────────────
  {
    name: "mongodb-replication-architecture",
    repo: "mongodb-replication-architecture",
    category: "Bases de datos",
    summary:
      "Replica set de MongoDB con tres nodos, elección automática del PRIMARY y una app en Python que muestra qué nodo atiende cada operación.",
    tags: ["MongoDB", "Replicación", "pymongo"],
  },
  {
    name: "mongodb-sharding-architecture",
    repo: "mongodb-sharding-architecture",
    category: "Bases de datos",
    summary:
      "Clúster fragmentado: mongos, config server y dos shards repartiéndose una colección; la app indica a qué shard llega cada operación.",
    tags: ["MongoDB", "Sharding", "pymongo"],
  },
  {
    name: "mongodb-vector-embeddings",
    repo: "mongodb-vector-embeddings",
    category: "LLMs y agentes",
    summary:
      "Búsqueda semántica con $vectorSearch sobre Don Quijote de la Mancha usando sentence-transformers.",
    tags: ["MongoDB", "Embeddings", "Vector search"],
  },
  {
    name: "postgresql-replication-architecture",
    repo: "postgresql-replication-architecture",
    category: "Bases de datos",
    summary:
      "Streaming replication con un PRIMARY y dos STANDBY, failover manual sin detener la app y reincorporación con pg_rewind.",
    tags: ["PostgreSQL", "Replicación", "Failover"],
  },

  // ── MLOps ─────────────────────────────────────────────────────────
  {
    name: "mlops-demand-forecasting",
    repo: "mlops-demand-forecasting",
    category: "MLOps",
    featured: true,
    summary:
      "El mismo proyecto MLOps en dos versiones comparables: open source (MLflow, Airflow, Great Expectations, Optuna, Evidently) y AWS (SageMaker, Glue, Athena, Lambda, Serverless Framework).",
    stat: { value: "2", label: "stacks, el mismo problema" },
    points: ["Open source: MLflow, Airflow, Optuna, Evidently", "AWS: SageMaker, Glue, Athena, Lambda", "Drift, serving y reentrenamiento automático"],
    tags: ["MLflow", "Airflow", "AWS", "LightGBM", "Drift"],
  },
  {
    name: "mlops-customer-churn",
    repo: "mlops-customer-churn",
    category: "MLOps",
    summary:
      "Pipeline MLOps de churn de clientes desplegado en AWS con Serverless Framework y contenedor de desarrollo.",
    tags: ["AWS", "Serverless", "IaC"],
  },

  // ── Aprendizaje desde cero ────────────────────────────────────────
  {
    name: "ml-from-scratch",
    repo: "ml-from-scratch",
    category: "Aprendizaje desde cero",
    summary:
      "ML, Deep Learning y Reinforcement Learning desde la regresión lineal hasta Transformers: intuición, demostración matemática e implementación.",
    tags: ["Jupyter", "NumPy", "Deep Learning", "RL"],
  },
  {
    name: "math-for-ml",
    repo: "math-for-ml",
    category: "Aprendizaje desde cero",
    summary:
      "Álgebra lineal, cálculo vectorial y estadística con NumPy y SymPy, visualizados en 2D y 3D y conectados con su uso en ML.",
    tags: ["NumPy", "SymPy", "Estadística"],
  },
  {
    name: "algoritmos-from-scratch",
    repo: "algoritmos-from-scratch",
    category: "Aprendizaje desde cero",
    summary:
      "Complejidad, búsqueda, ordenamiento, grafos, compresión, optimización, modelos generativos y computación cuántica.",
    tags: ["Algoritmos", "Optimización", "Cuántica"],
  },
  {
    name: "data-science-lab",
    repo: "data-science-lab",
    category: "Aprendizaje desde cero",
    summary:
      "Casos prácticos de data science: regresión, clasificación, AutoML, deep learning, visión artificial y LLMs.",
    tags: ["scikit-learn", "PyTorch", "Hugging Face", "AutoML"],
  },
  {
    name: "dataxm-js",
    repo: "dataxm-js",
    category: "Librerías desarrolladas",
    summary:
      "Cliente JavaScript para la API pública de XM (sistema eléctrico colombiano), inspirado en pydataxm.",
    tags: ["JavaScript", "API", "XM"],
  },

  // ── Web3 ──────────────────────────────────────────────────────────
  {
    name: "Speedrun Ethereum",
    category: "Web3",
    summary:
      "Los seis retos de Scaffold-ETH 2 resueltos: NFT, staking descentralizado, token vendor, dice game, DEX y state channels.",
    tags: ["Solidity", "Hardhat", "Scaffold-ETH 2", "React"],
    links: [
      { label: "00 · NFT", href: gh("speedrun-eth-00-challenge-simple-NFT-example") },
      { label: "01 · Staking", href: gh("speedrun-eth-01-challenge-decentralized-staking-app") },
      { label: "02 · Token Vendor", href: gh("speedrun-eth-02-challenge-token-vendor") },
      { label: "03 · Dice Game", href: gh("speedrun-eth-03-chalenge-dice-game") },
      { label: "04 · DEX", href: gh("speedrun-eth-04-challenge-build-dex") },
      { label: "05 · State Channel", href: gh("speedrun-eth-05-challenge-a-state-channel-application") },
    ],
  },

  // ── Open source ───────────────────────────────────────────────────
  {
    name: "matplotlib (fork)",
    repo: "matplotlib",
    category: "Open source",
    summary: "Fork de matplotlib para estudiar su código y explorar contribuciones.",
    tags: ["Python", "matplotlib"],
  },
];


export const skills: { group: string; items: string[] }[] = [
  { group: "IA & ML", items: ["PyTorch", "TensorFlow", "Keras", "scikit-learn", "LangChain", "Amazon Bedrock", "SageMaker", "Transformers", "Mixture of Experts", "Agentes LLM", "RAG"] },
  { group: "Cloud & arquitectura", items: ["AWS Lambda", "SQS · SNS", "S3", "DynamoDB", "Aurora", "Serverless Framework", "Event-driven", "Docker"] },
  { group: "DevOps", items: ["Docker", "Kubernetes", "CI/CD con Jenkins y GitLab CI", "Git trunk-based", "Monitoreo", "Infraestructura como código"] },
  { group: "Backend & APIs", items: ["Python", "Node.js", "TypeScript", "REST", "GraphQL", "WebSocket"] },
  { group: "Datos", items: ["PostgreSQL", "MySQL", "MongoDB", "Spark", "Kafka", "Airflow", "ETL / ELT", "IoT y medición inteligente"] },
  { group: "Frontend", items: ["TypeScript", "JavaScript", "Vue", "Vue Router", "Quasar", "React"] },
];

export const ORCID = "https://orcid.org/0009-0007-8381-8981";
export const CVLAC = "https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0002216327";

// Fuente: CvLAC (Minciencias)
export const education = [
  {
    period: "2024 — 2026",
    title: "Maestría en Inteligencia Artificial Aplicada",
    place: "Universidad de Antioquia",
    detail: "Investigación en pronóstico de demanda eléctrica de corto plazo: Transformers con autoatención, ensambles Mixture of Experts y optimización de hiperparámetros con metaheurísticas, para que el modelado sea sistemático y reproducible.",
  },
  {
    period: "2023 — 2024",
    title: "Especialización en Analítica y Ciencia de Datos",
    place: "Universidad de Antioquia",
    detail: "Trabajo: Predicción de la demanda de energía eléctrica usando modelos de inteligencia artificial para series temporales.",
  },
  {
    period: "2014 — 2020",
    title: "Pregrado en Ingeniería Eléctrica",
    place: "Universidad Nacional de Colombia, sede Medellín",
    detail: "Sistemas de potencia, control y sistemas dinámicos.",
  },
];

export const complementary = [
  "Mathematics for Machine Learning: Multivariate Calculus y Linear Algebra · Imperial College London",
  "Diplomado en Análisis de Datos y Machine Learning en Python · Universidad de Antioquia",
  "AWS Cloud Technical Essentials · Amazon Web Services",
];

export const currentFocus = [
  "Pronóstico de series de tiempo",
  "ML y DL",
  "Agentes LLM",
  "MLOps",
  "Optimización computacional",
];

export const publications = [
  {
    title: "Short-Term Electricity Demand Forecasting: A Comparative Evaluation of Models Based on Performance Criteria and Future Research Directions",
    venue: "Processes (MDPI)",
    year: "2026",
    href: "https://doi.org/10.3390/pr14142265",
  },
  {
    title: "Diseño y simulación de estimadores de estado lineales y no lineales en un modelo de convertidor de potencia DC/DC",
    venue: "Revista Politécnica, vol. 18, núm. 36, pp. 140-161",
    year: "2022",
    href: "https://doi.org/10.33571/rpolitec.v18n36a11",
  },
];

// Memorias de congresos (capítulo de memoria completo y ponencia). Fuente: CvLAC
export const proceedings = [
  {
    title: "Estimadores de Estado en Convertidores de Potencia DC/DC: Revisión de Algunas Técnicas y Trabajos Futuros",
    venue: "CIMM 2021, X Congreso Internacional de Ingenierías Mecánica, Mecatrónica y Automatización · Bogotá",
    year: "2021",
  },
  {
    title: "Análisis y simulación dinámica de la reacción de armadura en máquinas de corriente continua",
    venue: "IX-CIMM VII-CIIMA 2019, Congreso Internacional de Ingeniería Mecánica, Mecatrónica y Automatización · Bogotá",
    year: "2019",
  },
];
