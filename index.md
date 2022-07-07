<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Busqueda</title>
    <link rel="stylesheet" href="/css/style.css">
    
</head>
<body>
    <header>
        <h1>Bienvenidos</h1>
    </header>
    <div class="fondo" id="fondo">
        <p id="sesion"><h2>Busqueda</h2></p>
        <form>
            <ul id="lista1">
                <li>
                    <label for="codigoPostal">Codigo Postal:</label>
                    <input name="codigoPostal" autocomplete="off" type="search" id="codigoPostal" placeholder="Codigo postal" maxlength="5">
                    <ul id="box-searchCodigos"></ul>
                </li>
                <li>
                    <label for="ciudad">Ciudad:</label>
                    <input type="search" autocomplete="off" nam="ciudad" id="ciudad" placeholder="Ciudad">
                    <ul id="box-searchCiudad"></ul>
                </li>
                <li>
                    <label for="colonia">Colonia:</label>
                    <input type="text" name="colonia" autocomplete="off" id="colonia" placeholder="Colonia">
                    <ul id="box-searchColonias"></ul>
                </li>
                <li>
                    <label for="calle">Calle:</label>
                    <input type="text" id="calle" autocomplete="off" placeholder="Calle">
                    <ul id="box-searchCalles"></ul>
                </li>
                <li>
                    <label for="numero">Numero:</label>
                    <input type="number" id="numero" autocomplete="off" placeholder="Numero">
                </li>
                <hr>
                <h2>Posible ruta del paquete</h2>
                <li>
                    <label for="ruta">Ruta(s):<output id="pRuta">---------------------------</output></label>
                </li>
            </ul>
        </form>
        <div id="cover-box-search"></div>
    </div>
</body>
<script src="scripts/index.js" type="module"></script>

</html>
