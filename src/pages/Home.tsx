import RegionCard from "../components/RegionCard";

const Home = () => {
  return (
    <main className="content-container my-14 md:my-20">
      <section className="spacing-md">
        <h1 className="heading-lg">Learn about Countries and Flags</h1>
        <p className="text-xl text-center">
          Discover facts and colorful flags from countries around the world.
        </p>
      </section>
      <section className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 spacing-lg">
        {/* Vill lista alla kontinenter och då det inte är så många skapar jag korten för dem manuellt med namn och länk för rätt region. */}
        <RegionCard
          imgSrc="/africa.webp"
          imgAlt="Zebra on the savannah in Africa"
          text="Africa"
          link="/countries/region/africa"
        />
        <RegionCard
          imgSrc="/asia.webp"
          imgAlt="Mount fuji Japan"
          text="Asia"
          link="/countries/region/asia"
        />
        <RegionCard
          imgSrc="/europe.webp"
          imgAlt="Eiffel Tower and Seine in Paris"
          text="Europe"
          link="/countries/region/europe"
        />
        <RegionCard
          imgSrc="/north-america.webp"
          imgAlt="The Golden Gate Bridge i San Francisco"
          text="North America"
          link="/countries/subregion/north america"
        />
        <RegionCard
          imgSrc="/south-america.webp"
          imgAlt="Llamas in the Andes South America"
          text="South America"
          link="/countries/subregion/south america"
        />
        <RegionCard
          imgSrc="/oceania.webp"
          imgAlt="Koala climbing in a eucalyptus tree"
          text="Oceania"
          link="/countries/region/oceania"
        />
        <RegionCard
          imgSrc="/antarctic.webp"
          imgAlt="Iceberg Antarctic Peninsula"
          text="Antarctic"
          link="/countries/region/antarctic"
        />
      </section>
      <section className="spacing-lg md:grid grid-cols-6 gap-5">
        <div className="col-start-2 col-span-4 px-6 md:px-0">
          <h2 className="heading-lg">
            Never stop learning, because life never stops teaching
          </h2>
        </div>
      </section>
    </main>
  );
};

export default Home;
