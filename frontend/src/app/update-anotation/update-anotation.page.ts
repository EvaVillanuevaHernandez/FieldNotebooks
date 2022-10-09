import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AnotationService } from '../services/anotation.service';
import { PhotoService } from '../services/photo.service';


@Component({
  selector: 'app-update-anotation',
  templateUrl: './update-anotation.page.html',
  styleUrls: ['./update-anotation.page.scss'],
})
export class UpdateAnotationPage implements OnInit {

  anotationForm: FormGroup;
  isUpdated: boolean = false;
  capturedPhoto: string = "";
  id: any;

  constructor(public formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private anotationService: AnotationService,
    private photoService: PhotoService,
    private router: Router
  ) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
   }

  ionViewWillEnter() {
    this.anotationForm.reset();
    this.isUpdated = false;
    this.capturedPhoto = "";
  }

  ngOnInit() {
    // this.fetchAnotation(this.id);
    this.anotationForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      species: ['', [Validators.required]],
      description: ['', [Validators.required]]
    })
  }

  // fetchAnotation(anotation) {
  //   this.anotationService.getAnotations().subscribe((data) => {
  //     this.anotationForm.setValue({
  //       name: data['name'],
  //       species: data['species'],
  //       description: data['description']
  //     });
  //   });
  // }
  get errorControl() {
    return this.anotationForm.controls;
  }


  takePhoto() {
    this.photoService.takePhoto().then(data => {
      this.capturedPhoto = data.webPath;
    });
  }

  pickImage() {
    this.photoService.pickImage().then(data => {
      this.capturedPhoto = data.webPath;
    });
  }

  discardImage() {
    this.capturedPhoto = null;
  }

  async updateForm() {
    this.isUpdated = true;
    if (!this.anotationForm.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      let blob = null;
      if (this.capturedPhoto != "") {
        const response = await fetch(this.capturedPhoto);
        blob = await response.blob();
      }

      // this.anotationService.updateAnotation(this.anotationForm.value, blob)
      // .subscribe(data => {
      //   console.log("Photo sent!");
      //   this.router.navigateByUrl("/list-anotations");
      // })
    }
  }

  
}
