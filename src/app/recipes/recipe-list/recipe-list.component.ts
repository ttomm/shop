import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.less']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Test recipe', 'This is simple recipe for test', 
    'https://www.maxpixel.net/static/photo/1x/Food-Kitchen-Meals-Home-Made-Dishes-Recipe-Bio-1175493.jpg'),
    new Recipe('Test recipe 2', 'This is simple recipe for test 2', 
    'https://www.maxpixel.net/static/photo/1x/Food-Kitchen-Meals-Home-Made-Dishes-Recipe-Bio-1175493.jpg')
  ];

  @Output() recipeItemSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeItemSelected.emit(recipe);
  }

}
