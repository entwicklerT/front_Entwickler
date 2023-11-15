import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPersonneComponent } from './list-personne/list-personne.component';
import { EditPersonneComponent } from './edit-personne/edit-personne.component';
import { AddPersonneComponent } from './add-personne/add-personne.component';
import { DetailPersonneComponent } from './detail-personne/detail-personne.component';

const routes: Routes = [

  {
    path: 'list',
     component: ListPersonneComponent
    
  },
  {
    path: 'edit/:id',
     component: EditPersonneComponent
    
  },

  {
    path: 'add',
     component: AddPersonneComponent
    
  },

  {
    path: 'detail/:id',
     component: DetailPersonneComponent
    
  },

  { path: '', redirectTo: '/personne/list', pathMatch: 'full' },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonneRoutingModule { }
