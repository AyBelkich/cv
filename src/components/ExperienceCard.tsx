type Job = {
  title: string;
  period: string;
  desc: string;
};

type ExperienceCardProps = {
  jobs: Job[];
};

export function ExperienceCard({ jobs }: ExperienceCardProps) {
  return (
    <section className="card">
      <h2>Werkervaring</h2>

      {jobs.map((j) => (
        <div key={j.title} className="item">
          <div className="itemTop">
            <b>{j.title}</b>
            <span className="muted">{j.period}</span>
          </div>
          <div className="muted">{j.desc}</div>
        </div>
      ))}
    </section>
  );
}
