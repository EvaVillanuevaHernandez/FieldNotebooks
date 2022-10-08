import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnotationService {

  endPoint = "http://localhost:8080/api/anotations";

  constructor(private httpClient: HttpClient) { }

  getAnotations(){
    return this.httpClient.get(this.endPoint);
  }

  // deleteAnotation(id) {
  //   return this.httpClient.delete(this.endPoint + '/' + id)
  // }

  createAnotation(anotation, blob){
    let formData = new FormData();
    formData.append("name", anotation.name);
    formData.append("species", anotation.species);
    formData.append("description", anotation.description);
    formData.append("file", blob);

    return this.httpClient.post(this.endPoint, formData);
  }


}
