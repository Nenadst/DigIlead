
<?php
$name = $_POST['form_name'];
$phone = $_POST['form_phone'];
$email = $_POST['form_email'];
$guests = $_POST['form_guests'];
$message = $_POST['form_message'];
$time = $_POST['form_time'];
$date = $_POST['form_date'];
$formcontent=" From: $name \n Email: $email \n Phone: $phone \n Guests: $guests \n 
Time: $time \n Date: $date \n Message: \n $message";
$recipient = "nenad.stojanovic87@gmail.com";
$subject = "Kontakt Forma";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo '<div class="form-group">
<div style="background: #fff;padding-top:200px;color:#fff;">
	<div class="container" style="position: static;max-width: 1200px;margin: 0 auto;background: #131d33;padding: 100px 15px;text-align: center;">
	    <h1 style="text-shadow: 11px 20px 8px rgb(0, 0, 0);">Congratulations! Your Mail has been sent Successfully  from '.$email.'  </h1>
	    <a href="kontakt.html" style="background: #ffffff;text-decoration: none;color: #000;font-weight: 700;padding: 15px 30px;margin-top: 10px;display: inline-block;">Back To Home</a>
	</div>
</div>
</div>';
?>