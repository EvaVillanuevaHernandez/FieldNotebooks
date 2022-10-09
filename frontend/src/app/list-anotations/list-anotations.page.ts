import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnotationService } from '../services/anotation.service';

@Component({
  selector: 'app-list-anotations',
  templateUrl: './list-anotations.page.html',
  styleUrls: ['./list-anotations.page.scss'],
})
export class ListAnotationsPage implements OnInit {

  anotations: any = [];

  constructor(private anotationService: AnotationService, private router: Router) { }

  ngOnInit() { }

  ionViewDidEnter(){
    this.getAllAnotations();
  }

  getAllAnotations() {
    this.anotationService.getAnotations().subscribe(anotations => {
      console.log(anotations);
      this.anotations = anotations;
    })
  }

  addAnotation(){
    this.router.navigateByUrl("/add-anotation");
  }

  //No funciona
  // updateAnotation(id){
  //   this.router.navigateByUrl("/update-anotation");
  // }

  removeAnotation(id) {
    if (window.confirm('Are you sure?')) {
      this.anotationService. deleteAnotation(id)
      .subscribe(() => {
          this.ionViewDidEnter(); 
          console.log('Anotation deleted!')
        }
      )
    }
  }
}
