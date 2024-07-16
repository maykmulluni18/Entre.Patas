<!DOCTYPE html>
<html>

<head>
    <title>Sus credenciales de acceso</title>
</head>

<body>
    <h1>Hola, {{ $user->name }}</h1>
    <p>Sus credenciales de acceso son las siguientes:</p>
    <p>Email: {{ $user->email }}</p>
    <p>Contraseña: {{ $password }}</p>
    <p>Por favor, cambie su contraseña después de iniciar sesión.</p>
</body>

</html>
