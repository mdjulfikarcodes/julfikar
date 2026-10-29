type Props = { kicker: string; title: string; description?: string };

export default function SectionHeading({ kicker, title, description }: Props) {
  return (
    <div className="mb-10">
      <p className="section-kicker">{kicker}</p>
      <h2 className="section-title">{title}</h2>
      {description && <p className="section-copy">{description}</p>}
    </div>
  );
}
