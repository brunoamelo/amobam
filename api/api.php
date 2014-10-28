<?php

session_start();
require '../libs/Slim/Slim.php';
\Slim\Slim::registerAutoloader();
$app = new \Slim\Slim();

$app->get('/receipts', function () use ($app) {
	$app->response()->header("Content-Type", "application/json");
	$wines = array("foo" => "bar", "bar" => "foo");
       echo '{"wine": ' . json_encode($wines) . '}';
    }
);

$app->run();

?>