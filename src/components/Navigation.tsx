import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <header className="bg-plum-light pt-4 md:pt-10 spacing-lg">
      <div className="content-container flex justify-between items-center">
        <Link to="/">
          <img
            className="w-40 md:w-48"
            src="/curious-minds_logotype_horizontal.svg"
            alt="CuriousMinds logotyp. Purple, smiling, hexagon figure, wordmark to the right."
          />
        </Link>
        <nav className="bg-plum-mid rounded-full">
          <ul className="flex gap-4 md:gap-6 px-6 py-3 text-plum-dark">
            <li className="hover:underline underline-offset-4">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:underline underline-offset-4">
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
