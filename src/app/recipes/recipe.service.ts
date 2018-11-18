import { Recipe } from "./recipe.mode";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShopingListService } from "../shoping-list/shoping-list.service";

@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Chicken Rolls',
         'Home Made',
         'https://res.cloudinary.com/hellofresh/image/upload/f_auto,fl_lossy,h_436,q_auto/v1/hellofresh_s3/image/enchiladas-aux-legumes-1a1102aa.jpg',
         [
            new Ingredient("Roti",2),
            new Ingredient("Chicken",1),
            new Ingredient("Salad",1)
         ]),
        new Recipe('Chicken Peas',
        'Thick Gravy',
        'https://static01.nyt.com/images/2017/09/26/dining/26COOKING-CHICKENCHICKPEAS/26COOKING-CHICKENCHICKPEAS-articleLarge.jpg',
        [
            new Ingredient("Chicken",1),
            new Ingredient("Masale",5)
        ]),
        new Recipe('Croutons',
        'Testy Croutons',
        'https://www.chowstatic.com/assets/recipe_photos/29594_basic_croutons.jpg',
        [
            new Ingredient("Croutons", 2),
            new Ingredient("Masale",2)
        ])
      ];

    constructor(private shopingListService: ShopingListService){}

      getRecipes(){
         return this.recipes.slice();
      }

      getRecipe(index: number){
        return this.recipes[index];
      }

      addIngredentsToShoppingList(ingredients: Ingredient[]){
        this.shopingListService.addIngredients(ingredients);
     }
}