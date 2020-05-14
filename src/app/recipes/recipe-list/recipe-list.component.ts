import {Component, EventEmitter, OnInit, Output } from '@angular/core';
import {Recipe} from '../../../recipe';
import {RECIPES} from '../../mock-recipes';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes = RECIPES;
  term: string;
  searchText: string;
  constructor() { }

  ngOnInit(): void {
    console.log(this.recipes);
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
