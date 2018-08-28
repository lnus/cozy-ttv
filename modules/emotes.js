$(document).ready(function(){
    const url = chrome.runtime.getURL("data/emotes.json");

    console.log("Emote function ready :thumbsup:")

    fetch(url)
        .then((response) => response.json())
        .then((json) => mapIdsToPaths(json,
                                "emotes/",
                                "emoticon-",
                                ));
})

function convertToEmotes(message) {
    contentInner = message.innerHTML
    message.innerHTML = replaceEmoticons(contentInner, emotes);
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
    emotes = json;
    Object.keys(emotes).forEach((id) => {
        // emote_url = url + prefix + emotes[id] + "-" + size + ".png";
        emote_url = url + prefix + emotes[id] + ".png";
        emotes[id] = chrome.extension.getURL(emote_url);
    })
    console.log(emotes);
}
