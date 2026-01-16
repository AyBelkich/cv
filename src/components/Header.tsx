type HeaderProps = {
  name: string;
  headline: string;
  meta: string[];
  githubUrl: string;
  githubLabel?: string;
  onEmailClick: () => void;
  pdfUrl: string;
  onPdfClick?: () => void;
};

export function Header({
  name,
  headline,
  meta,
  githubUrl,
  githubLabel = "GitHub",
  onEmailClick,
  pdfUrl,
  onPdfClick,
}: HeaderProps) {
  return (
    <header className="header">
      <h1 className="name">{name}</h1>
      <p className="title">{headline}</p>

      <div className="meta">
        {meta.map((m) => (
          <span key={m}>{m}</span>
        ))}
      </div>

      <div className="links">
        <a href={githubUrl} target="_blank" rel="noreferrer">
          {githubLabel}
        </a>

        <button type="button" className="linkBtn" onClick={onEmailClick}>
          Email
        </button>

        <a
          href={pdfUrl}
          className="linkBtn"
          download="ayoubbelkichcv.pdf"
          target="_blank"
          rel="noreferrer"
          onClick={onPdfClick}
        >
          Download PDF
        </a>
      </div>
    </header>
  );
}
