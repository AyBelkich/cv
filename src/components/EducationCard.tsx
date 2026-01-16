type EducationCardProps = {
  school: string;
  degree: string;
  period: string;
};

export function EducationCard({ school, degree, period }: EducationCardProps) {
  return (
    <section className="card">
      <h2>Opleiding</h2>
      <div className="item">
        <div className="itemTop">
          <b>{school}</b>
          <span className="muted">{period}</span>
        </div>
        <div className="muted">{degree}</div>
      </div>
    </section>
  );
}
