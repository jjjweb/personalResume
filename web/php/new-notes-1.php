<?php
	header('Content-Type:application/json;charset=UTF-8');
	$conn=mysqli_connect("localhost","root","","web");
	mysqli_query($conn,"SET NAMES UTF8");
	$sql="select * from new_notes_1";
	$result=mysqli_query($conn,$sql);
	$list=mysqli_fetch_all($result,MYSQLI_ASSOC);
	echo json_encode($list);



