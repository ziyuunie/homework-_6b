// Get the modal
var modal = document.getElementById('popup');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function scheduleAppt()
{
  localStorage.setItem("apptLocation",document.getElementById("location").value);
  localStorage.setItem("apptDate",document.getElementById("date").value);
  localStorage.setItem("apptTime",document.getElementById("time").value);

  apptInfo();
}

function apptInfo() {
  document.getElementById("demo").innerHTML = localStorage.getItem("apptLocation");
  document.getElementById("apptDate").innerHTML = localStorage.getItem("apptDate");
  document.getElementById("apptTime").innerHTML = localStorage.getItem("apptTime");
}

//error when choosing date/time before location
function chooseLocation() {
  var location = document.forms["schedule2"]["location"].value;
  if (location == "ecg") {
    return true;
  }
  if else (location == "uc") {
    return true;
  }
  else {
    alert("Error: You must first select a location for your appointment.");
    return false;
  }
}

function validateForm() {
  var apptLoc = document.getElementById("location");
        if (location.value == "") {
            //If the "Please Select" option is selected display error.
            alert("Please select a location!");
            return false;
        }
        return true;
}
