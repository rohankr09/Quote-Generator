const quote = document.getElementById("quote");
const author = document.getElementById("author");

function getQuoteFromApiNinjas(category) {
  $.ajax({
    method: "GET",
    url: "https://api.api-ninjas.com/v1/quotes?category=" + category,
    headers: { "X-Api-Key": "BaHc5O4uahH5XAdalvkRrg==EIziymJQa2VNEbQn" },
    contentType: "application/json",
    success: function (result) {
      quote.innerHTML = result[0].quote;
      author.innerHTML = result[0].author;
    },
    error: function ajaxError(jqXHR) {
      console.error("Error: ", jqXHR.responseText);
      quote.innerHTML = "Error fetching quote. Please try again later.";
      author.innerHTML = "";
    },
  });
}

function tweet() {
  window.open(
    "https://twitter.com/intent/tweet?text=" +
      quote.innerHTML +
      "---- by " +
      author.innerHTML,
    "Tweet Window",
    "width=600, height=300"
  );
}

function whatsapp() {
  const quoteText = quote.innerHTML;
  const authorText = author.innerHTML;
  const encodedMessage = encodeURIComponent(quoteText + " -- by " + authorText);
  const whatsappUrl = "https://api.whatsapp.com/send?text=" + encodedMessage;
  window.open(whatsappUrl, "Whatsapp window", "width=600,height=300");
}
