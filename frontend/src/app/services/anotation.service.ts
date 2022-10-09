import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AnotationService {

  endPoint = "http://localhost:8080/api/anotations";

  constructor(private httpClient: HttpClient) { }

  getAnotations(){
    return this.httpClient.get(this.endPoint);
  }


  createAnotation(anotation, blob){
    let formData = new FormData();
    formData.append("name", anotation.name);
    formData.append("species", anotation.species);
    formData.append("description", anotation.description);
    formData.append("file", blob);

    return this.httpClient.post(this.endPoint, formData);
  }

  // updateAnotation(anotation, blob){
  //   let formData = new FormData();
  //   formData.set("name", anotation.name);
  //   formData.set("species", anotation.species);
  //   formData.set("description", anotation.description);
  //   formData.set("file", blob);

  //   return this.httpClient.put(this.endPoint + '/' + anotation.id, formData)
  // }

  deleteAnotation(id) {
    return this.httpClient.delete(this.endPoint + '/' + id)
      .pipe(
        tap(_ => console.log(`Anotation deleted: ${id}`))
        
      );
  }
}
