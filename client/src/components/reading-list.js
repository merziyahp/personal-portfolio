import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
export function ReadingList({ sections }) {
    const [imageErrors, setImageErrors] = useState(new Set());
    // Generate cover URL using Open Library API
    const getCoverUrl = (book) => {
        if (book.isbn) {
            return `https://covers.openlibrary.org/b/isbn/${book.isbn}-L.jpg`;
        }
        // Fallback to title-based lookup
        return `https://covers.openlibrary.org/b/title/${encodeURIComponent(book.title)}-L.jpg`;
    };
    // Handle image load errors and small/blank images
    const handleImageError = (bookKey) => {
        setImageErrors(prev => new Set([...prev, bookKey]));
    };
    const handleImageLoad = (event, bookKey) => {
        const img = event.currentTarget;
        // Check if image is too small (likely a placeholder) or has minimal content
        if (img.naturalWidth < 50 || img.naturalHeight < 50) {
            handleImageError(bookKey);
        }
    };
    // Create a unique key for each book
    const getBookKey = (book) => `${book.title}-${book.author}`;
    return (_jsxs("div", { className: "min-h-screen bg-gray-50", children: [_jsx("div", { className: "bg-white shadow-sm", children: _jsxs("div", { className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12", children: [_jsx("h1", { className: "text-4xl font-bold text-gray-900 mb-4", children: "Reading List" }), _jsx("p", { className: "text-lg text-gray-600", children: "Books I'm currently reading and have enjoyed" })] }) }), _jsx("div", { className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12", children: sections.map((section, sectionIndex) => (_jsxs("div", { className: "mb-16", children: [_jsx("h2", { className: "text-2xl font-bold text-gray-900 mb-8", children: section.title }), _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6", children: section.books.map((book, bookIndex) => {
                                const bookKey = getBookKey(book);
                                const hasImageError = imageErrors.has(bookKey);
                                return (_jsxs(Card, { className: "bg-white shadow-md hover:shadow-lg transition-shadow duration-300", children: [_jsx("div", { className: "aspect-[3/4] relative overflow-hidden rounded-t-lg p-4", children: !hasImageError ? (_jsx("img", { src: getCoverUrl(book), alt: `${book.title} cover`, className: "w-full h-full object-contain rounded", onError: () => handleImageError(bookKey), onLoad: (e) => handleImageLoad(e, bookKey) })) : (
                                            // Fallback book cover design
                                            _jsx("div", { className: "w-full h-full bg-white border border-gray-200 flex flex-col justify-center items-center p-4 rounded", children: _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "text-gray-900 font-bold text-sm mb-3 leading-tight", children: book.title }), _jsx("div", { className: "text-gray-600 text-xs", children: book.author })] }) })) }), _jsxs(CardContent, { className: "p-4", children: [_jsx("h3", { className: "font-bold text-gray-900 mb-1 line-clamp-2", children: book.title }), _jsx("p", { className: "text-sm text-gray-600 mb-3", children: book.author }), book.description && (_jsx("p", { className: "text-sm text-gray-700 leading-relaxed", children: book.description }))] })] }, bookIndex));
                            }) })] }, sectionIndex))) })] }));
}
