type Language = {
  lang: string;
  level: string;
};

type SideInfoCardProps = {
  languages: Language[];
  learning: string[];
};

export function SideInfoCard({ languages, learning }: SideInfoCardProps) {
  return (
    <section className="card">
      <h2>Talen</h2>
      <ul>
        {languages.map((l) => (
          <li key={l.lang}>
            <b>{l.lang}</b> — {l.level}
          </li>
        ))}
      </ul>

      <h2 style={{ marginTop: "16px" }}>Online leren</h2>
      <ul>
        {learning.map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>
    </section>
  );
}
