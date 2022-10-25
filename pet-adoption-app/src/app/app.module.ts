import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PetManagerComponent } from './pet-manager/pet-manager.component';
import { AddPetComponent } from './add-pet/add-pet.component';
import { EditPetComponent } from './edit-pet/edit-pet.component';
import { ViewPetComponent } from './view-pet/view-pet.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PetManagerComponent,
    AddPetComponent,
    EditPetComponent,
    ViewPetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
