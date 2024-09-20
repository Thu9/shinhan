import { useState } from "react";

export default function TopButton() {
  const [scrollY, setScrollY] = useState(0);

  addEventListener("scroll", () => {
    setScrollY(window.scrollY);
  });

  return (
    <button
      className={`fixed bottom-0 right-0 z-[100] transition-opacity duration-300 ${
        scrollY > 1000 ? "opacity-100" : "opacity-0"
      }`}
      onClick={() => {
        scrollY > 1000 ? scrollTo(0, 0) : null;
      }}
    >
      <img src="icons/top-button.png" />
    </button>
  );
}
