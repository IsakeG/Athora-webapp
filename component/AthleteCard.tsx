type AthleteCardProps = {
  name: string;
  sport: string;
  club:string;
  subscribers: number;
};

export default function AthleteCard({
  name,
  sport,
  club,
  subscribers,
}: AthleteCardProps) {
  return (
    <div>
      <h3>{name}</h3>
      <p>{sport}</p>
       <p>{club}</p>
      <p>{subscribers} subscribers</p>
      <button>Subscribe</button>
    </div>
  );
}
