(() => {
//   class Avenger {
//     nombre: string;
//     equipo: string;
//     nombreReal: string;
//     puedePelear: boolean;
//     pelasGanadas: number;
//
//     constructor(nombre: string, equipo: string, nombreReal: string){
//       this.nombre = nombre;
//       this.equipo = equipo;
//       this.nombreReal = nombreReal;
//     }
//   }
//   const antman  = new Avenger('Antman','capi','quien');
//   console.log(antman)
  class Avenger {
    // nombre: string;
    // equipo: string;
    // nombreReal: string;
    // puedePelear: boolean;
    // pelasGanadas: number;

    constructor(
      public nombre: string,
      public equipo: string,
      public nombreReal?: string,
      public puedePelear: boolean = true,
      public pelasGanadas: number = 0
    ){}
  }
  const antman  = new Avenger('Antman','capi');
  console.log(antman)
})();
