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

const bgColors = ["#fcd34d", "#fca5a5", "#a5b4fc", "#6ee7b7", "#f9a8d4", "#fdba74", "#c4b5fd"];

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function getRandomColor() {
  return bgColors[Math.floor(Math.random() * bgColors.length)];
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
    document.body.style.backgroundColor = getRandomColor();
  };

  return (
    <div className="container">
      <div id="quote-box">
        <p id="text">"{quote.text}"</p>
        <p id="author">- {quote.author}</p>
        <div className="buttons">
          <a
            id="tweet-quote"
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
              `"${quote.text}" - ${quote.author}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Tweet
          </a>
          <button id="new-quote" onClick={handleNewQuote}>
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
}
