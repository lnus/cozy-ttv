$(document).ready(function(){
    var nameInterval = window.setInterval(highlightNames, 100);
}) 

function highlightNames() {
    var authors = document.getElementsByClassName("chat-author__display-name");

    for (i=0; i < authors.length; i++) {
        author = authors[i];

        if (author.innerHTML === "LPLinuZ") {
            $(author).addClass("developer");
        }
    }
}
