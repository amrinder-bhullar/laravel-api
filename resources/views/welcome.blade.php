<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel-react</title>

    <style>
        body {
            font-family: 'Nunito', sans-serif;
        }
    </style>
    {{-- <script src="{{ asset('js/app.js') }}" defer></script> --}}
    @viteReactRefresh
    <!-- Scripts -->
    @vite(['resources/sass/app.scss', 'resources/js/app.js'])
</head>

<body class="antialiased">
    <div id="app"></div>
</body>

</html>
