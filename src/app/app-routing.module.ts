import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BatimentComponent } from './batiment/batiment.component';
import {AddBatimentComponent} from './add-batiment/add-batiment.component';
import {UpdateBatimentComponent} from './update-batiment/update-batiment.component';

const routes: Routes = [
  {path: 'batiment', component : BatimentComponent},
  {path: 'add-batiment', component : AddBatimentComponent},
  { path: '', redirectTo: 'batiment', pathMatch: 'full' },
  {path: 'updateBatiment/:id', component: UpdateBatimentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
