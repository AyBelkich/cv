type ProfileCardProps = {
  html: string;
};

export function ProfileCard({ html }: ProfileCardProps) {
  return (
    <section className="card">
      <h2>Profiel</h2>
      <p dangerouslySetInnerHTML={{ __html: html }} />
    </section>
  );
}
