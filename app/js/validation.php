<?php
	
	$name = $_POST['name-project'];
	$data = array();


	if ($name === '') {
		$data['status'] = 'error';
		$data['text'] = 'Заполните имя';
	}else {
		$data['status'] = 'OK';
		$data['text'] = 'Хорошая работа';
	}

	header('Content-Type: application/json');
	echo json_encode($data);
	exit;

?>