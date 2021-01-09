import { Injectable } from '@angular/core';
import {Batiment} from './Model/batiment.model';

@Injectable({
  providedIn: 'root'
})
export class BatimentService {

  constructor() {
    this.batiments = [{
      idBatiment: 2,
      type: 'Immeuble',
      surface: 200,
      nbrChambre: 3,
      adresse: 'Nabuel,El Mida 8044',
      prix: 25.000
    },
      {idBatiment: 4, type: 'Maison', surface: 100, nbrChambre: 4, adresse: 'Nabuel,Mrazga 8000', prix: 40.500},
      {
        idBatiment: 6,
        type: 'Appartement',
        surface: 150,
        nbrChambre: 2,
        adresse: 'Nabuel,darchaaben fehri 8000',
        prix: 30.800
      },
      {idBatiment: 8, type: 'villa', surface: 400, nbrChambre: 8, adresse: 'Nabuel,bouaargoub', prix: 400.500}
    ];
  }
  batiments: Batiment[];
  batiment: Batiment;

  listeBatiment(): Batiment[] {
    return this.batiments;
  }
  ajouterBatiment( bat: Batiment): void{
this.batiments.push(bat);
}
supprimerBatiment( bat: Batiment): void{
const index = this.batiments.indexOf(bat, 0);
if (index > -1) {
this.batiments.splice(index, 1);
}
  }
  consulterBatiment(id: number): Batiment{
this.batiment = this.batiments.find(b => b.idBatiment == id);
return this.batiment;
}
updateBatiment(b:Batiment): void{
this.supprimerBatiment(b);
this.ajouterBatiment(b);
}





}
