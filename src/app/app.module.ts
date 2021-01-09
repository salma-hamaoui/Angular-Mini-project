import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BatimentComponent } from './batiment/batiment.component';
import { AddBatimentComponent } from './add-batiment/add-batiment.component';
import { FormsModule } from '@angular/forms';
import { UpdateBatimentComponent } from './update-batiment/update-batiment.component';
@NgModule({
  declarations: [
    AppComponent,
    BatimentComponent,
    AddBatimentComponent,
    UpdateBatimentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
