<?php

namespace App\Controller;

use App\Entity\Opiniones;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class OpinionesController extends AbstractController
{
    
    /**
     * @Route("/maleteo")
     */
    public function mostrarOpiniones(EntityManagerInterface $em)
    {
         $repo = $em->getRepository(Opiniones::class);
         $opiniones = [];
        array_push($opiniones, $repo->find(1),$repo->find(2),$repo->find(3));

        return $this->render('base.html.twig',['opiniones' => $opiniones]);
    }




    /**
     * @Route("/opiniones", name="opiniones")
     */
    public function newOpiniones(EntityManagerInterface $em, Request $request)
    {
        $this->denyAccessUnlessGranted('ROLE_USER');
        $autor = $request->request->get('autor');
        $comentario = $request->request->get('comentario');
        $ciudad = $request->request->get('ciudad');

        if($autor!=null && $comentario!=null && $ciudad!=null){
            $opinion = new Opiniones();
            $opinion->setAutor($autor);
            $opinion->setComentario($comentario);
            $opinion->setCiudad($ciudad);
            $em->persist($opinion);
            $em->flush();
        }
        
        return $this->render('insertarOpinion.html.twig');

    }
}