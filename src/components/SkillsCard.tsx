type SkillGroup = {
  group: string;
  items: string[];
};

type SkillsCardProps = {
  skills: SkillGroup[];
  note: string;
};

export function SkillsCard({ skills, note }: SkillsCardProps) {
  return (
    <section className="card span2">
      <h2>Technische vaardigheden</h2>

      <div className="skillsGrid">
        {skills.map((sg) => (
          <div key={sg.group} className="skillBlock">
            <h3>{sg.group}</h3>
            <div className="tags">
              {sg.items.map((s) => (
                <span key={s} className="tag">
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <p className="footnote">
        {note.split("stage-ready").length > 1 ? (
          <>
            {note}
          </>
        ) : (
          note
        )}
      </p>
    </section>
  );
}
