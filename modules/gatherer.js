var port = chrome.extension.connect({
    name: "infoChannel"
});

$(document).ready(function(){
    var gathererInterval = window.setInterval(getInfo, 20);
})

// Gets info and sends it to the correct modules
function getInfo() {
    var chatMessages = document.getElementsByClassName("chat-line__message");

    // Info about chat messages

    for (i=0; i < chatMessages.length; i++) {
        var chatMessage = chatMessages[i];

        if (!$(chatMessage).hasClass("cozy-read")) {
            var children = chatMessage.childNodes;
            var userinfo = children[1].childNodes[0];
            var username = userinfo.childNodes[0];
            var message = children[3];

            user_rank = highlightName(username);
            convertToEmotes(message);
            /* if (user_rank != null) {
                addBadge(chatMessage, user_rank);
            }
 */
            $(chatMessage).addClass("cozy-read");
        }
    }
}