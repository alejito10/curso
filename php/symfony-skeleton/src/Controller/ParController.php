<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ParController
{
    /**
     * @Route("/esPar/{numero}")
     */
    public function esPar($numero)
    {
        if(is_numeric($numero)){
            if($numero%2==0){
                return new Response("El $numero que se ha introducido es par");
            }else{
                return new Response("El $numero que se ha introducido es impar");
            }
        }else{
            return new Response("Lo que se ha introducido no es un numero");
        }
    }
    /**
     * @Route("/contacto")
     */
    public function contacto(){
        return new Response("Este será un formulario de contacto");
    }
}