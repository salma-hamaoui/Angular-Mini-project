import { Component, OnInit } from '@angular/core';
import {Batiment} from '../Model/batiment.model';
import {BatimentService} from '../batiment.service';

@Component({
  selector: 'app-batiment',
  templateUrl: './batiment.component.html',
  styleUrls: ['./batiment.component.css']
})

export class BatimentComponent implements OnInit {
batiments: Batiment[];
  constructor(private batimentService: BatimentService) {
    this.batiments = batimentService.listeBatiment();
  }
  supprimerBatiment(b: Batiment): void {
    const conf = confirm('Etes-vous sûr ?');
    if (conf) {
       this.batimentService.supprimerBatiment(b);
    }
}


  ngOnInit(): void {
  }

}
