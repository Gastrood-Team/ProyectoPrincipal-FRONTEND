import { Component, OnInit } from '@angular/core';
import { IRecipeType } from 'src/app/core/models/category.model';
import { Recipe } from 'src/app/core/models/recipe.model';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent implements OnInit {

  recipe: Recipe = new Recipe();
  types!: IRecipeType[];

  constructor() { }

  ngOnInit(): void {
  }

}
