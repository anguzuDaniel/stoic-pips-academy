"use client";

import { useTheme } from "next-themes";
import { books } from "./bookRecommendations";
import { Book } from "./book";

export default function Resources() {
  const { theme } = useTheme();

  const headingColor = theme === "dark" ? "text-white" : "text-gray-900";
  const textColor = theme === "dark" ? "text-gray-300" : "text-gray-700";
  const bgColor = theme === "dark" ? "bg-gray-900" : "bg-gray-50";

    // Group books by category
  const booksByCategory: Record<string, Book[]> = books.reduce((acc, book) => {
    if (!acc[book.category]) acc[book.category] = [];
    acc[book.category].push(book);
    return acc;
  }, {} as Record<string, Book[]>);

  return (
    <div className={`p-6 ${bgColor} min-h-screen`}>
      <h3 className={`text-2xl font-semibold mb-4 ${headingColor}`}>Recommended Books</h3>

      {Object.entries(booksByCategory).map(([category, booksInCategory]) => (
        <div key={category} className="mb-6">
          <h4 className={`text-xl font-semibold mb-2 ${headingColor}`}>{category}</h4>
          <ul className={`list-disc pl-5 ${textColor}`}>
            {booksInCategory.map((book, idx) => (
              <li key={idx}>
                {book.title} – {book.author}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
