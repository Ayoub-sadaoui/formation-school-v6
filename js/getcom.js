// Retrieve the element for the header
const headerContainer = document.getElementById("header-container");

// Retrieve the element for the navbar
const navbarContainer = document.getElementById("nav-container");

// Fetch the header HTML from a separate file and insert it into the header container
fetch("./header.html")
  .then((res) => res.text()) // Parse the response as text
  .then((headerHtml) => {
    headerContainer.innerHTML = headerHtml; // Set the inner HTML of the header container
  })
  .catch((err) => {
    console.error("Error fetching header:", err); // Log any errors that occur
  });

// Fetch the navbar HTML from a separate file and insert it into the navbar container
fetch("./nav.html")
  .then((res) => res.text()) // Parse the response as text
  .then((navHtml) => {
    navbarContainer.innerHTML = navHtml; // Set the inner HTML of the navbar container
  })
  .catch((err) => {
    console.error("Error fetching navbar:", err); // Log any errors that occur
  });
