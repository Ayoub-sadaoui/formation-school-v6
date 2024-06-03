// Retrieve the element where comments will be displayed
const commentsContainer = document.getElementById("comments-area");

// Function to retrieve and display comments from the server
function fetchComments() {
  const url = "http://localhost/formation-school-v6/php/server.php";

  // Fetch comments from the specified URL
  fetch(url)
    .then((response) => response.json()) // Parse the response as JSON
    .then((data) => {
      if (data.status === "success") {
        displayComments(data.comments);
      } else {
        displayNoCommentsMessage();
      }
    })
    .catch(handleFetchError);
}

// Function to display comments in the comments container
function displayComments(comments) {
  commentsContainer.innerHTML = ""; // Clear the comments container

  if (Array.isArray(comments) && comments.length > 0) {
    let htmlContent = "<h2>Commentaires</h2>"; // Initialize HTML string with a header

    // Loop through each comment and build the HTML
    comments.reverse().forEach((comment) => {
      htmlContent += `
            <div class="comment">
                <div class="commenth">
                <img src="lib/profile-icon-comments.png" alt="" />
                <h5>${comment.email}</h5>
              </div>
              <p>${comment.COMMENT}😉</p>
            </div>
            </div>`;
    });

    // Set the built HTML to the comments container
    commentsContainer.innerHTML = htmlContent;
  } else {
    displayNoCommentsMessage();
  }
}

// Function to display a placeholder message when no comments are available
function displayNoCommentsMessage() {
  commentsContainer.innerHTML = "<p>Aucun commentaire pour le moment.</p>";
}

// Function to handle fetch errors
function handleFetchError(error) {
  console.error("Error loading comments:", error); // Log any errors that occur during fetch
}

// Call the fetchComments function when the page loads
window.addEventListener("load", fetchComments);
