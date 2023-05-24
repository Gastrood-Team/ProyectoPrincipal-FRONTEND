import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProfile } from 'src/app/core/models/profile.model';
import { IRecipe } from 'src/app/core/models/recipe.model';
import { RecipeService } from 'src/app/core/services/recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  recipe!: IRecipe;
  profile!: IProfile;
  loading: boolean = true;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getRecipeDetails();
  }

  getRecipeDetails(): void {
    this.route.params.subscribe(params => {
      let id = params['id'];
      if (id) {
        this.loading = true;
        this.recipeService.getbyId(id).subscribe({
          next: (res) => {
            this.profile = res.data;
            this.recipe = res.data;
            this.loading = false;
          }
        });
      }
    });
  }
}
