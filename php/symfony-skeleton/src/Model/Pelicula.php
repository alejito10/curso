<?php

namespace App\Model;

class Pelicula
{
    private $titulo;
    private $descripcion;

    public function __construct($titulo,$descripcion)
    {
        $this->titulo = $titulo;
        $this->descripcion = $descripcion;
    }

    public function getTitulo()
    {
        return $this->titulo;
    }
    public function getDescripcion()
    {
        return $this->descripcion;
    }
}