import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe';
import { RecipeType } from 'src/app/models/recipe-type';
import { RecipeTypeService } from 'src/app/services/recipe-type.service';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  public types?: RecipeType[];
  public recipes?: Recipe[];

  constructor(private recipeTypesService: RecipeTypeService, private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.getRecipeTypes();
  }

  private getRecipeTypes(): void {
    this.recipeTypesService.getAllRecipeTypes().subscribe({
      next: (res) => {
        this.types = res.data;
        const firstType = res.data[0].name;
        this.getRecipes(firstType);
      }
    })
  }

  public getRecipes(recipeType: string): void {
    this.recipes = [];
    this.recipeService.getRecipes(recipeType).subscribe({
      next: (res) => {
        this.recipes = res.data;
      }
    })
  }
}
