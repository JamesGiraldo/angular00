(() => {
  const sumar = (a: number, b: number): number => a + b;

  const nombre = (): string => 'Hola James';

  const obtenersalario = (): Promise<string> => {
    return new Promise( (resolve, reject) => {
      resolve('James');
    });
  }
  obtenersalario().then( a => console.log( a.toUpperCase() ))
})();
