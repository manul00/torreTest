<?php if (!defined('BASEPATH')) exit('No direct script access allowed');

if (!function_exists('asset_url()')) {
    function asset_url()
    {
        return base_url() . 'assets/';
    }
}


if (!function_exists('asset_url()')) {
    function asset_url_sin()
    {
        return './assets/';
    }
}

if (!function_exists('lib_url()')) {
    function lib_url()
    {
        return asset_url() . 'lib/';
    }
}

if (!function_exists('css_url()')) {
    function css_url()
    {
        return asset_url() . 'css/';
    }
}


if (!function_exists('css_url()')) {
    function css_url_sin()
    {
        return asset_url_sin() . 'css/';
    }
}

if (!function_exists('js_url()')) {
    function js_url()
    {
        return asset_url() . 'js/';
    }
}
if (!function_exists('js_url()')) {
    function js_url_sin()
    {
        return asset_url_sin() . 'js/';
    }
}


if (!function_exists('video_url()')) {
    function video_url()
    {
        return asset_url() . 'videos/';
    }
}


if (!function_exists('layout_url()')) {
    function layout_url()
    {
        return base_url() . 'application/views/layout/';
    }
}

if (!function_exists('views()')) {
    function views()
    {
        return base_url() . 'application/views/';
    }
}

if (!function_exists('img_url()')) {
    function img_url()
    {
        return asset_url().'img/';
    }
}
