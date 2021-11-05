<?php
namespace upgrade;

class Alumno extends Persona{
    private $asignatura;
    
    public function __construct(string $nombre, int $edad)
    {
        $this->nombre=$nombre;
        $this->edad=$edad;
    }

    public function addAsignatura($asignatura){
        $this->asignatura[] = $asignatura;
    }
}