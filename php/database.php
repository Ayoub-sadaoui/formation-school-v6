<?php
$host = "localhost";
$dbUser = "root";
$dbPass = "";
$database = "school-v2";

// Establish connection
$connection = new mysqli($host, $dbUser, $dbPass, $database);

// Verify connection
if ($connection->connect_error) {
    die("Connection error: " . $connection->connect_error);
}
?>
