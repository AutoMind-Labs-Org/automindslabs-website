/* =====================================================
   content.js
   Edit this file to update all website text & data.
   ===================================================== */

window.CONTENT = {

  /* ── Site Meta ── */
  meta: {
    title: 'AutoMinds Labs — AI Engineering Agency',
  },

  /* ── Navigation ── */
  nav: {
    brand: 'AutoMinds Labs',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Services', href: '#services' },
      { label: 'Tech Stack', href: '#skills' },
      { label: 'How We Work', href: '#process' },
    ],
    cta: { label: 'Work with Us', href: '#contact' },
  },

  /* ── Hero ── */
  hero: {
    heading: 'Turn Your Data Into <span class="gradient-text">Autonomous AI</span> Systems',
    sub: 'We build intelligent, production-ready systems that combine Generative AI, machine learning, and scalable cloud infrastructure — so your business runs smarter, faster, and at scale.',
    cta1: { label: 'Start a Project →', href: '#contact' },
    cta2: { label: 'Explore Services', href: '#services' },
  },

  /* ── About ── */
  about: {
    eyebrow: 'About Us',
    heading: 'Engineering AI That <span class="gradient-text">Actually Works</span><br>in Production',
    lead: 'We are an AI engineering agency that turns complex data and manual workflows into autonomous, production-grade systems — built to create real, measurable impact.',
    bullets: [
      'We start with your problem, not the technology — framing the right solution before writing a single line of code.',
      'We combine Generative AI, machine learning, and cloud infrastructure into cohesive end-to-end systems.',
      'We ship production-ready — not prototypes. Every system is designed to scale and perform in the real world.',
    ],
    cta: { label: 'Work With Us →', href: '#contact' },
    stats: [
      { icon: '⚡', title: 'Production-Ready', desc: 'Systems built to scale in real-world environments' },
      { icon: '🧠', title: 'AI-First', desc: 'Every solution is designed with intelligence at its core' },
      { icon: '🎯', title: 'Business-Aligned', desc: 'We start with your goals, not the technology' },
      { icon: '☁️', title: 'Cloud-Native', desc: 'Built scalable solutions on your cloud infrastructure' },
    ],
  },

  /* ── Services ── */
  services: {
    eyebrow: 'What We Build',
    heading: 'Services That <span class="gradient-text">Transform</span> Your Business',
    sub: 'From intelligent automation to large-scale data pipelines — We design and deliver end-to-end AI systems tailored to your unique challenges.',
    items: [
      {
        icon: '🤖',
        title: 'AI Agent Development',
        desc: 'Autonomous agents powered by large language models that handle complex workflows, decision-making, and multi-step tasks with minimal human intervention.',
        tags: ['LangGraph', 'LLM Providers', 'MCP', 'n8n'],
      },
      {
        icon: '💬',
        title: 'Chatbot Development',
        desc: 'Production-ready conversational AI with deep business context, custom auto-updated knowledge bases, and seamless integration into your existing platforms.',
        tags: ['RAG', 'Hybrid Search', 'NLP', 'Monitoring', 'API'],
      },
      {
        icon: '⚙️',
        title: 'ML Engineering',
        desc: 'End-to-end machine learning pipelines — from data ingestion and preprocessing to model training, evaluation, and deployment at scale.',
        tags: ['PyTorch', 'sklearn', 'Neural Networks'],
      },
      {
        icon: '📊',
        title: 'Data Engineering',
        desc: 'Robust data infrastructure with real-time streaming, transformation, and storage solutions that make your data reliable, accessible, and analysis-ready.',
        tags: ['Kafka', 'Elasticsearch', 'Airflow', 'PySpark'],
      },
      {
        icon: '☁️',
        title: 'Cloud AI Infrastructure',
        desc: 'Scalable, secure AI deployment on Microsoft Azure. We architect and manage the cloud infrastructure your AI systems need to run reliably in production.',
        tags: ['Azure', 'Docker'],
      },
      {
        icon: '🔍',
        title: 'Intelligent Document Processing',
        desc: 'Automated extraction, classification, and analysis of documents using OCR and AI — turning unstructured content into structured, actionable data.',
        tags: ['Tesseract OCR', 'NLP', 'LLM Base tools'],
      },
    ],
  },

  /* ── Tech Stack ── */
  tech: {
    eyebrow: 'Tech Stack',
    heading: 'Built With <span class="gradient-text">Industry-Leading</span> Tools',
    sub: 'A carefully selected set of technologies proven to deliver robust, scalable AI systems in production environments.',
    items: [
      { icon: '🤖', name: 'LLM Providers<br><br>OpenAI, Anthropic, HuggingFace' },
      { icon: '🔗', name: 'Agentic Orchestrator<br><br>LangGraph, n8n, crewai' },
      { icon: '🐍', name: 'Programming<br><br>Python, SQL, PySpark' },
      { icon: '🔥', name: 'ML Frameworks<br><br>PyTorch, TensorFlow' },
      { icon: '☁️', name: 'Cloud Providers<br><br>Azure' },
      { icon: '⚡', name: 'App Development<br><br>FastAPI, Flask' },
    ],
  },

  /* ── Process ── */
  process: {
    eyebrow: 'How We Work',
    heading: 'A Process Built for <span class="gradient-text">Real Results</span>',
    sub: 'Good AI starts with clear thinking. Our process ensures we solve the right problem, the right way — every time.',
    steps: [
      {
        num: '01',
        title: 'Discovery & Framing',
        desc: 'Before writing a single line of code, we work with your team to deeply understand the problem, constraints, and goals. We define success metrics and identify the right level of complexity.',
      },
      {
        num: '02',
        title: 'Architecture & Design',
        desc: 'We design a scalable, practical architecture that balances technical capability with business alignment. Every decision is made with production readiness in mind.',
      },
      {
        num: '03',
        title: 'Build & Iterate',
        desc: 'Rapid, iterative development with constant feedback loops. We build, test, and refine until the system performs exactly as intended handling edge cases gracefully.',
      },
      {
        num: '04',
        title: 'Deploy & Scale',
        desc: 'Seamless deployment to production on-premises or cloud infrastructure with monitoring, logging, and the foundations needed to scale as your business grows.',
      },
    ],
  },

  /* ── Contact ── */
  contact: {
    eyebrow: 'Get In Touch',
    heading: 'Ready to Build Something <span class="gradient-text">Intelligent?</span>',
    sub: 'Tell us about your project and we will get back to you within 24 hours. No commitment needed — just a conversation about what is possible.',
    info: [
      { icon: '📍', label: 'Location', value: 'Based in Greece, working globally' },
      { icon: '💼', label: 'Platform', value: 'Available on Upwork'},
      { icon: '⚡', label: 'Response Time', value: 'Responds within 24 hours' },
    ],
    form: {
      nameLabel: 'Your Name',
      namePlaceholder: 'John Smith',
      emailLabel: 'Email Address',
      emailPlaceholder: 'john@company.com',
      projectLabel: 'What are you looking to build?',
      projectPlaceholder: 'e.g. AI chatbot, data pipeline, automation system...',
      messageLabel: 'Project Details',
      messagePlaceholder: 'Tell us about your project, goals, and timeline...',
      submit: 'Send Message →',
    },
  },

  /* ── Footer ── */
  footer: {
    brandDesc: 'AI engineering agency building intelligent, production-ready systems that drive real business impact.',
    copyright: '© 2026 AutoMinds Labs',
    columns: [
      {
        title: 'Navigation',
        links: [
          { label: 'About', href: '#about' },
          { label: 'Services', href: '#services' },
          { label: 'Tech Stack', href: '#skills' },
          { label: 'How We Work', href: '#process' },
        ],
      },
      {
        title: 'Services',
        links: [
          { label: 'AI Agents', href: '#services' },
          { label: 'Chatbots', href: '#services' },
          { label: 'ML Engineering', href: '#services' },
          { label: 'Data Engineering', href: '#services' },
        ],
      },
      {
        title: 'Connect',
        links: [
          { label: 'Upwork Profile', href: 'https://www.upwork.com/agencies/2028914778138616291/', external: true },
          { label: 'Contact Us', href: '#contact' },
        ],
      },
    ],
  },

};
