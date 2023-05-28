import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IRecipeType } from 'src/app/core/models/category.model';
import { RecipeTypeService } from 'src/app/core/services/recipe-type.service';

@Component({
  selector: 'app-recipe-type-list',
  templateUrl: './recipe-type-list.component.html',
  styleUrls: ['./recipe-type-list.component.css']
})
export class RecipeTypeListComponent implements OnInit {

  recipeTypes!: IRecipeType[];

  constructor(
    private recipeTypeService: RecipeTypeService,
    public translate: TranslateService
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
