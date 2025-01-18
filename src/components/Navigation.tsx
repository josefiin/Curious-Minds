import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <header className="bg-plum-light">
      <div className="content-container h-[120px] md:h-[156px] flex pt-4 md:pt-6 relative">
        <Link
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          to="/"
        >
          <img
            className="w-28 md:w-36"
            src="/curious-minds_logotype.svg"
            alt="CuriousMinds logotyp. Three smiling, colorful, geometric figuers, wordmark underneath."
          />
        </Link>
        <nav className="ml-auto">
          <ul className="flex space-x-4 text-plum-dark">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
