(() => {
  const retirarDinero = (montoretirar: number): Promise<number> => {
      let dineroActual = 1000;

      return new Promise( (resolve, reject) => {
        if (montoretirar > dineroActual) {
            reject('No Hay Suficientes Fondos');
        }else{
          dineroActual -= montoretirar;
          resolve(dineroActual);
        }
      });
  }
  retirarDinero(1500)
               .then( montoActual => console.log(`Me Queda ${montoActual}`))
               .catch( console.warn)
})();
