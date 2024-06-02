<?php
require('database.php');

$requestMethod = $_SERVER['REQUEST_METHOD'];

function validateAndInsertComment($connection, $email, $comment) {
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $query = $connection->prepare("INSERT INTO comments (email, comment) VALUES (?, ?)");
        $query->bind_param("ss", $email, $comment);
        if ($query->execute()) {
            respondWithJson(["status" => "success", "message" => "Comment added successfully!"]);
        } else {
            respondWithJson(["status" => "error", "message" => "Error adding comment: " . $query->error]);
        }
        $query->close();
    } else {
        respondWithJson(["status" => "error", "message" => "Invalid email format!"]);
    }
}

function fetchComments($connection) {
    $response = [];
    $commentsQuery = $connection->query("SELECT * FROM comments");
    if ($commentsQuery->num_rows > 0) {
        while ($comment = $commentsQuery->fetch_assoc()) {
            $response[] = $comment;
        }
        respondWithJson(["status" => "success", "comments" => $response]);
    } else {
        respondWithJson(["status" => "success", "comments" => "No comments found!"]);
    }
}

function respondWithJson($data) {
    header('Content-Type: application/json');
    echo json_encode($data);
}

if ($requestMethod === 'POST') {
    $emailInput = $_POST['email'];
    $commentInput = $_POST['comment'];
    validateAndInsertComment($connection, $emailInput, $commentInput);
} elseif ($requestMethod === 'GET') {
    fetchComments($connection);
}

$connection->close();
?>
