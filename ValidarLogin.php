<?php
require 'conexaobd.php';
$email = $_POST['email'];
$password = $_POST['senha'];

$stmt = $conn->prepare("SELECT email, senha FROM user WHERE email = :email");
$stmt->bindParam(':email', $email);
$stmt->execute();
$resultado = $stmt->fetchAll(PDO::FETCH_ASSOC);

foreach ($resultado as $row) {
  if ($row["Email"] == "") {
    header("Location: 01-index.php");
  } else {
    if ($row["Senha"] == $password) {
      echo "Retornar para tela depois do login";
    } else {
      echo "Retornar senha incorreta";
    }
  }
}


if()