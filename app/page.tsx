import NewsCard from "../components/NewsCard";
import AthleteCard from "../components/AthleteCard";

export default function Home() {
  return (
    <main style={{ padding: "20px" }}>
      <h1>Athora</h1>
      <p>The Home of Trinidad & Tobago Sports</p>

      <section>
        <h2>Latest Sports News</h2>

        <NewsCard
          title="National Championships Begin Friday"
          category="Athletics"
          summary="Top athletes from across Trinidad and Tobago will compete this weekend."
        />

        <NewsCard
          title="Football League Enters Final Round"
          category="Football"
          summary="Clubs battle for playoff positions."
        />
      </section>

      <section>
        <h2>Featured Athletes</h2>

        <AthleteCard
          name="Keshorn Walcott"
          sport="Javelin"
          club="TTO Athletics"
          subscribers={1200}
        />

        <AthleteCard
          name="Michelle-Lee Ahye"
          sport="Sprinting"
          club="VIP Athletics"
          subscribers={950}
        />
      </section>
    </main>
  );
}
