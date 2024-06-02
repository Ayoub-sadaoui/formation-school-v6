// Retrieve the element where comments will be displayed
const commentsContainer = document.getElementById("comments-area");

// Function to retrieve and display comments from the server
function fetchComments() {
  // Fetch comments from the specified URL
  fetch("http://localhost/school-formation-v3/php/com.php")
    .then((response) => response.json()) // Parse the response as JSON
    .then((data) => {
      if (data.status === "success") {
        // Check if the response status is "success"
        let feedback = data.comments; // Get the comments from the response
        console.log(feedback); // Log comments to the console for debugging
        commentsContainer.innerHTML = ""; // Clear the comments container

        if (Array.isArray(feedback)) {
          // Check if feedback is an array
          let htmlContent = "<h2>Commentaires</h2>"; // Initialize HTML string with a header

          // Loop through each comment and build the HTML
          feedback.forEach((item) => {
            htmlContent += `
            <div class="comment">
              <h5>${item.email}</h5>
              <p>${item.COMMENT}</p>
            </div>`;
          });

          // Set the built HTML to the comments container
          commentsContainer.innerHTML = htmlContent;
        } else {
          // If no comments are available, display a placeholder message
          commentsContainer.innerHTML =
            "<p>Aucun commentaire pour le moment.</p>";
        }
      }
    })
    .catch((err) => {
      console.error("Error loading comments:", err); // Log any errors that occur during fetch
    });
}

// Call the fetchComments function when the page loads
window.addEventListener("load", fetchComments);
