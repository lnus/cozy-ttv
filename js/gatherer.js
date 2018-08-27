$(document).ready(function(){
    var gathererInterval = window.setInterval(getInfo, 100);
})

function getInfo() {
    var chatMessages = document.getElementsByClassName("chat-line__message");

    // Info about chat messages

    for (i=0; i < chatMessages.length; i++) {
        var chatMessage = chatMessages[i];

        if (!$(chatMessage).hasClass("cozy-read")) {
            var children = chatMessage.childNodes;
            var userinfo = children[1].childNodes[0];
            var username = userinfo.childNodes[0].innerHTML;
            var message = children[3].innerHTML;
            console.log(username+": "+message);
            $(chatMessage).addClass("cozy-read");
        }
    }
}