import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { PersonneService } from 'src/app/services/personne/personne.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-personne',
  templateUrl: './edit-personne.component.html',
  styleUrls: ['./edit-personne.component.css']
})
export class EditPersonneComponent implements OnInit {

  personneForm: FormGroup;
  editedPersonne: any = {};

  constructor(private personneService: PersonneService, private route: ActivatedRoute, private router: Router, private fb: FormBuilder) {
    this.personneForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const personneId = +params['id'];
      this.personneService.getPersonne(personneId).subscribe(personne => {
        this.editedPersonne = personne;
        this.updateForm();
      });
    });
  }

  private updateForm() {
    this.personneForm.patchValue({
      firstName: this.editedPersonne.firstName,
      lastName: this.editedPersonne.lastName,
      email: this.editedPersonne.email
    });
  }

  editPersonne() {
    if (this.personneForm.valid) {
      const updatedPersonne = { ...this.editedPersonne, ...this.personneForm.value };
      this.personneService.updatePersonne(updatedPersonne.id, updatedPersonne).subscribe(() => {
        this.router.navigate(['/personne/list']);
      });
    }
  }
}
