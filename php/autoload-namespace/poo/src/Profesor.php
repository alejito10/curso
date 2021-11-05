<?php
namespace upgrade;

class Profesor extends Persona{
    const IRPF = 0.21;
    private $tarifa;

    public function __construct(string $nombre, int $edad, float $tarifa)
    {
        $this->nombre = $nombre;
        $this->edad = $edad;
        $this->tarifa = $tarifa;
    }

    public function calcularSalarioNeto(){
        $suma = $this->tarifa*0.21;
        return $this->tarifa-$suma;
    }
}