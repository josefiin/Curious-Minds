import MarqueeText from "../components/MarqueeText";
import TextImageBlock from "../components/TextImageBlock";
import TextImageBlock2 from "../components/TextImageBlock2";

const About = () => {
  return (
    <main className="content-container">
      <section className="spacing-md">
        <TextImageBlock
          heading="About Curious Minds"
          text="Explore the world one region at a time! With CuriousMinds, kids and parents can discover countries, learn fun facts and explore colorful flags of the world. It’s a fun and easy way to learn geography together!"
          buttonText="Start explore"
          buttonHref="/"
          imgSrc="/figures_draft.jpg"
          imgAlt="figues"
        />
      </section>
      <section className="spacing-md">
        <TextImageBlock2
          heading="More to Explore!"
          text="CuriousMinds is just getting started! Soon, you’ll be able to explore exciting new categories like animals, science, history, sports, and games. We’re working hard to make your learning journey even more fun – stay tuned for more to come!"
          imgSrc="/cm_app_draft.png"
          imgAlt="CuriousMinds figures"
        />
      </section>
      <MarqueeText />
    </main>
  );
};

export default About;
