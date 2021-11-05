<?php
namespace App\Controller;

use App\Model\Pelicula;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;


class PeliculasController extends AbstractController
{
    /**
     * @Route("/peliculas")
     */
    public function peliculas()
    {
        $peliculas = [new Pelicula("El señor de los anillos", "la mejor pelicula de la historia"),
                      new Pelicula("Vengadores", "la mejor pelicula de la historia"),
                      new Pelicula("Harry Potter", "la mejor pelicula de la historia"),
                      new Pelicula("La amenaza fantasma", "la mejor pelicula de la historia")];
        return $this->render("peliculas.html.twig", ['peliculas'=>$peliculas]);
        return $this->render("descripcion.html.twig",['peliculas'=>$peliculas]);
    }




}