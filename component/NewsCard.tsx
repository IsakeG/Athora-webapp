type NewsCardProps = {
  title: string;
  category: string;
  summary: string;
};

export default function NewsCard({
  title,
  category,
  summary,
}: NewsCardProps) {
  return (
    <div>
      <h3>{title}</h3>
      <p><strong>{category}</strong></p>
      <p>{summary}</p>
    </div>
  );
}
