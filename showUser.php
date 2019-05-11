<?php 
// koneksi database
include 'konek.php';
 
$show = mysqli_query($koneksi,"SELECT id,name,IFNULL((SELECT GROUP_CONCAT(name) FROM skills AS B WHERE A.id = B.user_id),'Tidak ada Data') as skills FROM users A");
 
$x = array();
while($d = mysqli_fetch_array($show)){
	$x[] = array(
		'id' => $d['id'],
		'name' => $d['name'],
		'skills' => $d['skills']
	);
}

echo json_encode($x);
 
?>