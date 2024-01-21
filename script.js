const quoteText = document.querySelector (".quote"),
authorname = document.querySelector(".author .name")
quoteBtn = document.querySelector("button"),
soundBtn= document.querySelector(".sound"),
copyBtn = doxument.querySelector(".copy"),
twitterBtn= document.querySelector(".twitter");


function randomQuote(){
    quoteBtn.classList.add("loading");
    quoteBtn.innerText = "Loading quote...";
    fetch("http://api.quotable.io/random").then(res=> res.json()).then (result =>{
        quoteText.innerText = result.content;
        authorName.innerText = result.author;
        quoteBtn.innerText= "New Quote";
        quoteBtn.classList.remove("loading");
    });


}

soundBtn.addEventListener("click", ()=> {
    // The SpeechSynthesisUtterance is a web search that represnts speech request
    let utterance = new SpeechSynthesisUtterance('${quoteText.innerText} by ${authorName.innerText}');
    speechSynthesis.speak(utterance);
});


copyBtn.addEventListener("click", ()=> {

    //copying the quote text on copyBtn click
    // writeText() property the specified text string to the system clopboard.
    navigator.clipboard.writeText(quoteText.innerText);
});

twitterBtn.addEventListener("click", ()=> {

let tweetUrl='https://twitter.com/intent/tweet?url= ${uoteText.innerText}';
window.SVGStopElement(tweetUrl, "_blank");
});

quoteBtn.addEventListener("click", randomQuote);