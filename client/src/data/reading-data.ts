
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
        title: "The Midnight Library",
        author: "Matt Haig",
        isbn: "9780525559474",
        description: "A beautiful reminder that every life contains infinite possibilities and second chances."
      },
      {
        title: "Project Hail Mary",
        author: "Andy Weir",
        isbn: "9780593135204",
        description: "Science and humor combine perfectly to create an unforgettable space adventure."
      },
      {
        title: "Tomorrow, and Tomorrow, and Tomorrow",
        author: "Gabrielle Zevin",
        isbn: "9780593321201",
        description: "A profound exploration of friendship, creativity, and the games we play in life."
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
        title: "The Lean Startup",
        author: "Eric Ries",
        isbn: "9780307887894",
        description: "Foundational concepts for building products that customers actually want."
      }
    ]
  },
  {
    title: "Business Strategy",
    books: [
      {
        title: "Good Strategy Bad Strategy",
        author: "Richard Rumelt",
        isbn: "9780307886231",
        description: "Clear thinking about what strategy actually is and how to develop good ones."
      }
    ]
  }
];
