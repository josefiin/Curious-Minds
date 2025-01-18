const Footer = () => {
  return (
    <footer>
      <div className="content-container flex">
        <img
          className="ml-auto"
          src="/curious-minds_figures.svg"
          alt="Three smiling, colorful, geometric figuers."
        />
      </div>
      {/* En div runt en div för bg-färg */}
      <div className="bg-beige">
        <div className="content-container flex flex-col md:flex-row justify-center items-center md:justify-between py-8 md:py-10">
          <img
            src="/curious-minds_wordmark.svg"
            alt="CuriousMinds wordmark."
            className="mb-4 md:mb-0"
          />
          <p className="mb-5 md:mb-0 text-xs">
            Copyright © 2025 Curious Minds Society. All rights reserved
          </p>
          <section className="flex gap-4">
            <span>
              <img src="/instagram-icon.svg" alt="Instagram logo icon" />
            </span>
            <span>
              <img src="/linkedin_icon.svg" alt="Linkedin logo icon" />
            </span>
            <span>
              <img src="/youtube-icon.svg" alt="Youtube logo icon" />
            </span>
          </section>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
