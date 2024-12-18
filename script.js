const quotes = [
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Success is not the key to happiness. Happiness is the key to success. – Albert Schweitzer",
    "Your time is limited, so don't waste it living someone else's life. – Steve Jobs",
    "Believe you can and you're halfway there. – Theodore Roosevelt",
    "The best way to predict the future is to invent it. – Alan Kay",
];

const quoteElement = document.getElementById('quote');
const newQuoteButton = document.getElementById('new-quote');

newQuoteButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];
});
