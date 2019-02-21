import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 // title = 'my awesome app';

  isAuth = false;

  statusOn = 'allumé';
  statusOff = 'éteint';

  appareils = [
    {
      name: 'Machine à laver',
      status: this.statusOff
    },
    {
      name: 'Télévision',
        status: this.statusOn
    },
    {
      name: 'Ordinateur',
      status: this.statusOn
    }
  ];

  /*
  appareilOne = 'Machine à laver';
  appareilTwo = 'Télévision';
  appareilThree = 'Ordinateur';
  */


  constructor() { // executé au moment de la création de ce component
    setTimeout(
      () => {
      this.isAuth = true;
    }, 4000
  );
  }
  onAllumer() {
    console.log('On allume tout !!!');
  }
}
