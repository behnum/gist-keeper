// TODO: Make Modular
// TODO: Refactor via ES6

// Require Styles
require("./style.css");

var gistForm = document.getElementById("gistForm");
gistForm.addEventListener("submit", saveGist);

updateView();

// Save Gist
function saveGist(e) {
  e.preventDefault();

  var gistInput = document.getElementById("txtInput").value;

  var today = new Date(); // FIXME: Pretty dates
  var gist = {
    "txt": gistInput,
    "date": today
  };

  var gists = [];

  gists.push(gist);

  if (!localStorage.getItem("gists")) { // First time init
    localStorage.setItem("gists", JSON.stringify(gists));
    updateView();
  } else { // Already exists
    // Load gists
    var currentGists = JSON.parse(localStorage.getItem("gists"));

    // Append to current gist
    currentGists.push(gist);

    // Update LocalStorage with gists
    localStorage.setItem("gists", JSON.stringify(currentGists));

    // Update View
    updateView();

  }

  // clean the input
  document.getElementById("txtInput").value = "";
}

function updateView() {

  if (localStorage.getItem("gists")) { // If exists
    var gistsContainer = document.getElementById("gistsContainer");
    gistsContainer.innerHTML = '';
    
    var gistsCount = document.getElementById("gistsCount");
    gistsCount.innerHTML = JSON.parse(localStorage.getItem("gists")).length;


    var gists = JSON.parse(localStorage.getItem("gists"));

    for (i = 0; i < gists.length; i++) {
      gistsContainer.innerHTML += gists[i].date + "<hr>";
      gistsContainer.innerHTML += gists[i].txt + "<br><br>";

      // TODO: Add Remove Button
    }
  }
}

