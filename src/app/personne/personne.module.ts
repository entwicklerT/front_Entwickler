import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonneRoutingModule } from './personne-routing.module';
import { ListPersonneComponent } from './list-personne/list-personne.component';
import { AddPersonneComponent } from './add-personne/add-personne.component';
import { EditPersonneComponent } from './edit-personne/edit-personne.component';
import { DetailPersonneComponent } from './detail-personne/detail-personne.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { PersonneService } from '../services/personne/personne.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from 'src/in-memory-data.service';


@NgModule({
  declarations: [
    ListPersonneComponent,
    AddPersonneComponent,
    EditPersonneComponent,
    DetailPersonneComponent
  ],
  imports: [
    CommonModule,
    PersonneRoutingModule,
    HttpClientModule,
    ReactiveFormsModule ,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false,put204: false  }),

  ],
  providers: [PersonneService] 

})
export class PersonneModule { }
