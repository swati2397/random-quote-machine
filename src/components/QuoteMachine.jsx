import React, { useEffect, useState } from "react";

const quotes = [
  {
    text: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde"
  },
  {
    text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: "Albert Einstein"
  },
  {
    text: "So many books, so little time.",
    author: "Frank Zappa"
  },
  {
    text: "A room without books is like a body without a soul.",
    author: "Marcus Tullius Cicero"
  }
];

const bgColors = [
    "#fcd34d", // yellow
    "#fca5a5", // red
    "#a5b4fc", // blue
    "#6ee7b7", // green
    "#f9a8d4", // pink
    "#fdba74", // orange
    "#c4b5fd", // violet
  ];
  
  function getRandomColor() {
    return bgColors[Math.floor(Math.random() * bgColors.length)];
  }
  
function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

export default function QuoteMachine() {
  const [quote, setQuote] = useState({ text: "", author: "" });

  useEffect(() => {
    const initialQuote = getRandomQuote();
    setQuote(initialQuote);
    document.body.style.backgroundColor = getRandomColor();
  }, []);
  

  const handleNewQuote = () => {
    setQuote(getRandomQuote());
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
  };
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div
        id="quote-box"
        className="bg-white shadow-xl rounded-2xl p-6 max-w-xl text-center"
      >
        <p id="text" className="text-2xl font-semibold mb-4">
          "{quote.text}"
        </p>
        <p id="author" className="text-lg text-gray-600 mb-6">
          - {quote.author}
        </p>
        <div className="flex justify-between items-center">
          <a
            id="tweet-quote"
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
              `"${quote.text}" - ${quote.author}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            X
          </a>
          <button id="new-quote" onClick={handleNewQuote}>
  New Quote
</button>

        </div>
      </div>
    </div>
  );
}
