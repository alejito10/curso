<?php

require "vendor/autoload.php";

$legofy = new \RicardoFiorani\Legofy\Legofy();
$source = 'https://blog.ticketmaster.es/wp-content/uploads/2019/08/joker-pelicula.jpg';
$resolutionMultiplier = 2;
$output = $legofy->convertToLego($source, $resolutionMultiplier);
echo $output->response();