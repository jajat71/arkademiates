<?php 
// koneksi database
include 'konek.php';
 
// menangkap data yang di kirim dari form
$name = $_POST['name'];
$id = $_POST['id'];
 
// menginput data ke database
$insert = mysqli_query($koneksi,"insert into skills values('','$name','$id')");
 
if($insert){
	$res = array('status' => true);
}else{
    $res = array('status' => false);
}

echo json_encode($res);
 
?>