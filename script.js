"use strict";


function learnJS(lang, callback) {
  console.log("Я учу JS" + lang);
  callback();
}

function done() {
  console.log("Я прошел 3 урок");
}

learnJS("JavaScript", done);