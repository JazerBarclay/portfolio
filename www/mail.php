<?php
    // data sent in header are in JSON format
    header('Content-Type: application/json');

    // We are receiving JSON data too so lets decode it
    $_POST = json_decode(file_get_contents('php://input'), true);

    // Takes the value from variables ready for sending
    $name = $_POST['name'];
    $email = $_POST['email'];
    $postmessage = $_POST['message'];
    $to = "webform@jazer.co.uk";
    $subject = "Website inquiry from " . $name;

    if( !isset($name) || trim($name) === '' || !isset($email) || trim($email) === '' ) {
        echo json_encode(array(
            'error'=> true,
            'message' => 'Error sending message'
        ));
    }

    // Email template
    $message = "<b>Name : </b>". $name . "<br>";
    $message .= "<b>Email Address : </b>" . $email . "<br>";
    $message .= "<b>Message : </b><br><br>" . $postmessage . "<br>";

    $header = "From:".$email." \r\n";
    $header .= "MIME-Version: 1.0\r\n";
    $header .= "Content-type: text/html\r\n";
    $retval = mail ($to,$subject,$message,$header);

    // Message Notification
    if( $retval == true ) {
        echo json_encode(array(
            'success'=> true,
            'message' => 'Message sent successfully'
        ));
    } else {
        echo json_encode(array(
            'error'=> true,
            'message' => 'Error sending message'
        ));
    }
?>