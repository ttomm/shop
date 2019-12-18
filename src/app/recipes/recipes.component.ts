import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.less']
})
export class RecipesComponent implements OnInit {
  recipe: Recipe;
  constructor() { }

  ngOnInit() {
  }

  onRecipeItemSelected(recipe: Recipe) {
    this.recipe = recipe;
  }

}
