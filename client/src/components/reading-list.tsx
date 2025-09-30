
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

interface Book {
  title: string;
  author: string;
  isbn?: string;
  description?: string;
}

interface ReadingSection {
  title: string;
  books: Book[];
}

interface ReadingListProps {
  sections: ReadingSection[];
}

export function ReadingList({ sections }: ReadingListProps) {
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());

  // Generate cover URL using Open Library API
  const getCoverUrl = (book: Book) => {
    if (book.isbn) {
      return `https://covers.openlibrary.org/b/isbn/${book.isbn}-L.jpg`;
    }
    // Fallback to title-based lookup
    return `https://covers.openlibrary.org/b/title/${encodeURIComponent(book.title)}-L.jpg`;
  };

  // Handle image load errors
  const handleImageError = (bookKey: string) => {
    setImageErrors(prev => new Set([...prev, bookKey]));
  };

  // Create a unique key for each book
  const getBookKey = (book: Book) => `${book.title}-${book.author}`;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Reading List</h1>
          <p className="text-lg text-gray-600">
            Books I'm currently reading and have enjoyed
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">{section.title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {section.books.map((book, bookIndex) => {
                const bookKey = getBookKey(book);
                const hasImageError = imageErrors.has(bookKey);
                
                return (
                  <Card key={bookIndex} className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="aspect-[3/4] relative overflow-hidden rounded-t-lg">
                      {!hasImageError ? (
                        <img
                          src={getCoverUrl(book)}
                          alt={`${book.title} cover`}
                          className="w-full h-full object-cover"
                          onError={() => handleImageError(bookKey)}
                        />
                      ) : (
                        // Fallback gradient background
                        <div className="w-full h-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                          <div className="text-center p-4">
                            <div className="text-white font-bold text-lg mb-2">{book.title}</div>
                            <div className="text-orange-100 text-sm">{book.author}</div>
                          </div>
                        </div>
                      )}
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-bold text-gray-900 mb-1 line-clamp-2">{book.title}</h3>
                      <p className="text-sm text-gray-600 mb-3">{book.author}</p>
                      {book.description && (
                        <p className="text-sm text-gray-700 leading-relaxed">{book.description}</p>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
