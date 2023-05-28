import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { IRecipe } from 'src/app/core/models/recipe.model';
import { RecipeService } from 'src/app/core/services/recipe.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  type!: string;
  recipes!: IRecipe[];

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private recipeService: RecipeService,
    public translate: TranslateService
    ) { }

  ngOnInit(): void {
    this.getRecipes();
  }

  getRecipes(): void {
    this.route.params.subscribe(params => {
      this.type = params['id'];
      if (this.type) {
        this.recipeService.getAll(this.type).subscribe({
          next: (res) => {
            this.recipes = res.data.map((recipe: IRecipe) => {
              return{
                id: recipe.id,
                name: recipe.name,
                description: recipe.description,
                image: recipe.image,
                types: recipe.types?.slice(0, 3),
              }
            });
          },
          error: () => {
            this.router.navigate(['error']);
            Swal.fire('Opps...','Something when wrong while loading the recipes','error')
          }
        })
      }
    })
  }
}
