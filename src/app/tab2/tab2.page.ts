import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Poke } from '../model/poke';
import { Pokemon } from '../model/pokemon';
import { PokemonService } from '../service/pokemon.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {

  previous : any;
  next : any;
  pokes : any;
  pokemons : any[];
  url = "https://pokeapi.co/api/v2/pokemon/";

  constructor( private service : PokemonService){
   this.getAll();
  }

  getAll(){
    this.service.getAll(this.url).subscribe(
      res=>{
        this.pokes = res["results"];
        this.next = res["next"];
        this.previous = res["previous"];
      }
    )
  }
  //
  getNext(){
    this.service.getAll(this.next).subscribe(
      res=>{
        this.pokes = res["results"];
        this.next = res["next"];
        this.previous = res["previous"];
      }
    )
  }
  //
  getPrevious(){
    this.service.getAll(this.previous).subscribe(
      res=>{
        this.pokes = res["results"];
        this.next = res["next"];
        this.previous = res["previous"];
      }
    )
  }
}
