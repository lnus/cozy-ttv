$(document).ready(function(){
    var emoteInterval = window.setInterval(displayEmotes, 100);
    const url = chrome.runtime.getURL("data/emotes.json");

    fetch(url)
        .then((response) => response.json())
        .then((json) => mapIdsToPaths(json,
                                "emotes/",
                                "emoticon-",
                                ));
})

function displayEmotes() {
    messages = document.getElementsByClassName("message");
    for (i=0; i < messages.length; i++) {
        message = messages[i];
        if ($(message).hasClass("cozy-parsed")) {
        } else {
            message = messages[i];
            content = message.childNodes[0];
            contentInner = content.innerHTML;
            content.innerHTML = replaceEmoticons(contentInner, emotes);
            $(message).addClass("cozy-parsed");
        }
    }
}

// Regex to replace text with emoticon if it matches
function replaceEmoticons(text, emotes) {
    return Object.keys(emotes).reduce((result, emote) => {
        return result.replace(new RegExp(RegExpEscape(emote), "gi"), function(match) {
            return (img => img != null ? "<img width='auto' height='28px' src='" + img + "'/>" : match)(emotes[match])
        });
    }, text);
}

// Helper function for special chars in regex
function RegExpEscape(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}

// Map emote IDs to URLs.
function mapIdsToPaths(json, url, prefix, size="28x28") {
    emotes = json[0];
    Object.keys(emotes).forEach((id) => {
        // emote_url = url + prefix + emotes[id] + "-" + size + ".png";
        emote_url = url + prefix + emotes[id] + ".png";
        emotes[id] = chrome.extension.getURL(emote_url);
    })
    console.log(emotes);
}
