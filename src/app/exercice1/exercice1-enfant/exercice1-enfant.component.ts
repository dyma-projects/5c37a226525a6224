import { Component, OnInit, Input, EventEmitter, Output  } from '@angular/core';


@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {
    
  @Input('parentData') public compteur: number;
  @Output() public resultat = new EventEmitter
  constructor() { }

  ngOnInit() {
  }

  additionner(nombre: number):void {
    this.compteur++;
    this.resultat.emit(this.compteur);
  }

  soustraire(nombre: number):void {
    this.compteur--;
    this.resultat.emit(this.compteur);
  }

}
