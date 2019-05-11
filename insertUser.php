<?php 
// koneksi database
include 'konek.php';
 
// menangkap data yang di kirim dari form
$name = $_POST['name'];
 
// menginput data ke database
$insert = mysqli_query($koneksi,"insert into users values('','$name')");
 
if($insert){
	$res = array('status' => true);
}else{
    $res = array('status' => false);
}

echo json_encode($res);
 
?>