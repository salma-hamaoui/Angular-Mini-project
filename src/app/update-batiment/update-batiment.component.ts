import { Component, OnInit } from '@angular/core';
import {Batiment} from '../Model/batiment.model';
import {BatimentService} from '../batiment.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-update-batiment',
  templateUrl: './update-batiment.component.html',
  styles: [
  ]
})
export class UpdateBatimentComponent implements OnInit {
currentBatiment = new Batiment();
  constructor(private activatedRoute: ActivatedRoute,
              private batimentService: BatimentService) { }

  ngOnInit(): void {
    this.currentBatiment = this.batimentService.consulterBatiment(this.activatedRoute.snapshot.params.id);
    console.log(this.currentBatiment);
  }
  updateBatiment(): void {
this.batimentService.updateBatiment(this.currentBatiment);
}


}
