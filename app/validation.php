<?php
	
	$name = $_POST['name-project'];
	$data = array();


	if ($name === '') {
		$data['status'] = 'error';
		$data['text'] = 'Заполните пустые поля';
	}else {
		$data['status'] = 'OK';
		$data['text'] = 'Вы заполнили все поля корректно, спасибо!';
	}

	header('Content-Type: application/json');
	echo json_encode($data);
	exit;

?>