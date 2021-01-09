import { Component, OnInit } from '@angular/core';
import {Batiment} from '../Model/batiment.model';
import {BatimentService} from '../batiment.service';

@Component({
  selector: 'app-add-batiment',
  templateUrl: './add-batiment.component.html',
  styleUrls: ['./add-batiment.component.css']
})
export class AddBatimentComponent implements OnInit {
newBatiment = new Batiment();
  constructor(private batimentService: BatimentService) {
}
addBatiment(): void{

this.batimentService.ajouterBatiment(this.newBatiment);
}

ngOnInit(): void {
  }

}
