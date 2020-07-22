(() => {
  interface Xmen {
    nombre: string;
    edad: number;
    poder?: string; //opcional
  }
  const enviarMision = ( xmen: Xmen ) => {
    console.log(`Enviando a ${xmen.nombre} a la mision`);
  }
  const wolverine = {
    nombre: 'Logan',
    edad: 60
  }
  enviarMision ( wolverine);
})();
