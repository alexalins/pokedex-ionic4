import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PokemonService {

  constructor(private http : HttpClient) { }
  //
  getAll(url : any) {
    return this.http.get(url);
  }
}
