import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHash({ initialLoading }) {
  const { hash, pathname } = useLocation();

  useLayoutEffect(() => {
    if (!hash) return;
    if (initialLoading) return;
    if (pathname !== "/") return;

    const id = hash.replace("#", "");
    const element = document.getElementById(id);
    if (!element) return;

    const yOffset = -100; // altura navbar
    const y =
      element.getBoundingClientRect().top +
      window.pageYOffset +
      yOffset;

    requestAnimationFrame(() => {
      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    });
  }, [hash, pathname, initialLoading]);

  return null;
}
