(() => {
  const avenger = {
    nombre: 'Steve',
    clave: 'Capitan America',
    poder: ' Droga'
  }
  const extraer = ( {nombre, poder}: any) => {
    // const { nombre, clave, poder} = avenger;
    console.log(nombre)
    console.log(poder)
  }
  // extraer( avenger );

  const avengers: string[] = ['thor','iroman','spiderman'];
  const [ , , spiderman ] = avengers;
  // console.log( thor )
  // console.log( iroman )
  // console.log( spiderman )

  const extraerArr = ( [thor, iroman, spiderman]: string[]) => {
    // const { nombre, clave, poder} = avenger;
    console.log(thor)
    console.log(iroman)
    console.log(spiderman)
  }
  extraerArr( avengers );
})();
