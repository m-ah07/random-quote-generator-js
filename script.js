document.addEventListener("DOMContentLoaded", () => {
  const quoteBox = document.getElementById("quote");
  const authorBox = document.getElementById("author");
  const newQuoteBtn = document.getElementById("new-quote");
  const categorySelect = document.getElementById("category");

  let quotes = [];

  // Fetch quotes from JSON file
  fetch("quotes.json")
    .then((response) => response.json())
    .then((data) => {
      quotes = data;
    })
    .catch((error) => console.error("Error loading quotes:", error));

  const getQuote = (category = "all") => {
    const filteredQuotes =
      category === "all"
        ? quotes
        : quotes.filter((q) => q.category === category);
    if (filteredQuotes.length === 0) {
      return {
        text: "No quotes available for this category.",
        author: "System",
      };
    }
    const randomQuote =
      filteredQuotes[Math.floor(Math.random() * filteredQuotes.length)];
    return randomQuote;
  };

  const displayQuote = () => {
    const category = categorySelect.value;
    const quote = getQuote(category);
    quoteBox.textContent = quote.text;
    authorBox.textContent = `- ${quote.author}`;
  };

  newQuoteBtn.addEventListener("click", displayQuote);
  categorySelect.addEventListener("change", displayQuote);
});
