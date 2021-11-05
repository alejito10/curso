<?php

use upgrade\Alumno;
use upgrade\Profesor;

require "vendor/autoload.php";

$alumno = new Alumno("alejandro", 27);
$profesor1 = new Profesor("alfredo",43,1800);

$salario = $profesor1->calcularSalarioNeto();
echo "el salario de este tio es $salario";