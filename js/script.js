/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

//This is an array of quote objects
var quotes = [
  {
    quote: "Bad politicians are sent to Washington by good people who don't vote.",
    source: "William E. Simon",
    tags: [" Politics", " Democracy"]
  },
  {
    quote: "Science gives us knowledge, but only philosophy can give us wisdom.",
    source: "Will Durant",
    tags: [ "Civilization", " Wisdom"]
  },
  {
    quote: "To live is the rarest thing in the world. Most people exist, that is all",
    source: "Oscar Wilde",
    year: "1875",
  },
  {
    quote: "It is not enough that we do our best; sometimes we must do what is required.",
    source: "Winston S. Churchill",
    citation: "World War II",
    tags: [" History", " Uk ", " WW2"]
  },
  {
    quote: "We are consumers. We're the by-products of a lifestyle obsession.",
    source: "Tyler Durden",
    citation: "Fight Club",
    year: "1999",
    tags: [" Film", " Consumerism"]
  },
  {
    quote: "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.",
    source: "Patrick McKenzie",
    citation: "Twitter",
    year: "2016",
    tags: [" Life", " Savage", " Developer", " Coding"]
  }
];

//This is a global variable to be used later;
var interval;

//Returns a random quote from a provided array of quotes
function getRandomQuote(array) {
  var randomNumber = Math.floor(Math.random() * array.length);
  return quotes[randomNumber];
}

//Checks if a property of a quote object exists, if so the function returns a string
//containing a span tag with the property name as a class and the property value as its content
function ifPropertyExistsGetAsHTML(randomQuote, property) {
  var value = randomQuote[property];
  if (value !== undefined) {
    return "<span class=\"" + property + "\">" + value + "</span>";
  }
  return "";
}

//Sets the background to a random color
function setRandomBackgroundColor() {
  //Credit to Bill the Lizard on Stack OverFlow for the random hex value generator below
  //Source: (https://stackoverflow.com/questions/5092808/how-do-i-randomly-generate-html-hex-color-codes-using-javascript)
  var randomColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
  document.body.style.backgroundColor = randomColor;
}

//Gets a random quote, then it assembles a string with its properties, finally fills the "quote box" with the string with the appropriate format
function printQuote() {
  var randomQuote = getRandomQuote(quotes);

  var quote = randomQuote.quote;
  var quoteHTML = "<p class=\"quote\">" + quote + "</p>";

  var source = randomQuote.source;
  quoteHTML += "<p class=\"source\">" + source;

  quoteHTML += ifPropertyExistsGetAsHTML(randomQuote, "citation")
  quoteHTML += ifPropertyExistsGetAsHTML(randomQuote, "year")

  quoteHTML += "</p>";

  if (randomQuote.tags !== undefined) {
    quoteHTML += "<p class=\"tags\">" + randomQuote.tags.toString() + "</p>";
  }

  document.getElementById('quote-box').innerHTML = quoteHTML;
  setRandomBackgroundColor();

  //Clears interval value if its not undefined
  if (interval !== undefined) {
    window.clearInterval(interval);
  }

  //Sets the refreshQuoteAfter function to 25 seconds
  interval = refreshQuoteAfter(25000);
}

//Refreshes the quote after a set amount of time and returns the interval object to be stored
function refreshQuoteAfter(time) {
  return window.setInterval( function() {
    printQuote();
  }, time);
}

//Prints a quote for the first time after the page is loaded
printQuote();

//When loadQuote button is clicked, it prints a quote on the quoteBox
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
