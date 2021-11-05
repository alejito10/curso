<?php


namespace App\Controller;

use App\Emoji\Emoji;
use App\Entity\Pelicula as EntityPelicula;
use App\Model\Pelicula;
use App\Movie\MovieRating;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class PeliculasController extends AbstractController
{

    /**
     * @Route("/peliculas")
     */
    public function listPeliculas(MovieRating $val)
    {
        $peliculas = $this->getPeliculas();
        foreach ($peliculas as $pelicula) {
            $pelicula->setValoracion($val->valoracion($pelicula));
        }

        return $this->render('peliculas/listado.html.twig', ['peliculas' => $peliculas]);

    }

    /**
     * @Route("/peliculas/{imdb}")
     */
    public function detallesPelicula($imdb, Emoji $emoji)
    {
        $peliculas = $this->getPeliculas();

        $peliculaBuscada = null;

        foreach ($peliculas as $pelicula) {
            if ($pelicula->getImdb() == $imdb) {
                $peliculaBuscada = $pelicula;
                $peliculaBuscada->setDescribe($emoji->cambiarEmoji($pelicula->getDescripcion()));
                break;
            }
        }

        if (!$peliculaBuscada) {
            return new Response("Imdb inválido");
        }

        return $this->render('peliculas/detalle-pelicula.html.twig', ['pelicula' => $peliculaBuscada]);
    }

    /**
     * @return Pelicula[]
     */
    private function getPeliculas(): array
    {
        $peliculas = [
            new Pelicula('tt0078748', 'Alien', 'El alien no parece esstar bien terminado'),
            new Pelicula('tt7286456', 'Joker', 'El payaso parecia un monstruo'),
        ];
        return $peliculas;
    }

    /**
     * @Route("/pelicula")
     */
    public function newPelicula(EntityManagerInterface $em, Request $request)
    {
        $titulo = $request->request->get('titulo');
        $descripcion = $request->request->get('descripcion');
        
        if($titulo != null && $descripcion != null){
        $pelicula = new EntityPelicula();
        $pelicula->setTitulo($titulo);
        $pelicula->setDescripcion($descripcion);
        $em->persist($pelicula);
        $em->flush();
        }
        

        return $this->render('peliculas/pelicula.html.twig');

    }

    /**
     * @Route("/peliculasAñadidas")
     */
    public function pintarPeliculas(EntityManagerInterface $em)
    {
        $repo= $em->getRepository(Pelicula::class);
        $pelicula= $repo->findAll();

        return $this->render('peliculas/peliculasAñadidas.html.twig', ['peliculas'=>$pelicula]);
    }

}