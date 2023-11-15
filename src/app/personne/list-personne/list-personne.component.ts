import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonneService } from 'src/app/services/personne/personne.service';

@Component({
  selector: 'app-list-personne',
  templateUrl: './list-personne.component.html',
  styleUrls: ['./list-personne.component.css']
})
export class ListPersonneComponent implements OnInit {

  personnes: any[] = [];
  newPersonne: any = {};
  editedPersonne: any = {};
  currentUser: any;

  constructor(private personneService: PersonneService, private router: Router) {
  }

  ngOnInit() {
    this.getPersonnes();
    console.log(this.currentUser)
  }

  getPersonnes() {
    this.personneService.getPersonnes().subscribe((data) => {
      this.personnes = data;
      this.orderPersonnesByFirstName();
    });
  }

  orderPersonnesByFirstName() {
    this.personnes.sort((a, b) => {
      const nameA = a.firstName.toUpperCase(); // ignore case
      const nameB = b.firstName.toUpperCase(); // ignore case
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
  }

  viewDetails(personneId: number) {
    this.router.navigate(['/personne/detail', personneId]);
  }

  addPersonne() {
    this.personneService.createPersonne(this.newPersonne).subscribe(() => {
      this.getPersonnes();
    });
  }

  editpersonne(personne: any) {
    this.editedPersonne = { ...personne };
  }

  updatepersonne() {
    this.personneService.updatePersonne(this.editedPersonne.id, this.editedPersonne).subscribe(() => {
      this.getPersonnes();
    });
  }

  deletePersonne(personneId: number) {
    if (confirm('Are you sure you want to delete this personne?')) {
      this.personneService.deletePersonne(personneId).subscribe(() => {
        this.getPersonnes();
      });
    }
  }

}
