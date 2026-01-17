export const cvData = {
  name: "Ayoub Belkich",
  headline: "Cloud / DevOps Intern • Bachelor Toegepaste Informatica (3e jaar)",

  meta: [
    "📍 Brussel",
    "🚗 Rijbewijs B + eigen wagen",
    "🗓️ Beschikbaar: midden februari 2026 (± 3 maanden)",
  ],

  githubUrl: "https://github.com/AyBelkich",
  githubLabel: "GitHub",

  email: "ayoub.belkich@gmail.com",

  profile: `
    3e-jaars student <b>Bachelor Toegepaste Informatica</b> (Odisee – Campus Brussel) met sterke interesse in
    <b>Cloud & DevOps</b>. Ik werk hands-on aan projecten met <b>AWS (EC2)</b>, <b>Terraform</b>, <b>Docker</b>,
    <b>CI/CD (GitHub Actions)</b> en <b>CloudWatch</b> (alarms & logs).
    Gemotiveerd om tijdens een stage snel bij te leren en mee te draaien in een team dat werkt aan deployment,
    automatisatie en infrastructuur.
  `,

  education: {
    school: "Odisee Hogeschool (Campus Brussel)",
    degree: "Bachelor Toegepaste Informatica — 3e jaar",
    period: "2022 – heden",
  },

  skills: [
    {
      group: "Cloud & DevOps",
      items: ["AWS (EC2)", "Terraform", "Docker", "GitHub Actions", "CloudWatch (Logs/Alarms)"],
    },
    {
      group: "Backend / Web",
      items: ["Python (FastAPI)", "TypeScript", "JavaScript", "Java", "C#", "PHP"],
    },
    {
      group: "Frameworks",
      items: ["React (basis)", "Vue.js (basis)", "Laravel (basis)", "Tailwind CSS", "Bootstrap"],
    },
    {
      group: "Databases",
      items: ["MySQL", "MongoDB", "SQLite", "Firebase", "Supabase"],
    },
    {
      group: "Systemen",
      items: ["Linux (basis)", "SSH", "VirtualBox/VMware", "Bash (basis)", "PowerShell (basis)"],
    },
  ],

  skillsNote:
    "Niveau: voornamelijk basis/lerend (stage-ready). Ik kan bestaande code begrijpen, aanpassen en snel bijleren via praktijk.",

  projects: [
    {
      title: "FastAPI API + CI/CD deploy naar AWS EC2",
      subtitle: "persoonlijk project (recent)",
      bullets: [
        "API gebouwd met FastAPI (Python)",
        "GitHub Actions pipeline: tests → Docker build/push → deploy naar EC2 via SSH",
        "Infrastructure as Code met Terraform (EC2 + Security Group + IAM)",
        "Observability: CloudWatch CPU alarm + container logs naar CloudWatch Logs",
      ],
    },
    {
      title: "Laravel marketplace webapp (zoals Vinted)",
      subtitle: "school groepsproject",
      bullets: [
        "Webapp gebouwd met Laravel (PHP)",
        "Database met MySQL + beheer via phpMyAdmin",
        "Teamwork: taken verdelen, features implementeren",
      ],
    },
    {
      title: "Browser extension – Amazon prijsvergelijking",
      subtitle: "persoonlijk project",
      bullets: [
        "Extensie gebouwd met TypeScript en manifest-structuur",
        "UI + data verwerking (React/Vue.js)",
      ],
    },
  ],

  experience: [
    {
      title: "bpost — Postbode / Levering",
      period: "2025 – heden",
      desc: "Stiptheid • Zelfstandig werken • Verantwoordelijkheid",
    },
    {
      title: "Brico — Winkelmedewerker",
      period: "2023 – 2024",
      desc: "Klantgericht • Stock/aanvullen • Teamwork",
    },
    {
      title: "MIVB/STIB — Administratie",
      period: "zomer 2023",
      desc: "Nauwkeurigheid • Administratieve ondersteuning",
    },
  ],

  languages: [
    { lang: "Frans", level: "moedertaal" },
    { lang: "Nederlands", level: "vlot" },
    { lang: "Engels", level: "goed" },
  ],

  learning: ["Udemy — AWS Fundamentals (lopend, ±30%)"],
};
