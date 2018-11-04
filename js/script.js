/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing

var quotes = [
  {
    quote: "Hello1111",
    source: "Justin",
    citation: "fdfdasdf",
    year: "1927",
  },
  {
    quote: "12234",
    source: "Justin",
    citation: "fdfdasdf",
    year: "1926",
  },
  {
    quote: "43434",
    source: "Justin",
    citation: "fdfdasdf",
    year: "1925",
  },
  {
    quote: "dfasdfasdf",
    source: "Justin",
    citation: "fdfdasdf",
    year: "1924",
  },
  {
    quote: "dsafasfdfdz",
    source: "Justin",
    citation: "fdfdasdf",
    year: "1923",
  },
];

function getRandomQuote(array) {
  var randomNumber = Math.floor(Math.random() * array.length);
  return quotes[randomNumber];
}

function ifPropertyExistsGetText(randomQuote, property) {
  var value = randomQuote[property];
  if (value !== undefined) {
    return "<span class=\"property\">" + value + "</span>";
  }
  return "";
}

function printQuote() {
  var randomQuote = getRandomQuote(quotes);

  var quote = randomQuote.quote;
  var text = "<p class=\"quote\">" + quote + "</p>";

  var source = randomQuote.source;
  text += "<p class=\"source\">" + source;

  text += ifPropertyExistsGetText(randomQuote, "citation")
  text += ifPropertyExistsGetText(randomQuote, "year")

  text += "</p>";

  document.getElementById('quote-box').innerHTML = text;
}

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
