import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
 // title = 'my awesome app';

  isAuth = false;

//  lastUpdate = new Date();

  lastUpdate = new Promise( // L'objet Promise (pour « promesse ») est utilisé pour réaliser des traitements de façon asynchrone
    (resolve, reject) => {
      const date = new Date();
      setTimeout(
        () => {
          resolve(date);
        }, 2000
      );
    }
  )
  // infos date seront dispo au bout de 2 sec -> pour simuler la recherche des données sur le serveur

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
