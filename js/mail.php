<?php

$recepient = "alexeyfilatov.1@yandex.ru";
$sitename = "Название сайта";

$name = trim($_POST["bio"]);
$phone = trim($_POST["phone"]);

$message = "Имя: $name \nТелефон: $phone";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");