import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {
 // appareilName = 'Machine à laver';
  @Input()appareilName: string;
  // La propriété appareilName est une propriété personnalisée du component  appareil-component
  // Cela ne peut ni être une constante, ni une méthode — il s'agit donc d'un  @Input()


  // appareilStatus = 'éteint';
  @Input()appareilStatus: string;
  constructor() { }

  ngOnInit() {
  }

  getStatus() {
    return this.appareilStatus;
  }

  getColor() {
    if (this.appareilStatus === 'allumé') {
      return 'green';
    } else if (this.appareilStatus === 'éteint') {
      return 'red';
    }
  }
}
