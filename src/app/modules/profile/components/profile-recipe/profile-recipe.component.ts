import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IRecipe, Recipe } from 'src/app/core/models/recipe.model';
import { RecipeService } from 'src/app/core/services/recipe.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile-recipes',
  templateUrl: './profile-recipe.component.html',
  styleUrls: ['./profile-recipe.component.css']
})
export class ProfileRecipeComponent implements OnInit {

  @Input() recipes: IRecipe[] | null = null;
  @Output() reload: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    private recipeService: RecipeService,
    private translate: TranslateService
  ) { }

  ngOnInit(): void {
  }

  delete(recipe: Recipe): void {
    Swal.fire({
      title: this.translate.instant('recipes.deleteConfirmTitle'),
      text: `${this.translate.instant('recipes.deleteConfirmDesc')} '${recipe.name}'`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: this.translate.instant('commons.confirm'),
      cancelButtonText: this.translate.instant('commons.cancel'),
    }).then((result) => {
      if (result.isConfirmed) {
        this.recipeService.delete(recipe.id).subscribe(() => {
          Swal.fire({
            title: this.translate.instant('recipes.deleteTitle'),
            text: `'${recipe.name}' ${this.translate.instant('recipes.deleteDesc')}`,
            icon: 'success'
          });
          this.reload.emit();
        });
      }
    });

  }

}
