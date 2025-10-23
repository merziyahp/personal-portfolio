
import { ReadingList } from "@/components/reading-list";
import { readingData } from "@/data/reading";

export default function Reading() {
  return <ReadingList sections={readingData} />;
}
