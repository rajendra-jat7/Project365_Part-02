import { useState, useEffect } from "react";
import "./QuoteBox.css";

const QuoteBox = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const fetchQuote = async () => {
    try {
      const response = await fetch("https://dummyjson.com/quotes/random");
      
      if (!response.ok) {
        throw new Error("Failed to fetch quote");
      }
  
      const data = await response.json();
      setQuote(data.quote);
      setAuthor(data.author);
    } catch (error) {
      console.error("Error fetching quote:", error);
      setQuote("Oops! Something went wrong.");
      setAuthor("Try Again");
    }
  };
  
  
  
  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="quote-container">
      <p className="quote">{quote}</p>
      <p className="author">- {author}</p>
      <button onClick={fetchQuote}>New Quote</button>
    </div>
  );
};

export default QuoteBox;
