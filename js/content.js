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
      { label: 'Technology Stack', href: '#skills' },
      { label: 'How We Work', href: '#process' },
      { label: 'Contact', href: '#contact' },
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
      { icon: '⚡', title: 'Production-Ready', desc: 'Systems built to scale in real-world environments, not just demos' },
      { icon: '🧠', title: 'AI-First', desc: 'Every solution is designed with intelligence at its core' },
      { icon: '🎯', title: 'Business-Aligned', desc: 'We start with your goals, not the technology' },
      { icon: '☁️', title: 'Cloud-Native', desc: 'Built on scalable, modern cloud infrastructure' },
    ],
  },

  /* ── Services ── */
  services: {
    eyebrow: 'What We Build',
    heading: 'Services That <span class="gradient-text">Transform</span> Your Business',
    sub: 'From intelligent automation to large-scale data pipelines — we design and deliver end-to-end AI systems tailored to your unique challenges.',
    items: [
      {
        icon: '🤖',
        title: 'AI Agent Development',
        desc: 'Autonomous agents powered by large language models that handle complex workflows, decision-making, and multi-step tasks with minimal human intervention.',
        tags: ['LangChain', 'LLMs', 'n8n'],
      },
      {
        icon: '💬',
        title: 'Chatbot Development',
        desc: 'Production-ready conversational AI with deep business context, custom knowledge bases, and seamless integration into your existing platforms.',
        tags: ['RAG', 'NLP', 'FastAPI'],
      },
      {
        icon: '⚙️',
        title: 'ML Pipeline Engineering',
        desc: 'End-to-end machine learning pipelines — from data ingestion and preprocessing to model training, evaluation, and deployment at scale.',
        tags: ['PyTorch', 'Airflow', 'Docker'],
      },
      {
        icon: '📊',
        title: 'Data Engineering',
        desc: 'Robust data infrastructure with real-time streaming, transformation, and storage solutions that make your data reliable, accessible, and analysis-ready.',
        tags: ['Kafka', 'Elasticsearch', 'NoSQL'],
      },
      {
        icon: '☁️',
        title: 'Cloud AI Infrastructure',
        desc: 'Scalable, secure AI deployment on Microsoft Azure. We architect and manage the cloud infrastructure your AI systems need to run reliably in production.',
        tags: ['Azure', 'Docker', 'Kubernetes'],
      },
      {
        icon: '🔍',
        title: 'Intelligent Document Processing',
        desc: 'Automated extraction, classification, and analysis of documents using OCR and AI — turning unstructured content into structured, actionable data.',
        tags: ['Tesseract OCR', 'NLP', 'Python'],
      },
    ],
  },

  /* ── Technology Stack ── */
  tech: {
    eyebrow: 'Technology Stack',
    heading: 'Built With <span class="gradient-text">Industry-Leading</span> Tools',
    sub: 'A carefully selected set of technologies proven to deliver robust, scalable AI systems in production environments.',
    items: [
      { icon: '🤖', name: 'OpenAI' },
      { icon: '🔗', name: 'LangChain' },
      { icon: '🐍', name: 'Python' },
      { icon: '🔥', name: 'PyTorch' },
      { icon: '☁️', name: 'Azure' },
      { icon: '⚡', name: 'FastAPI' },
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
        desc: 'Rapid, iterative development with constant feedback loops. We build, test, and refine until the system performs exactly as intended — and handles edge cases gracefully.',
      },
      {
        num: '04',
        title: 'Deploy & Scale',
        desc: 'Seamless deployment to production cloud infrastructure with monitoring, logging, and the foundations needed to scale as your business grows.',
      },
    ],
  },

  /* ── Contact ── */
  contact: {
    eyebrow: 'Get In Touch',
    heading: 'Ready to Build Something <span class="gradient-text">Intelligent?</span>',
    sub: 'Tell us about your project and we\'ll get back to you within 24 hours. No commitment needed — just a conversation about what\'s possible.',
    info: [
      { icon: '📍', label: 'Location', value: 'Based in Greece, working globally' },
      { icon: '💼', label: 'Platform', value: 'Available on Upwork' },
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
          { label: 'Process', href: '#process' },
        ],
      },
      {
        title: 'Services',
        links: [
          { label: 'AI Agents', href: '#services' },
          { label: 'Chatbots', href: '#services' },
          { label: 'ML Pipelines', href: '#services' },
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
