import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NewsCard from "../components/NewsCard";
import AthleteCard from "../components/AthleteCard";

export default function Home() {
  return (
    <>
      <Navbar />

      <main style={{ padding: "20px" }}>
        {/* HERO SECTION */}
        <section>
          <h1>Athora</h1>
          <p>The Home of Trinidad & Tobago Sports</p>
        </section>

        <hr />

        {/* NEWS SECTION */}
        <section>
          <h2>Latest Sports News</h2>

          <NewsCard
            title="National Championships Begin Friday"
            category="Athletics"
            summary="Top athletes from across Trinidad and Tobago will compete this weekend in Port of Spain."
          />

          <NewsCard
            title="Trinidad Football League Heats Up"
            category="Football"
            summary="Local clubs battle for top position in the national league standings."
          />
        </section>

        <hr />

        {/* ATHLETES SECTION */}
        <section>
          <h2>Featured Athletes</h2>

          <AthleteCard
            name="John Smith"
            sport="Athletics"
            club="Queens Park SC"
            subscribers={250}
          />

          <AthleteCard
            name="Alicia James"
            sport="Swimming"
            club="Marlins Swim Club"
            subscribers={180}
          />
        </section>
      </main>

      <Footer />
    </>
  );
}
