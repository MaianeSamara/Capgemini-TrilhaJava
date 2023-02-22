import { Component } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent {
  nome = "Maiane";
  dataNascimento = "1995-12-08";
  urlImagem = "/assets/Cat.jpg"

  mostrarDataNascimento(){
    alert(`Data Nascimento da Maiane é: ${this.dataNascimento}`);
  }
}
