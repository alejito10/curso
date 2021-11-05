<?php

namespace App\Controller;

use App\Entity\Opiniones;
use App\Entity\Solicitudes;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;


class SolicitudesController extends AbstractController
{

      /**
     * @Route("/maleteo", name="maleteo")
     */
    public function newSolicitud(EntityManagerInterface $em, Request $request)
    {

        $nombre = $request->request->get('nombre');
        $email = $request->request->get('email');
        $ciudad = $request->request->get('ciudad');

        if($nombre != null && $email !=null && $ciudad != null){
            $solicitud = new Solicitudes();
            $solicitud->setNombre($nombre);
            $solicitud->setEmail($email);
            $solicitud->setCiudad($ciudad);
            $em->persist($solicitud);
            $em->flush();
        }
        return $this->render('base.html.twig');
    }

    /**
     * @Route("/listado", name="listado")
     */
    public function mostrarListado(EntityManagerInterface $em)
    {
        $this->denyAccessUnlessGranted('ROLE_USER');
        $repo2 = $em->getRepository(Solicitudes::class);
        $solicitudes = $repo2->findAll();

        return $this->render('listadoSolicitudes.html.twig', ['solicitudes' => $solicitudes]);

     }







}