import { useState, useEffect } from "react";

const ScrollTop = () => {
  // State för att kontrollera om knappen ska vara synlig
  const [isVisible, setIsVisible] = useState(false);

  // Funktion som hanterar synligheten baserat på scroll-position
  const toggleVisibility = () => {
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Funktion för att scrolla tillbaka till toppen av sidan
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    // Rensa eventlistener när komponenten försvinner (inte är synlig)
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <button
          className="fixed bottom-5 right-5 text-sm  bg-plum-mid drop-shadow-sm p-1 rounded-full transition-opacity duration-300"
          onClick={scrollToTop}
        >
          <img
            src="/arrow-left-icon.svg"
            alt="arrow up icon"
            className="rotate-90"
          />
        </button>
      )}
    </div>
  );
};

export default ScrollTop;
