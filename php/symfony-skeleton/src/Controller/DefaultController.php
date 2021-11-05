<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DefaultController
{
    public function homepage()
    {
        return new Response("Hola mundo");
    }


    /**
     * @Route("/user")
     */
    public function usuario(){
        return new Response("Nombre de usuario");
    }
}