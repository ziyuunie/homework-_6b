// Get the modal
var modal = document.getElementById('popup');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//local storage for location
function setLocation() {
  var selectedlocation = document.getElementById("location").value;
  localStorage.setItem("locationvalue", selectedlocation);
}

//local storage for date
function setDate() {
  var selecteddate = document.getElementById("date").value;
  localStorage.setItem("datevalue", selecteddate);
}

//local storage for time
function setTime() {
  var selectedtime = document.getElementById("time").value;
  localStorage.setItem("timevalue", selectedtime);
}

//local storage for reason
function setReason() {
  if (document.getElementById('testing').checked) {
    var selectedreason = document.getElementById('testing').value;
    localStorage.setItem("reasonvalue", selectedreason);
  }
  else if (document.getElementById('vaccine').checked) {
    var selectedreason = document.getElementById('vaccine').value;
    localStorage.setItem("reasonvalue", selectedreason);
  }
  else if (document.getElementById('second').checked) {
    var selectedreason = document.getElementById('second').value;
    localStorage.setItem("reasonvalue", selectedreason);
  }
  else {
    var selectedreason = document.getElementById('booster').value;
    localStorage.setItem("reasonvalue", selectedreason);
  }
}

function setAppt() {
  document.getElementById("apptreason").innerHTML = localStorage.getItem("reasonvalue");
  document.getElementById("apptlocation").innerHTML = localStorage.getItem("locationvalue");
  document.getElementById("apptdate").innerHTML = localStorage.getItem("datevalue");
  document.getElementById("appttime").innerHTML = localStorage.getItem("timevalue");
}
