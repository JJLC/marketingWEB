<?php 

//	require_once 'classes/geografia.class.php';

//	$clientIP = $_SERVER['REMOTE_ADDR'];
//	$countryTEMP = file_get_contents('http://api.hostip.info/country.php');
//	echo $countryTEMP;	
//	$objGeografia = new geografia();
	
//	$objGeografia->country_code_to_country($countryTEMP);
//	$country = $objGeografia->language;

	//header('Location: http://195.23.184.221/dirmgp/website/en');
	header('Location: http://'.$_SERVER["SERVER_NAME"].'/views/en');
?>