<?php

namespace App\Emoji;

class Emoji
{
    public function cambiarEmoji(string $texto)
    {
        
        $palabras = ["payaso", "monstruo", "alien"];
        $emojis = ["🤡", "👹", "👽"];
        return str_replace($palabras, $emojis, $texto);
    }
}