import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.mode';
import { OuterSubscriber } from 'rxjs/internal/OuterSubscriber';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 @Output() recipeWasSelected = new EventEmitter<Recipe>();
recipes: Recipe[] = [
  new Recipe('Test Recipe1', 'Test Description1', 'https://res.cloudinary.com/hellofresh/image/upload/f_auto,fl_lossy,h_436,q_auto/v1/hellofresh_s3/image/enchiladas-aux-legumes-1a1102aa.jpg'),
  new Recipe('Test Recipe2', 'Test Description2', 'https://static01.nyt.com/images/2017/09/26/dining/26COOKING-CHICKENCHICKPEAS/26COOKING-CHICKENCHICKPEAS-articleLarge.jpg'),
  new Recipe('Test Recipe3', 'Test Description3', 'https://www.seriouseats.com/recipes/images/2015/01/20150119-pressure-cooker-chicken-stew-food-lab-11-1500x1125.jpg'),
  new Recipe('Test Recipe4', 'Test Description4', 'https://www.chowstatic.com/assets/recipe_photos/29594_basic_croutons.jpg')
];
  constructor() { }

  ngOnInit() {
  }
  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
