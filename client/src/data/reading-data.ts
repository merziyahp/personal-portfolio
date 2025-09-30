
// Reading list data - easily add new sections and books here
export interface Book {
  title: string;
  author: string;
  isbn?: string; // Optional ISBN for better cover lookup
  description?: string; // Your personal takeaways
}

export interface ReadingSection {
  title: string;
  books: Book[];
}

export const readingData: ReadingSection[] = [
  {
    title: "Fiction",
    books: [
      {
        title: "The Covenant of Water",
        author: "Abraham Verghese",
        isbn: "9780802162182",
        description: "A beautiful narration of how the lives of families intersect across generations."
      },
      {
        title: "Project Hail Mary",
        author: "Andy Weir",
        isbn: "9780593135204",
        description: "Sci-fi adventure that was truly engaging and mind-blowing for its scientific accuracy."
      }
    ]
  },
  {
    title: "Product Management",
    books: [
      {
        title: "Inspired",
        author: "Marty Cagan",
        isbn: "9781119387503",
        description: "Essential reading for understanding what makes great product teams tick."
      },
      {
        title: "Continuous Discovery Habits",
        author: "Teresa Torres",
        isbn: "9781736633304",
        description: "A Product Management essential IMO. The book provides actionable and sound advice on scheduling, gathering data and presenting interview analysis and mapping it into a visual diagram that communicates business relevance, prioritization and user pain points cohesively."
      },
      {
        title: "Radical Product Thinking",
        author: "Radhika Dutt",
        isbn: "9781523093328",
        description: "I particularly enjoyed Dutt's callout on concepts she calls local maxima and global maxima. She explains how product managers often get stuck in local maxima and short-term thinking, and how to break out of it to achieve global maxima and long term success."
      }
    ]
  }
];
