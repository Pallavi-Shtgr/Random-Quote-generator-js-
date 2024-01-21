const quoteText = document.querySelector (".quote"),
authorname = document.querySelector(".author .name")
quoteBtn = document.querySelector("button");

function randomQuote(){
    fetch("http://api.quotable.io/random").then(res=> res.json()).then (result =>{
        quoteText.innerText = result.content;
        authorName.innerText = result.author;
    })
}
quoteBtn.addEventListener("click", randomQuote);