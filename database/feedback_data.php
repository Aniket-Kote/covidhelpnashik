<?php

    require "db.php";

    if(isset($_POST['submit_feedback']))
    {
        $fullname=$_POST['fullname'];
        $email=$_POST['email'];
        $contact_no=$_POST['contact_no'];
        $states_india=$_POST['states_india'];
        $city=$_POST['city'];
        $feedback=$_POST['feedback'];

        $qry="INSERT INTO `feedback_form`(`fullname`, `email`, `contact_no`, `states_india`, `city`, `feedback`) 
        VALUES ('$fullname','$email','$contact_no','$states_india','$city','$feedback')";

        $execqry=mysqli_query($connection,$qry);

        if($execqry)
        {
            echo "<script>alert('FeedBack Submitted , Thank you.')</script>";
        }
        else
        {
            echo "<script>alert('<p style='color:red;'>FeedBack Not Submitted, Contact support</p>')</script>";
        }

    }

?>