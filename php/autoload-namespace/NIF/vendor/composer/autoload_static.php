<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit91a66deb99a443c18291b92ba0eb72ec
{
    public static $prefixLengthsPsr4 = array (
        'N' => 
        array (
            'NifValidator\\' => 13,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'NifValidator\\' => 
        array (
            0 => __DIR__ . '/..' . '/ulabox/nif-validator/src',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit91a66deb99a443c18291b92ba0eb72ec::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit91a66deb99a443c18291b92ba0eb72ec::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}
