// TODO: Get to work on this LUL

function addBadge(message, rank) {
    const url = chrome.runtime.getURL("assets/badges/"+rank+"-badge.png");
    // const url = "https://static-cdn.jtvnw.net/badges/v1/5527c58c-fb7d-422d-b71b-f309dcb85cc1/1"

    html = `<span><img alt="`+rank+`" src="`+url+`" class="chat-badge"></span>`
    // srcset="`+url+` 1x, `+url+` 2x, `+url+` 4x"

    $(message).prepend(html)
    console.log(message);
    console.log(rank);
}