(function(){
    function getEdad(){
        return 100 + 100 +300;
    }
    const nombre = 'James';
    const apellido = 'Giraldo';
    const edad = 21;
    // const salida = nombre + apellido + edad;
    // const salida = nombre + "" + apellido + "{" + edad + "}";
    const salida = `
     ${ nombre}
     ${ apellido }
     (${ getEdad() })`;

    console.log(salida);
})();
