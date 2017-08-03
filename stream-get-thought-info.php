<?php
@include "database-connect.php";

//-----------------------------
//	Fetch Particle Information 
//-----------------------------
// Fetch Total Number of Thoughts
$fetch_number_of_thoughts = mysqli_query($mysqli_connect, "SELECT COUNT(ThoughtID) as 'number_of_thoughts' FROM thoughts;");
$number_of_thoughts = mysqli_fetch_assoc($fetch_number_of_thoughts);

// Summon Random Thought From Database
$random_particle = rand(1, $number_of_thoughts["number_of_thoughts"]);

// Encode Data To Front-End AJAX
$fetch_particle_info_query = "SELECT * FROM thoughts where ThoughtID = $random_particle";
$thought_information = mysqli_query($mysqli_connect, $fetch_particle_info_query);
$thoughts_array = mysqli_fetch_row($thought_information);
echo json_encode($thoughts_array);
?>