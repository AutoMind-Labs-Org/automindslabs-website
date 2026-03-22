# AutoMinds Labs — Website

Static website for AutoMinds Labs, an AI engineering agency. Built with plain HTML, CSS, and JavaScript — no build tools or frameworks required.

---

## Project Structure

```
automindslabs-website/
├── index.html        # Main HTML structure
├── css/
│   └── styles.css    # All styles and responsive rules
├── js/
│   ├── content.js    # Site content & configuration (edit this to update text)
│   ├── script.js     # Scroll animations, nav behavior, form handling
│   └── torus.js      # 3D rotating ring visual (Three.js)
└── images/
    ├── automind-labs-logo.png   # Logo used in navbar and footer
    └── automind-labs-logo.ico  # Favicon (browser tab icon)
```

---

## Page Sections

| Section | ID | What it shows |
|---|---|---|
| **Navigation** | `#navbar` | Fixed top bar with logo, nav links, and a "Work with Us" CTA button. Hides on scroll down, reappears on scroll up. |
| **Hero** | `#home` | Full-screen opening section with the main headline, subtitle, two CTA buttons, and an animated 3D rotating ring (torus). |
| **About** | `#about` | Two-column layout. Left side has the agency description, bullet points, and a CTA. Right side shows four stat cards (Production-Ready, AI-First, Business-Aligned, Cloud-Native). |
| **Services** | `#services` | Six service cards in a grid, each with an icon, title, description, and technology tags (e.g. AI Agents, Chatbots, ML Pipelines). |
| **Technology Stack** | `#skills` | Six cards showing the core technologies used (OpenAI, LangChain, Python, PyTorch, Azure, FastAPI) with icons, displayed at a slight angle. |
| **How We Work** | `#process` | Four process step cards that slide in from alternating sides on scroll — covering Discovery, Architecture, Build, and Deploy phases. |
| **Contact** | `#contact` | Contact section with three info items (location, platform, response time) on the left and a message form on the right. |
| **Footer** | — | Logo, brand description, three navigation columns (Navigation, Services, Connect), and a copyright line. |

---

## Updating Content

All website text, labels, links, and data are managed in a single file:

**`js/content.js`**

Edit the sections inside `window.CONTENT` to update:

| Section | What you can change |
|---|---|
| `meta` | Browser tab title |
| `nav` | Brand name, navigation links, CTA button label |
| `hero` | Headline, subtitle, button labels |
| `about` | Eyebrow, heading, lead text, bullet points, stat cards |
| `services` | Section heading, service cards (icon, title, description, tags) |
| `tech` | Section heading, technology cards (icon, name) |
| `process` | Section heading, process steps (number, title, description) |
| `contact` | Section heading, info items, form labels & placeholders |
| `footer` | Brand description, navigation columns, copyright |
| `emailjs` | EmailJS service ID, template ID, public key |

### Example — adding a new service card

In `content.js`, find `services.items` and add a new object:

```js
{
  icon:  '🔐',
  title: 'AI Security Auditing',
  desc:  'Your description here.',
  tags:  ['Python', 'LLMs'],
},
```

### Example — adding a tech stack card

In `content.js`, find `tech.items` and add:

```js
{ icon: '🐳', name: 'Docker' },
```

---

## Running Locally

No build step needed. Open with Live Server in VS Code:

1. Install the **Live Server** extension
2. Right-click `index.html` → **Open with Live Server**

Or from the terminal:

```bash
npx serve .
```

---

## Dependencies

Loaded via CDN — no installation required:

- [Three.js](https://threejs.org/) `v0.160` — 3D torus animation
- [EmailJS](https://www.emailjs.com/) `v4` — contact form email sending (no backend required)
- [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) — body font
- [Fragment Mono](https://fonts.google.com/specimen/Fragment+Mono) — monospace accents

---

## Browser Support

All modern browsers (Chrome, Firefox, Safari, Edge). Requires JavaScript enabled.
