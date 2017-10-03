<?php
	error_reporting(0);
	include 'class.database.php';
	$db = Database::getInstance();
	$mysqli = $db->getConnection();

	
	$name=mysqli_real_escape_string($mysqli ,$_POST['name']);
	$phone=mysqli_real_escape_string($mysqli ,$_POST['phone']);
	$email=mysqli_real_escape_string($mysqli ,$_POST['email']);
	$terms=mysqli_real_escape_string($mysqli ,strtolower($_POST['terms']));
	
	$error = array();
	if($name=='')	$error['fName_issue']='Name can not be left blank';	
	if($phone=='')		$error['phone_issue']='Phone can not be left blank';		
	if($email=='')		$error['email_issue']='Email can not be left blank';		
	if($phone!='' && (!preg_match('/^(1){1}[0-9]{10}$/i', $phone))) $error['phone_issue']='Phone no is not in proper format.';
	if($terms!='yes')		$error['terms_issue']='Please Check terms checkbox';	
	
	if(count($error)<=0){
		$select= "SELECT count(id) as count FROM data WHERE email='$email'";
		$result=$mysqli->query($select);
		$row = $result->fetch_assoc();
		if($row['count']>0){
			echo json_encode(array('email_exist'=>'Email already exist'));
			exit;
		}else{
			$query = "INSERT INTO data VALUES('','$name','$phone','$email','1',NOW())"; 
			if($mysqli->query($query)){
				echo json_encode(array('success'=>'success'));
			}else{
				echo json_encode(array('fail'=>'fail'));
			}
		}		
		
	}else{ 
		echo json_encode($error);
	}	

?>