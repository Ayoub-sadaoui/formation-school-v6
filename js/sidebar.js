// open  the side bar
function showSidebar() {
  document.getElementById("nav-container").style.width = "300px";
  document.getElementById("openbtn").style.visibility = "hidden";
  document.getElementById("closebtn").style.visibility = "visible";
}
// close the side bar
function hideSidebar() {
  document.getElementById("nav-container").style.width = "0";
  document.getElementById("openbtn").style.visibility = "visible";
  document.getElementById("closebtn").style.visibility = "hidden";
}
