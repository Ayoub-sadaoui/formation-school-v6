<?php
include('database.php');

$requestMethod = $_SERVER['REQUEST_METHOD'];

function addComment($db, $email, $comment) {
    $sql = "INSERT INTO comments (email, comment) VALUES ('$email', '$comment')";
    if ($db->query($sql) === TRUE) {
        sendJsonResponse(["status" => "success", "message" => "Comment added successfully!"]);
    } else {
        sendJsonResponse(["status" => "error", "message" => "Error adding comment: " . $db->error]);
    }
}

function getComments($db) {
    $comments = [];
    $result = $db->query("SELECT * FROM comments");
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $comments[] = $row;
        }
        sendJsonResponse(["status" => "success", "comments" => $comments]);
    } else {
        sendJsonResponse(["status" => "success", "comments" => "No comments found!"]);
    }
}

function sendJsonResponse($data) {
    header('Content-Type: application/json');
    echo json_encode($data);
}

if ($requestMethod === 'POST') {
    $email = $_POST['email'];
    $comment = $_POST['comment'];
    addComment($connection, $email, $comment);
} elseif ($requestMethod === 'GET') {
    getComments($connection);
}

$connection->close();
?>
