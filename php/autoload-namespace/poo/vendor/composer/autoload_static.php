<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit7876a6ebbe04db53c2e6395ed0a05296
{
    public static $prefixLengthsPsr4 = array (
        'u' => 
        array (
            'upgrade\\' => 8,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'upgrade\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit7876a6ebbe04db53c2e6395ed0a05296::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit7876a6ebbe04db53c2e6395ed0a05296::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}