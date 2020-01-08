const quotes = [
  {
    name: "Greyson Chance",
    quote: "If you stop, you’ll lose everything. You’ve got to keep going."
  },
  {
    name: "Cliff Burton",
    quote:
      "Just keep going like crazy and look back when it’s over. Otherwise, you just get confused."
  },
  {
    name: "Zig Ziglar",
    quote:
      "You can get everything in life you want if you will just help enough other people get what they want."
  },
  {
    name: "George Lucas",
    quote:
      "You simply have to put one foot in front of the other and keep going. Put blinders on and plow right ahead"
  },
  {
    name: " Stella Maeve",
    quote:
      "Things aren’t always easy, but you just have to keep going and don’t let the small stuff bog you down."
  },
  {
    name: "Roy T. Bennett",
    quote:
      "What’s done is done. What’s gone is gone. One of life’s lessons is always moving on. It’s okay to look back to see how far you’ve come but keep moving forward."
  },
  {
    name: "Albert Einstein",
    quote:
      "Life is like riding a bicycle. To keep your balance, you must keep moving."
  },
  {
    name: "George R.R. Martin",
    quote: "“If I look back I am lost.”"
  }
];

const quoteBtn = document.querySelector("#quoteBtn");
const quoteAuthor = document.querySelector("#quoteAuthor");
const quote = document.querySelector("#quote");

quoteBtn.addEventListener("click", displayQuote);

function displayQuote() {
  let number = Math.floor(Math.random() * quotes.length);
  quoteAuthor.innerHTML = quotes[number].name;
  quote.innerHTML = quotes[number].quote;
}
