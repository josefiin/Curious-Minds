import TextBlock from "../components/TextBlock";
import ImageTextBlock from "../components/ImageTextBlock";

const About = () => {
  return (
    <main>
      <section className="bg-beige spacing-md py-20 lg:py-36">
        <div className="content-container">
          <TextBlock
            heading="About Curious Minds"
            text="Explore the world one region at a time! With CuriousMinds, kids and parents can discover countries, learn fun facts and explore colorful flags of the world. It’s a fun and easy way to learn geography together!"
            buttonText="Start explore"
            buttonHref="/"
            imgSrc="/figures_draft.svg"
            imgAlt="figues"
          />
        </div>
      </section>
      {/* Önskar att innehållet i 'About' tar upp mindre i bredd än övriga sidor. Lägger komponenten med en 10 grid i en 12-grid för jag vill att sidan följer samma 12-grid genomgående. */}
      <section className="content-container md:grid grid-cols-12 gap-5 items-center spacing-md">
        <ImageTextBlock
          className="md:grid grid-cols-10 gap-5 items-center"
          heading="More to Explore!"
          text="CuriousMinds is just getting started! Soon, you’ll be able to explore exciting new categories like animals, science, history, sports, and games. We’re working hard to make your learning journey even more fun – stay tuned for more to come!"
          imgSrc="/cm_app_draft.png"
          imgAlt="CuriousMinds figures"
        />
      </section>
    </main>
  );
};

export default About;
