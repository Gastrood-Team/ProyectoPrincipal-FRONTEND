import { Component, OnInit } from '@angular/core';
import { IRecipeType } from 'src/app/core/models/category.model';
import { RecipeTypeService } from 'src/app/core/services/recipe-type.service';

@Component({
  selector: 'app-recipe-type-nav',
  templateUrl: './recipe-type-nav.component.html',
  styleUrls: ['./recipe-type-nav.component.css']
})
export class RecipeTypeNavComponent implements OnInit {

  recipeTypes!: IRecipeType[];

  constructor(
    private recipeTypeService: RecipeTypeService
    ) { }

  ngOnInit(): void {
    this.readAll();
  }

  readAll(): void {
    this.recipeTypeService.getAll().subscribe(res => {
      this.recipeTypes = res.data.slice(0, 12);
    })
  }

}
