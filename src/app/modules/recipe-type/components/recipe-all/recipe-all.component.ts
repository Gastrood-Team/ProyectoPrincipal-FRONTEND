import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { IRecipeType } from 'src/app/core/models/category.model';
import { RecipeTypeService } from 'src/app/core/services/recipe-type.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-recipe-all',
  templateUrl: './recipe-all.component.html',
  styleUrls: ['./recipe-all.component.css']
})
export class RecipeAllComponent implements OnInit {

  recipeTypes!: IRecipeType[];

  constructor(
    private recipeTypeService: RecipeTypeService,
    public translate: TranslateService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.readAll();
  }

  readAll(): void {
    this.recipeTypeService.getAll().subscribe({
      next: (res) => {
        this.recipeTypes = res.data;
      },
      error: (err) => {
        this.router.navigate(['error']);
        Swal.fire('Opps...','Something when wrong while loading the recipes','error')
      }
    })
  }

}
