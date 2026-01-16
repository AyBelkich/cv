type Project = {
  title: string;
  subtitle?: string;
  bullets: string[];
};

type ProjectsCardProps = {
  projects: Project[];
};

export function ProjectsCard({ projects }: ProjectsCardProps) {
  return (
    <section className="card span2">
      <h2>Projecten</h2>

      {projects.map((p) => (
        <div key={p.title} className="project">
          <div className="itemTop">
            <b>{p.title}</b>
            {p.subtitle ? <span className="muted">{p.subtitle}</span> : null}
          </div>
          <ul>
            {p.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
