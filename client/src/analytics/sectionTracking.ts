declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export function initSectionViewTracking(sectionIds: string[]) {
  const seen = new Set<string>();

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;

        const id = (entry.target as HTMLElement).id;
        if (!id || seen.has(id)) continue;

        seen.add(id);

        window.gtag?.("event", "section_view", {
          section_id: id,
        });
      }
    },
    { threshold: 0.5 }
  );

  for (const id of sectionIds) {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  }
}
