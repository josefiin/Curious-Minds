import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import PillButton from "../components/PillButton";
import CountryCard from "../components/CountryCard";
import ScrollTop from "../components/ScrollTop";

const Countries = () => {
  const [regionData, setRegionData] = useState<any[]>([]);
  const params = useParams();
  useEffect(() => {
    // Hämtar data för rätt regionName baserat på url-parameter.
    const apiUrl = `https://restcountries.com/v3.1/${params.type}/${params.regionName}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((json) => {
        setRegionData(json);
      });
  }, [params]);
  return (
    <>
      <main className="content-container my-10 md:my-20">
        <section className="spacing-sm">
          <div className="relative flex items-center mb-8 md:mb-12">
            <Link to="/" className="absolute left-0">
              <img src="/arrow-left-icon.svg" alt="arrow left icon" />
            </Link>
            {/* Skickar in param för namn på Region. */}
            <h1 className="mx-auto heading-lg mb-0 capitalize">
              {params.regionName}
            </h1>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {/* Skapar pillsen manuellt med namn och länk för rätt region. */}
            <PillButton link="/countries/region/africa" text="Africa" />
            <PillButton link="/countries/region/asia" text="Asia" />
            <PillButton link="/countries/region/europe" text="Europe" />
            <PillButton
              link="/countries/subregion/north america"
              text="North America"
            />
            <PillButton
              link="/countries/subregion/south america"
              text="South America"
            />
            <PillButton link="/countries/region/oceania" text="Oceania" />
            <PillButton link="/countries/region/antarctic" text="Antarctic" />
          </div>
        </section>
        <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10">
          {regionData.map((country, index) => (
            <CountryCard
              key={`${index}-${country.region}-${country.subregion}`} // Unikt key som ändras vid regionsbyte
              name={country.name.common}
              officialName={country.name.official}
              region={country.region}
              capital={country.capital}
              // Lägger en fail-safe för att inte få fel för tomt objekt med valutorna
              money={Object.keys(country.currencies ?? {}).join(", ")} // Hämtar valutor som en sträng, separerar med kommatecken.
              area={country.area}
              population={country.population}
              carSide={country.car.side}
              imgUrl={country.flags.png}
              imgAlt={country.flags.alt}
            />
          ))}
        </section>
      </main>
      <ScrollTop />
    </>
  );
};

export default Countries;
