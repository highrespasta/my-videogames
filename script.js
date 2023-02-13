window.onload = function() {init()};
document.getElementById("navbar").onclick = function() {updateCheckbox()};

function init() {
  sort();
  updateCheckbox();
}

function updateCheckbox() {
  checkboxSort();
  checkPS1();
  checkPS2();
  checkPS3();
}
// sorts the games by alphabetical order by the text in the <p> that is hidden
function sort() {
    var list, i, switching, b, shouldSwitch;
    list = document.getElementById("games");
    switching = true;
    while (switching) {
      switching = false;
      b = list.getElementsByTagName("div");
      for (i = 0; i < (b.length - 1); i++) {
        shouldSwitch = false;
        if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        b[i].parentNode.insertBefore(b[i + 1], b[i]);
        switching = true;
      }
    }
  }
// checks all playstation consoles if all playstation is checked
function checkboxSort() {
    allBRAND = document.getElementById('checkPS');
    consoles = document.querySelectorAll(".ps");
    if (allBRAND.checked == true) {
      consoles.forEach((element) => {
        element.checked = true;
      });
    }
}

// shows/hides games per console

function checkPS1() {
  gamesCheck = document.getElementById('checkPS1');
  games = document.querySelectorAll(".ps1");
  
  if (gamesCheck.checked == false) {
    games.forEach((element) => {
      element.classList.add("hidegame");
    });
  } else {
    games.forEach((element) => {
      element.classList.remove("hidegame");
    });
  }
}

function checkPS2() {
  gamesCheck = document.getElementById('checkPS2');
  games = document.querySelectorAll(".ps2");
  
  if (gamesCheck.checked == false) {
    games.forEach((element) => {
      element.classList.add("hidegame");
    });
  } else {
    games.forEach((element) => {
      element.classList.remove("hidegame");
    });
  }
}

function checkPS3() {
  gamesCheck = document.getElementById('checkPS3');
  games = document.querySelectorAll(".ps3");
  
  if (gamesCheck.checked == false) {
    games.forEach((element) => {
      element.classList.add("hidegame");
    });
  } else {
    games.forEach((element) => {
      element.classList.remove("hidegame");
    });
  }
}