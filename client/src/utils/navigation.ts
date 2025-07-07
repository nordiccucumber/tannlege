import { useLocation } from "wouter";

export const navigateToSection = (sectionId: string, setLocation: (path: string) => void) => {
  const scrollToSection = () => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // If we're already on the home page, just scroll
  if (window.location.pathname === '/') {
    scrollToSection();
  } else {
    // Navigate to home page first, then scroll after a short delay
    setLocation('/');
    setTimeout(scrollToSection, 100);
  }
};

export const useNavigateToSection = () => {
  const [, setLocation] = useLocation();
  
  return (sectionId: string) => {
    navigateToSection(sectionId, setLocation);
  };
};