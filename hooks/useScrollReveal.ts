import { useEffect } from "react";

export function useScrollReveal() {
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const elements = document.querySelectorAll('.scroll-reveal');

    elements.forEach((element, index) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                entry.target.classList.add('revealed');
              }, index * 100);
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);
}
