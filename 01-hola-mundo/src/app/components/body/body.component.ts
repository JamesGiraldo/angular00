import { Component }  from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html'
})
export class BodyCompoment {
  mostrar = true;
  frase: any = {
    mensaje: 'un Excelente curso de angular',
    author: 'James Giraldo'
  };
  personajes: string[] = ["Spiderman", "Vemon", "Dr. Octopus"]
}
