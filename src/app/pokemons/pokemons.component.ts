import { Component, OnInit, OnChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private pokemonService: PokemonService) { }

  public pokemon;
  public allPokemon;
  public pokemonArray: Object[];
  public count: number;

  public pokemonForm: FormGroup;

  public addPokemon() {
    let newPokemon = {name: this.pokemonForm.get('name').value, url: this.pokemonForm.get('url').value}
    this.pokemonArray.push(newPokemon);
  }

  public backButton() {
    this.router.navigate([''])
  }

  public deletePokemon(index: number) {
    this.pokemonArray.splice(index, 1);
    this.count = this.pokemonArray.length;
  }

  public deleteAllPokemon() {
    this.pokemonArray = [];
    this.count = this.pokemonArray.length;
  }

  ngOnInit(): void {
    this.pokemon = this.pokemonService.getPokemon().subscribe((value) => {
      this.allPokemon = value;
      this.pokemonArray = this.allPokemon.results;
      this.count = this.pokemonArray.length;
    });
    
    this.pokemonForm = new FormGroup({
      name: new FormControl(null),
      url: new FormControl(null)
    })
  }

}
