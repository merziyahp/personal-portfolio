import { jsx as _jsx } from "react/jsx-runtime";
import { ReadingList } from "@/components/reading-list";
import { readingData } from "@/data/reading-data";
export default function Reading() {
    return _jsx(ReadingList, { sections: readingData });
}
