// TODO: Refactor via ES6

// Require Styles
require("./style.css");

var gistForm = document.getElementById("gistForm");

gistForm.addEventListener("submit", function (e) {
  e.preventDefault();

  var gistInput = document.getElementById("txtInput").value;

  localStorage.setItem("gists", gistInput);
  
});
