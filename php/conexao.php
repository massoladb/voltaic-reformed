<?php

    try {
        $conn = new PDO('mysql:host=localhost;dbname=db_voltaic_simples','root', 'Jgaf-2016');
    } catch (PDOException $e) {
        $e->getMessage();
    }

?>