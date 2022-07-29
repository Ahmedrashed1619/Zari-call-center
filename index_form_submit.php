<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
   header('Access-Control-Allow-Origin: *');
   header('Access-Control-Allow-Methods: GET, POST');
   header("Access-Control-Allow-Headers: X-Requested-With");
   $Name = htmlspecialchars($_REQUEST['Name']);
   $Phone = htmlspecialchars($_REQUEST['Phone']);
   $ClientEmail = htmlspecialchars($_REQUEST['ClientEmail']);
   $Activity = htmlspecialchars($_REQUEST['Activity']);
   if(!$_REQUEST['ClientEmail'] || $_REQUEST['ClientEmail'] == ""){
      $ClientEmail = "None";
   }

    $Subject = "Custom App";

    $curl = curl_init();

    curl_setopt_array($curl, array(
        CURLOPT_URL => "https://api.zeptomail.com/v1.1/email",
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => "",
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 30,
        CURLOPT_SSLVERSION => CURL_SSLVERSION_TLSv1_2,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => "POST",
        CURLOPT_POSTFIELDS => '{
        "bounce_address":"noreplay@bounce.viganium.com",
        "from": { "address": "zeptomail@viganium.com"},
        "to": [{"email_address": {"address": "ahmedrashed1619@gmail.com"}}],
        "subject":'.$Subject.',
        "htmlbody":"<div><p>Client:'.$Name.'</p><p>Phone:'.$Phone.'</p><p>Email:'.$ClientEmail.'</p><p>Activity:'.$Activity.'</p></div>",
        }
        ]
        }',
                CURLOPT_HTTPHEADER => array(
                "accept: application/json",
                "authorization: Zoho-enczapikey wSsVR60nrhTzCqd+zzL/Iu0+zFtXBl/wREou3gPy4iWuH6vLosc4wkKYBwOnFfMcETFpQDtA8O8qnE1Rh2cJhtl4yQwGWiiF9mqRe1U4J3x17qnvhDzIXWVblxeILYINzgpqnWFkFswm+g==",
                "cache-control: no-cache",
                "content-type: application/json",
            ),
        ));

      $response = curl_exec($curl);
      $err = curl_error($curl);

      curl_close($curl);

      if ($err) {
         return ["Success"=>1];
      } else {
         return ["Success"=>0];
      }
}

?>
