import { Component, OnInit } from '@angular/core';
import { RecipeType } from 'src/app/models/recipe-type';
import { RecipeTypeService } from 'src/app/services/recipe-type.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  public types?: RecipeType[];

  constructor(private recipeTypesService: RecipeTypeService) { }

  ngOnInit(): void {
    this.getRecipeTypes();
  }

  private getRecipeTypes(): void{
    this.recipeTypesService.getAllRecipeTypes().subscribe(response => {
      this.types = response.data;
    })
  }

  

}
