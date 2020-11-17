<?php

$recepient = "lyr1999@mail.ru";
$sitename = "Заказ грузоперевозки";

$name = trim($_POST["bio"]);
$phone = trim($_POST["phone"]);
$from = trim($_POST["from"]);
$to = trim($_POST["to"]);

$message = "Имя: $name \nТелефон: $phone \nОткуда: $from \nКуда: $to";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");