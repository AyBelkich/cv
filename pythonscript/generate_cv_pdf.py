from reportlab.lib.pagesizes import A4
from reportlab.platypus import (
    BaseDocTemplate, Frame, PageTemplate, Paragraph, Spacer,
    FrameBreak, Table, TableStyle, KeepTogether
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib import colors
from reportlab.lib.units import mm
from pathlib import Path
import os

# OUTPUT into your React public folder
ROOT = Path(__file__).resolve().parent.parent   # pythonscript -> cv
OUTPUT_PATH = ROOT / "public" / "ayoubbelkichcv.pdf"
OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)
NAME = "Ayoub Belkich"
EMAIL = "ayoub.belkich@gmail.com"  # change if needed
GITHUB_TEXT = "github.com/AyBelkich"
GITHUB_URL = "https://github.com/AyBelkich"

SUBTITLE = "Cloud / DevOps Intern • Bachelor Toegepaste Informatica (3e jaar)"

# Better: split contact info into two lines (prevents ugly wraps)
CONTACT_LINE_1 = f"Brussel • Rijbewijs B + eigen wagen • Beschikbaar: midden februari 2026 (± 3 maanden)"
CONTACT_LINE_2 = f"{EMAIL} • {GITHUB_TEXT}"

PROFILE = (
    "3e-jaars student <b>Toegepaste Informatica</b> (Odisee – Campus Brussel) met focus op "
    "<b>Cloud & DevOps</b>. Hands-on ervaring met <b>AWS (EC2)</b>, <b>Terraform</b>, <b>Docker</b>, "
    "<b>CI/CD (GitHub Actions)</b> en <b>CloudWatch</b> (alarms & logs) via persoonlijke projecten. "
    "Leergierig en gemotiveerd om tijdens een stage snel mee te draaien in een team rond deployment, "
    "automatisatie en infrastructuur."
)

EDU = "<b>Odisee Hogeschool (Campus Brussel)</b><br/>Bachelor Toegepaste Informatica — 3e jaar (2022 – heden)"

# Compact skill rows (more readable than long paragraphs)
SKILLS_ROWS = [
    ("Cloud & DevOps", "AWS (EC2), Terraform, Docker, GitHub Actions, CloudWatch"),
    ("Tools", "Git, GitHub, SSH"),
    ("Backend", "Python (FastAPI), TypeScript, JavaScript"),
    ("Extra", "Java, C#, PHP"),
    ("Frameworks", "React (basis), Vue.js (basis), Laravel (basis)"),
    ("Databases", "MySQL, MongoDB, SQLite, Firebase, Supabase"),
    ("Systemen", "Linux (basis), VirtualBox/VMware, Bash/PowerShell (basis)"),
]

PROJECTS = [
    ("<b>FastAPI API + CI/CD deploy naar AWS EC2</b> <span color='#4b5563'>(persoonlijk, recent)</span>", [
        "GitHub Actions: tests → Docker build/push → deploy (SSH)",
        "Terraform IaC: EC2 + Security Group + IAM role",
        "CloudWatch: CPU alarm + container logs naar Log Group",
    ]),
    ("<b>Laravel marketplace webapp (zoals Vinted)</b> <span color='#4b5563'>(school groepsproject)</span>", [
        "Laravel (PHP) + MySQL (phpMyAdmin)",
        "Teamwork: features implementeren",
    ]),
    ("<b>Browser extension – Amazon prijsvergelijking</b> <span color='#4b5563'>(persoonlijk)</span>", [
        "TypeScript + manifest-structuur",
        "UI + data verwerking (React/Vue.js)",
    ]),
]

JOBS = [
    ("<b>bpost</b> — Postbode / Levering <span color='#4b5563'>(2025 – heden)</span>", "Stiptheid • Zelfstandig werken • Verantwoordelijkheid"),
    ("<b>Brico</b> — Winkelmedewerker <span color='#4b5563'>(2023 – 2024)</span>", "Klantgericht • Stock/aanvullen • Teamwork"),
    ("<b>MIVB/STIB</b> — Administratie <span color='#4b5563'>(zomer 2023)</span>", "Nauwkeurigheid • Administratieve ondersteuning"),
]

LANGS = "Frans: moedertaal • Nederlands: vlot • Engels: goed"
LEARNING = "Udemy — <b>AWS Fundamentals</b> (lopend, ±30%)"


def main():
    page_width, page_height = A4
    margin = 14 * mm

    doc = BaseDocTemplate(
        str(OUTPUT_PATH),
        pagesize=A4,
        leftMargin=margin,
        rightMargin=margin,
        topMargin=margin,
        bottomMargin=margin,
    )

    styles = getSampleStyleSheet()

    title_style = ParagraphStyle(
        "Title",
        parent=styles["Title"],
        fontName="Helvetica-Bold",
        fontSize=22,
        leading=24,
        spaceAfter=2,
        textColor=colors.black,
    )

    subtitle_style = ParagraphStyle(
        "Subtitle",
        parent=styles["Normal"],
        fontName="Helvetica",
        fontSize=10.2,
        leading=13,
        textColor=colors.HexColor("#1f2937"),
        spaceAfter=6,
    )

    contact_style = ParagraphStyle(
        "Contact",
        parent=styles["Normal"],
        fontName="Helvetica",
        fontSize=9.1,
        leading=12,
        textColor=colors.HexColor("#111827"),
        spaceAfter=8,
    )

    section_style = ParagraphStyle(
        "Section",
        parent=styles["Heading3"],
        fontName="Helvetica-Bold",
        fontSize=9.8,
        leading=12,
        textColor=colors.HexColor("#0f172a"),
        spaceBefore=6,
        spaceAfter=4,
    )

    body_style = ParagraphStyle(
        "Body",
        parent=styles["Normal"],
        fontName="Helvetica",
        fontSize=9.0,
        leading=12,
        textColor=colors.black,
    )

    muted_style = ParagraphStyle(
        "Muted",
        parent=styles["Normal"],
        fontName="Helvetica",
        fontSize=8.6,
        leading=11,
        textColor=colors.HexColor("#374151"),
    )

    bullet_style = ParagraphStyle(
        "Bullet",
        parent=muted_style,
        leftIndent=10,
        bulletIndent=0,
        spaceBefore=1,
        spaceAfter=1,
    )

    # Layout: header full width + two balanced columns
    usable_width = page_width - 2 * margin
    usable_height = page_height - 2 * margin

    header_h = 34 * mm
    gap = 6 * mm
    col_w = (usable_width - gap) / 2
    body_h = usable_height - header_h - 2 * mm

    header_frame = Frame(margin, page_height - margin - header_h, usable_width, header_h, id="header", showBoundary=0)
    left_frame = Frame(margin, margin, col_w, body_h, id="left", showBoundary=0)
    right_frame = Frame(margin + col_w + gap, margin, col_w, body_h, id="right", showBoundary=0)

    def draw_decor(c, _doc):
        # Rocket League subtle accent line (blue / orange) – still pro
        y = page_height - margin - 6
        c.setLineWidth(2)
        c.setStrokeColor(colors.HexColor("#1d4ed8"))
        c.line(margin, y, margin + usable_width * 0.55, y)
        c.setStrokeColor(colors.HexColor("#f97316"))
        c.line(margin + usable_width * 0.55, y, margin + usable_width, y)

    doc.addPageTemplates([PageTemplate(id="cv", frames=[header_frame, left_frame, right_frame], onPage=draw_decor)])

    story = []

    # HEADER
    story.append(Paragraph(NAME, title_style))
    story.append(Paragraph(SUBTITLE, subtitle_style))

    # Make github clickable
    contact_line_2 = f"{EMAIL} • <a href='{GITHUB_URL}' color='blue'>{GITHUB_TEXT}</a>"
    story.append(Paragraph(CONTACT_LINE_1, contact_style))
    story.append(Paragraph(contact_line_2, contact_style))

    story.append(FrameBreak())

    # LEFT COLUMN
    story.append(Paragraph("PROFIEL", section_style))
    story.append(Paragraph(PROFILE, body_style))
    story.append(Spacer(1, 6))

    story.append(Paragraph("OPLEIDING", section_style))
    story.append(Paragraph(EDU, body_style))
    story.append(Spacer(1, 6))

    story.append(Paragraph("TECHNISCHE VAARDIGHEDEN", section_style))

    # Skills as a clean table (much nicer than long lines)
    table_data = []
    for k, v in SKILLS_ROWS:
        table_data.append([Paragraph(f"<b>{k}</b>", muted_style), Paragraph(v, muted_style)])

    skills_table = Table(table_data, colWidths=[col_w * 0.34, col_w * 0.66])
    skills_table.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 2),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 2),
        ("LINEBELOW", (0, 0), (-1, -1), 0.25, colors.HexColor("#e5e7eb")),
    ]))

    story.append(skills_table)
    story.append(Spacer(1, 4))
    story.append(Paragraph("Niveau: voornamelijk <b>basis/lerend</b> (stage-ready). Ik kan bestaande code begrijpen en snel bijleren.", muted_style))

    # RIGHT COLUMN
    story.append(FrameBreak())

    story.append(Paragraph("PROJECTEN", section_style))
    for title, bullets in PROJECTS:
        story.append(Paragraph(title, body_style))
        for b in bullets:
            story.append(Paragraph(b, bullet_style, bulletText="•"))
        story.append(Spacer(1, 4))

    story.append(Paragraph("WERKERVARING", section_style))
    for role, desc in JOBS:
        story.append(Paragraph(role, body_style))
        story.append(Paragraph(desc, muted_style))
        story.append(Spacer(1, 4))

    story.append(Paragraph("TALEN", section_style))
    story.append(Paragraph(LANGS, body_style))
    story.append(Spacer(1, 5))

    story.append(Paragraph("ONLINE LEREN", section_style))
    story.append(Paragraph(LEARNING, body_style))

    doc.build(story)
    print(f"✅ PDF generated: {OUTPUT_PATH}")


if __name__ == "__main__":
    main()
