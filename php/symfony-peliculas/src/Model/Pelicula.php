<?php


namespace App\Model;


class Pelicula
{
    private $imdb;
    private $titulo;
    private $descripcion;
    private $valoracion;

    public function __construct(string $imdb, string $titulo, string $descripcion)
    {
        $this->imdb = $imdb;
        $this->titulo = $titulo;
        $this->descripcion = $descripcion;
    }

    public function getImdb(): string
    {
        return $this->imdb;
    }

    public function getTitulo(): string
    {
        return $this->titulo;
    }

    public function setDescribe($descripcion)
    {
        $this->descripcion = $descripcion;
    }

    public function getDescripcion(): string
    {
        return $this->descripcion;
    }
    
    public function setValoracion($valoracion)
    {
        $this->valoracion = $valoracion;
    }

    public function getValoracion():int
    {
        return $this->valoracion;
    }
}