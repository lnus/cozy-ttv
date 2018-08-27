import * as gatherer from "gatherer";
var gatherer = require("gatherer");

$(document).ready(function(){
    var gathererInterval = window.setInterval(gatherer.getInfo, 100);
})