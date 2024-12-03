import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollToSection = (refs) => {
  const location = useLocation();

  useEffect(() => {
    const scrollToSection = (ref) => {
      if (ref.current) {
        const offsetTop = ref.current.offsetTop;
        window.scrollTo({
          top: offsetTop - 75,
        });
      }
    };

    if (location.state?.scrollTo) {
      const ref = refs[location.state.scrollTo];
      if (ref) {
        scrollToSection(ref);
      }
    }
  }, [location, refs]);
};

export default useScrollToSection;
