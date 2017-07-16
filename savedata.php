<?php
error_reporting(0);
require_once 'csvImporter.php';
require_once 'LIB_http.php';
require_once 'LIB_parse.php';
$connection = mysqli_connect("localhost", "root", "");
if (!$connection) {
    die("Database connection failed: " . mysqli_error());
}
$db_select = mysqli_select_db($connection, 'linkedin');
if (!$db_select) {
    die("Database selection failed: " . mysqli_error());
}
//csv  data read  function
function getdata($csvFile)
{
    $file_handle = fopen($csvFile, 'r');
    while (!feof($file_handle)) {
        $line_of_text[] = fgetcsv($file_handle, 1024);
    }
    fclose($file_handle);
    return $line_of_text;
}

$csvFile = 'urls.csv';
$infos = getdata($csvFile);
//print_r($infos);

foreach ($infos as $info) {
   //echo $searchandlinkedinurl = '='.$info[0]."<br>";
    echo $search_url = $info[0]."<br>";
    echo $linkedin_url = $info[1]."<br><hr>";
     //$searchandlinkedinurl = str_replace("\t", ",", $searchandlinkedinurl);
     //$search_url = return_between($searchandlinkedinurl,'=',',',EXCL);
    //$linkedin_url = return_between($searchandlinkedinurl,',',',',EXCL);
    $status = "ON";
    $sql = "INSERT INTO `list_12001_15000`(`user_url`, `LinkedIN`,`status`) VALUES ('$search_url','$linkedin_url','$status')";
    $result = mysqli_query($connection, $sql);

}