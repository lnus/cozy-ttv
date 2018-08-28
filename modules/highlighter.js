$(document).ready(function(){
    const url = chrome.runtime.getURL("data/rank_list.json");

    fetch(url)
        .then((response) => response.json())
        .then((json) => mapRankToUser(json,
                                "emotes/",
                                "emoticon-",
                                ));
})

function mapRankToUser(json) {
    rank_list = json;
}

function highlightName(user) {
    username = user.innerHTML;

    for (rank in rank_list) {
        if (username === rank) {
            $(user).addClass(rank_list[rank]);
            return rank_list[rank];
        }
    }

    return null;
}