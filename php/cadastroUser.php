<?php

    include_once('./conexao.php');

    $email = $_POST['email'];
    $senha = $_POST['senha'];
    $cep = $_POST['cep'];
    $endereco = $_POST['endereco'];
    $tipo_usuario = ["PF"];
    /*$numeroEnd = $_POST['numeroEnd'];
    $complemento = $_POST['complemento'];
    $tipoLocal = $_POST['tipoLocal'];
    $bairro = $_POST['bairro'];
    $cidade = $_POST['cidade'];
    $uf = $_POST['uf'];
    $telefone = $_POST['telefone'];*/

    $sql = 'INSERT INTO tb_usuario(cd_usuario,email,senha,nm_endereco,tipo_usuario) VALUES (:cep,:email,:senha,:endereco,:tipo_usuario)';

    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':email,',$email);
    $stmt->bindParam(':senha,',$senha);
    $stmt->bindParam(':cep,',$cep);
    $stmt->bindParam(':endereco,',$endereco);
    $stmt->execute();
?>