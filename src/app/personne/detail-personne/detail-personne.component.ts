import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonneService } from 'src/app/services/personne/personne.service';

@Component({
  selector: 'app-detail-personne',
  templateUrl: './detail-personne.component.html',
  styleUrls: ['./detail-personne.component.css']
})
export class DetailPersonneComponent {

  personne: any;

  constructor(private personneService: PersonneService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const personneId = +params['id'];
      this.personneService.getPersonne(personneId).subscribe(personne => {
        this.personne = personne;
      });
    });
  }
}
