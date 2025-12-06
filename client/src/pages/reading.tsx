
import { ReadingList } from "@/components/reading-list";
import { readingData } from "@/data/reading";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function Reading() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <ReadingList sections={readingData} />
      </div>
      <Footer />
    </div>
  );
}
