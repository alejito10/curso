<?php

namespace App\Controller;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


class ComprobarController
{
    /**
     * @Route("/calcula/{palabra}")
     */
    public function calcula($palabra)
    {
        if(is_numeric($palabra)){
            if($palabra%2==0){
                return new Response("El $palabra que se ha introducido es par");
            }else{
                return new Response("El $palabra que se ha introducido es impar");
            }
        }else{
            $palabraFinal = "";
            $array2 = [];
            $array = [];
            $array = str_split($palabra);
            foreach($array as $letra){
                if(ctype_upper($letra)){
                    $array2[]=strtolower($letra);
                }else{
                    $array2[]=strtoupper($letra);
                }
            }
            $palabraFinal = implode($array2);
            return new Response("$palabraFinal");
        }
        
    }
}