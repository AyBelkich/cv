import "./App.css";
import { useState } from "react";

import { cvData } from "./data/cvData";

import { Header } from "./components/Header";
import { Toast } from "./components/Toast";
import { ProfileCard } from "./components/ProfileCard";
import { EducationCard } from "./components/EducationCard";
import { SkillsCard } from "./components/SkillsCard";
import { ProjectsCard } from "./components/ProjectsCard";
import { ExperienceCard } from "./components/ExperienceCard";
import { SideInfoCard } from "./components/SideInfoCard";

export default function App() {
  const [toast, setToast] = useState<string | null>(null);

  function showToast(msg: string) {
    setToast(msg);
    setTimeout(() => setToast(null), 1600);
  }

  const pdfUrl = `${import.meta.env.BASE_URL}ayoubbelkichcv.pdf`;

  async function onEmailClick() {
    try {
      await navigator.clipboard.writeText(cvData.email);
      showToast("Copied email ✅");
    } catch {
      showToast("Could not copy ❌");
    }

    setTimeout(() => {
      const subject = encodeURIComponent("Stage Cloud/DevOps");
      const body = encodeURIComponent("Hallo Ayoub,\n\n");
      window.location.href = `mailto:${cvData.email}?subject=${subject}&body=${body}`;
    }, 200);
  }

  return (
    <div className="page">
      <Header
        name={cvData.name}
        headline={cvData.headline}
        meta={cvData.meta}
        githubUrl={cvData.githubUrl}
        githubLabel={cvData.githubLabel}
        onEmailClick={onEmailClick}
        pdfUrl={pdfUrl}
        onPdfClick={() => showToast("Downloading CV ✅")}
      />

      <main className="grid">
        <ProfileCard html={cvData.profile} />

        <EducationCard
          school={cvData.education.school}
          degree={cvData.education.degree}
          period={cvData.education.period}
        />

        <SkillsCard skills={cvData.skills} note={cvData.skillsNote} />

        <ProjectsCard projects={cvData.projects} />

        <ExperienceCard jobs={cvData.experience} />

        <SideInfoCard languages={cvData.languages} learning={cvData.learning} />
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} {cvData.name}</span>
        <span className="muted" style={{ display: "block", marginTop: 6 }}>
          Built with React + TypeScript
        </span>
      </footer>

      <Toast text={toast} />
    </div>
  );
}
