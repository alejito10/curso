<?php


namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DefaultController extends AbstractController
{
    /**
     * @Route("/holamundo")
     */
    public function homepage()
    {
        return new Response("<h1>Hola Mundo</h1>");
    }

    /**
     * @Route("/user/{name}/edad/{edad}/{altura}")
     */
    public function usuario($name, $edad, $altura)
    {
        return new Response("El nombre es $name con edad $edad y su altura es $altura");
    }

    /**
     * Esto es un comentario
     *
     * @Route("/user/{name}/edad/{edad}")
     * @Route("/usuario/{name}/edad/{edad}")
     */
    public function usuarioDos($name, $edad)
    {
        return new Response("<h1>En USUARIO2</h1> El nombre es $name con edad $edad");
    }

    /**
     * @Route("/usuarios")
     */
    public function usuarios()
    {
                    $usuarios = [
        [
        "nombre" => "Moi",
        "puntuacion" => 7.8,
        "universidad" => "Extremadura"
        ],
        [
        "nombre" => "Kiko",
        "puntuacion" => 9,
        "universidad" => "Oviedo"
        ],
        [
        "nombre" => "Jorge",
        "puntuacion" => 2.53,
        "universidad" => "De la vida"
        ],
        [
        "puntuacion" => 3.342,
        "universidad" => "Hogwarts"
        ],
        [
        "nombre" => "Ana",
        "puntuacion" => 7.256,
        "universidad" => "Oviedo"
        ],
        ];
        return $this->render('usuarios/usuarios.html.twig',
        ['usuarios'=>$usuarios]);
    }

}