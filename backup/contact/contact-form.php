<?php
/*if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];
    
    $to = "trinityseven2018@gmail.com";
    $subject = "New message from $name";
    $body = "Name: $name\nEmail: $email\n\nSubject: $subject\n\nMessage:\n$message";
    $headers = "From: $email";
    
    if (mail($to, $subject, $body, $headers)) {
        echo "Thank you for your message!";
    } else {
        echo "Oops! Something went wrong.";
    }
}
?>*/
/*
if($_POST) {
    $name = "";
    $email = "";
    $subject = "";
    $concerned_department = "";
    $message = "";
    $email_body = "<div>";
     
    if(isset($_POST['name'])) {
        $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
        $email_body .= "<div> 
<label><b>Visitor Name:</b></label>&nbsp;<span>".$name."</span> 
</div>";
    }
    if(isset($_POST['email'])) {
        $email = str_replace(array("\r", "\n", "%0a", "%0d"), '', $_POST['email']);
        $email = filter_var($email, FILTER_VALIDATE_EMAIL);
        $email_body .= "<div> 
<label><b>Visitor Email:</b></label>&nbsp;<span>".$email."</span> 
</div>";
    }
     
    if(isset($_POST['subject'])) {
        $subject = filter_var($_POST['subject'], FILTER_SANITIZE_STRING);
        $email_body .= "<div> 
<label><b>Reason For Contacting Us:</b></label>&nbsp;<span>".$subject."</span> 
</div>";
    }
     
    if(isset($_POST['concerned_department'])) {
        $concerned_department = filter_var($_POST['concerned_department'], FILTER_SANITIZE_STRING);
        $email_body .= "<div> 
<label><b>Concerned Department:</b></label>&nbsp;<span>".$concerned_department."</span> 
</div>";
    }
     
    if(isset($_POST['message'])) {
        $message = htmlspecialchars($_POST['message']);
        $email_body .= "<div> 
<label><b>Visitor Message:</b></label> 
<div>".$message."</div> 
</div>";
    }
     
    if($concerned_department == "billing") {
        $recipient = "billing@domain.com";
    }
    else if($concerned_department == "marketing") {
        $recipient = "marketing@domain.com";
    }
    else if($concerned_department == "technical support") {
        $recipient = "tech.support@domain.com";
    }
    else {
        $recipient = "trinityseven2018@gmail.com";
    }
     
    $email_body .= "</div>";
    $headers  = 'MIME-Version: 1.0' . "\r\n"
    .'Content-type: text/html; charset=utf-8' . "\r\n"
    .'From: ' . $email . "\r\n";
     
    if(mail($recipient, $subject, $email_body, $headers)) {
        echo "<p>Thank you for contacting us, $name. You will get a reply within 24 hours.</p>";
    } else {
        echo '<p>We are sorry but the email did not go through.</p>';
    }
     
} else {
    echo '<p>Something went wrong</p>';
}*/

if(isset($_POST['submit'])) {
    // Get the form fields and remove whitespace
    $name = trim($_POST['name']);
    $subject = trim($_POST['subject']);
    $email = trim($_POST['email']);
    $message = trim($_POST['message']);

    // Check if all fields are filled
    if(empty($name) || empty($subject) || empty($email) || empty($message)) {
        echo "Please fill in all fields";
        exit();
    }

    // Check if the email format is valid
    if(!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format";
        exit();
    }

    // Set the recipient email address
    $to = "your_email_address@example.com";

    // Set the email subject
    $email_subject = "New message from $name: $subject";

    // Build the email content
    $email_body = "Name: $name\n\nEmail: $email\n\nSubject: $subject\n\nMessage:\n$message";

    // Set the email headers
    $headers = "From: $name <$email>\r\nReply-To: $email\r\n";

    // Send the email
    if(mail($to, $email_subject, $email_body, $headers)) {
        echo "Thank you for your message. We will get back to you soon!";
    } else {
        echo "Oops! Something went wrong. Please try again later.";
    }
}

?>