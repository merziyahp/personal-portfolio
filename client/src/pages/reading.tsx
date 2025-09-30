
import { ReadingList } from "@/components/reading-list";
import { readingData } from "@/data/reading-data";

export default function Reading() {
  return <ReadingList sections={readingData} />;
}
