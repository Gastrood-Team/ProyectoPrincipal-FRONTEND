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
  filteredRecipes!: IRecipe[];
  currentPage: number = 1;
  totalPages: number = 8;
  disableNextButton: boolean = false;
  moreRecipes: boolean = true;

  originalRecipes: IRecipe[] = [];
  fetching: boolean = false;

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
        this.fetching = true;
        this.disableNextButton = true;
        this.recipeService.getAll(this.type, this.currentPage).subscribe({
          next: (res) => {
            this.recipes = res.data.map((recipe: IRecipe) => {
              return {
                id: recipe.id,
                name: recipe.name,
                description: recipe.description,
                image: recipe.image,
                types: recipe.types?.slice(0, 3),
              }
            });

            this.fetching = false;
            this.filteredRecipes = this.recipes;

            if (this.recipes.length === 0) {
              this.disableNextButton = true;
              this.moreRecipes = false;
            } else {
              this.disableNextButton = false;
            }

          } ,
          error: () => {
            this.router.navigate(['error']);
            Swal.fire('Opps...', 'Something went wrong while loading the recipes', 'error');
          },
          complete: () => {
            this.fetching = false;
          }
        });
      }
    });
  }


  changePage(page: number): void {
    console.log(page);
    this.moreRecipes = true;
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.getRecipes();
      setTimeout(() => {
        this.filterRecipe()
      }, 1000);
    }
  }

  filterRecipe(): void {
    console.log('hege')
    const inputElement = document.getElementById("searchBarInput") as HTMLInputElement;
    const inputValue = inputElement.value.toLowerCase();
    if (inputValue) {
      this.filteredRecipes = this.recipes.filter((recipe: IRecipe) =>
        recipe.name.toLowerCase().includes(inputValue))
    } else {
      this.filteredRecipes = this.recipes;
    }

  }
}
