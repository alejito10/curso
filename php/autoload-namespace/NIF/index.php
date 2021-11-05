<?php

use NifValidator\NifValidator;

require "vendor/autoload.php";

$validatos = new NifValidator();

$dni = "70418085C";

if(NifValidator::isValid($dni)){
    echo "EL DNI $dni ES VALIDO";
}else{
    echo "EL DNI $dni ES INVALIDO";
}