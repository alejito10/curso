<?php

namespace App\Movie;

use App\Model\Pelicula;

class MovieRating
{

    //te saca una valoracion al azar.
    public function valoracion(Pelicula $pelicula):int
    {
        return random_int(0,10);
    }
}