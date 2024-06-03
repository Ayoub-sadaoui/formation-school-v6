document.addEventListener("DOMContentLoaded", function () {
  var feedbackForm = document.getElementById("comForm");

  function handleFormSubmit(event) {
    event.preventDefault();

    var userEmail = document.getElementById("email").value;
    var userComment = document.getElementById("comment").value;

    if (userEmail && userComment) {
      submitFeedback(userEmail, userComment);
    }
  }

  function submitFeedback(email, comment) {
    fetch("http://localhost/school-formation-v3/php/com.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body:
        "email=" +
        encodeURIComponent(email) +
        "&comment=" +
        encodeURIComponent(comment),
    })
      .then((response) => response.json())
      .then(handleResponse)
      .catch(handleError);
  }

  function handleResponse(result) {
    if (result.status === "success") {
      console.log(result.message);
      window.location.reload();
    } else {
      console.error(result.message);
    }
  }

  function handleError(error) {
    console.error("Error submitting feedback:", error);
  }

  feedbackForm.addEventListener("submit", handleFormSubmit);
});
