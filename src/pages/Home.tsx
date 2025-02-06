import Button from "../components/Button";
import MarqueeText from "../components/MarqueeText";
import RegionCard from "../components/RegionCard";

const Home = () => {
  return (
    <main className="content-container">
      <section className="flex flex-wrap justify-center spacing-md">
        <img
          src="/flags-facts_illustration.png"
          alt=""
          className="w-full max-w-72 md:max-w-lg spacing-sm"
        />
        <h1 className="heading-lg">Learn about Countries and Flags</h1>
        <p className="text-xl text-center">
          Discover facts and colorful flags from countries around the world.
        </p>
      </section>
      <section className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 spacing-md">
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
      <MarqueeText />
      <section className="spacing-lg md:grid grid-cols-6 gap-5">
        <div className="col-start-2 col-span-4 flex flex-wrap justify-center px-4 md:px-0">
          <div className="flex justify-between w-full mb-6">
            <img
              src="/bling.svg"
              alt="yellow bling graphic"
              className="w-20 md:translate-y-7"
            />
            <img
              src="/speech-bubble.svg"
              alt="speech-bubble illustration"
              className="hidden md:block"
            />
            <img src="/world.svg" alt="globe illustration" />
            <img
              src="/eyes.svg"
              alt="eyes illustration"
              className="md:translate-y-8"
            />
          </div>
          <h2 className="heading-lg">
            Never stop learning, because life never stops teaching
          </h2>
          <p className="text-xl text-center mb-10">
            CuriousMinds is a platform designed to make learning fun and
            engaging for kids.
          </p>
          <Button text="Read more about us" link="/about" />
        </div>
      </section>
    </main>
  );
};

export default Home;
