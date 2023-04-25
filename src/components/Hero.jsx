import React, { useEffect, useState } from "react";

function Hero() {
  const [quote, setQuote] = useState({});
  const getQuotes = () => {
    fetch("https://dummyjson.com/quotes/random")
      .then((res) => res.json())
      .then((result) => setQuote(result));
  };

  useEffect(() => {
    getQuotes();
  }, []);
  return (
    <div className="container mx-auto text-center ">
      <div id="quote-box">
        <article>
          <h2 className="italic text-2xl font-thin" id="text">
            <q> {quote.quote}</q>
          </h2>
          <p id="author" className="font-semibold py-3">
            {quote.author}{" "}
            <a
              className="block font-thin"
              href="twitter.com/intent/tweet"
              id="tweet-quote"
              target="_blank"
            >
              Tweet
            </a>
          </p>

          <button
            className="my-3 ring ring-blue-500 px-3 py-2 rounded-xl font-bold hover:bg-blue-500 hover:scale-105 duration-300"
            id="new-quote"
            onClick={getQuotes}
          >
            Generate Random Quote
          </button>
        </article>
      </div>
    </div>
  );
}

export default Hero;
