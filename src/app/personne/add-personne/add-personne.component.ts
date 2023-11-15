import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PersonneService } from 'src/app/services/personne/personne.service';

@Component({
  selector: 'app-add-personne',
  templateUrl: './add-personne.component.html',
  styleUrls: ['./add-personne.component.css']
})
export class AddPersonneComponent {
  personneForm: FormGroup;

  constructor(private personneService: PersonneService, private router: Router, private fb: FormBuilder) {
    this.personneForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', [Validators.required]],
      email: ['', Validators.required],

    });
  }

  addPersonne() {
    if (this.personneForm.valid) {
      this.personneService.createPersonne(this.personneForm.value).subscribe(() => {
        this.router.navigate(['/personne/list']);
      });
    }
  }
}

