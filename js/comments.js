document.addEventListener("DOMContentLoaded", function () {
  var feedbackForm = document.getElementById("comForm");

  // Listener for form submission
  feedbackForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default submission behavior

    var userEmail = document.getElementById("email").value;
    var userComment = document.getElementById("comment").value;

    if (userEmail && userComment) {
      // Ensure both email and comment are provided
      fetch("http://localhost/school-formation-v3/php/com.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body:
          // Encode email and comment for URL safety
          "email=" +
          encodeURIComponent(userEmail) +
          "&comment=" +
          encodeURIComponent(userComment),
      })
        .then(function (res) {
          return res.json(); // Parse response as JSON
        })
        .then(function (result) {
          if (result.status === "success") {
            console.log(result.message); // Log success message
            window.location.reload(); // Refresh to display new comment
          } else {
            console.error(result.message); // Log error message on failure
          }
        })
        .catch(function (err) {
          console.error("Error submitting feedback:", err); // Log any fetch errors
        });
    }
  });
});
