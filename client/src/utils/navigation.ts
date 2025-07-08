import { useLocation } from "wouter";

export const navigateToSection = (
  sectionId: string,
  setLocation: (path: string) => void
) => {
  const scrollToSection = () => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 65;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  if (window.location.pathname === "/") {
    scrollToSection();
  } else {
    setLocation("/");
    setTimeout(scrollToSection, 100);
  }
};

export const useNavigateToSection = () => {
  const [, setLocation] = useLocation();

  return (sectionId: string) => {
    navigateToSection(sectionId, setLocation);
  };
};
