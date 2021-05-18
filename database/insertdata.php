<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Insert Data</title>
    
    <!-- CSS only -->
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
<link rel="stylesheet" href="css/style.css">
<!-- JS, Popper.js, and jQuery -->
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>

</head>
<style>
*{
    margin:0;
    padding:0
}
.insert{
    
    position:relative;
}

.main_form{
   
    position:absolute;
  left:50%;
 
  transform:translate(-50%)
}
</style>
<body>
    <?php
    
    require "db.php";
    $msg="";
    if(isset($_POST['add_hosp'])){
        $name=$_POST['name'];
        $dr_name=$_POST['dr_name'];
        $address=$_POST['address'];
        $google_location=$_POST['google_location'];
        $hospital_contact=$_POST['hospital_contact'];
        $hospital_landline=$_POST['hospital_landline'];
        $type_hospital=$_POST['type_hospital'];

        if($type_hospital=='DCHC' || $type_hospital=='DCHC(Govt)')
        {
            $query="INSERT INTO `dchc`(`name`, `dr_name`, `address`, `google_location`, `hospital_contact`, `hospital_landline`, `type_hospital`) 
        VALUES ('$name','$dr_name','$address','$google_location','$hospital_contact','$hospital_landline','$type_hospital')";
        }

        elseif ($type_hospital=='CCC' || $type_hospital=='CCC(Govt)') {
            $query="INSERT INTO `ccc`(`name`, `dr_name`, `address`, `google_location`, `hospital_contact`, `hospital_landline`, `type_hospital`) 
        VALUES ('$name','$dr_name','$address','$google_location','$hospital_contact','$hospital_landline','$type_hospital')";
        }

        else if($type_hospital=='DCH' || $type_hospital='DCH(Govt)')
        {
            $query="INSERT INTO `dch`(`name`, `dr_name`, `address`, `google_location`, `hospital_contact`, `hospital_landline`, `type_hospital`) 
        VALUES ('$name','$dr_name','$address','$google_location','$hospital_contact','$hospital_landline','$type_hospital')";
       
        }
        
        $res=mysqli_query($connection,$query);

        if($res){
            $msg="Hospital added successfully of type $type_hospital";
        }
        else{
            echo mysqli_error($connection);
        }
    }


    
    ?>
<center><p class="alert alert-success w-50 mt-2">Msg : <?=$msg?></p></center>
<div class="insert">
<div class="main_form card">
<h1 class="text-center">Insert Hospital Data</h1>
        <div class="form p-4">
           <form action="" method="POST">
            <label for="" class="form-label">Name of Hospital</label>
                <input type="text" name="name" class="form-control">
                
                <label for="" class="form-label">Name of Doctor / Doctors</label>
                <input type="text" name="dr_name" class="form-control">

                <label for="" class="form-label">Address</label>
                <input type="text" name="address" class="form-control">

                <label for="" class="form-label">Google Location</label>
                <input type="text" name="google_location" class="form-control">


                <label for="" class="form-label mt-4 font-weight-bold">Phone Numbers -----</label>
            <div class="row">
                <div class="col-sm-6">
                <label for="" class="form-label">Hospital contact Number</label>
                <input type="text" name="hospital_contact" class="form-control">
                </div>

                <div class="col-sm-6">
                <label for="" class="form-label">Hospital landline Number</label>
                <input type="text" name="hospital_landline" class="form-control">
                </div>

           </div>
           <label for="" class="form-label">Type</label>
           <select name="type_hospital" class="form-control" id="" required>
           <option value="....." default>Select something</option>
           <option value="CCC">CCC</option>
           <option value="CCC(Govt)">CCC(Govt)</option>
           <option value="DCHC">DCHC</option>
           <option value="DCHC(Govt)">DCHC(Govt)</option>
           <option value="DCH">DCH</option>
           <option value="DCH(Govt)">DCH(Govt)</option>
           
           </select>
           <button class="btn btn-success mt-4" name="add_hosp">Add Hospital</button>
           </form>
        </div>
    </div>


</div>
    

    
</body>
</html>