import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { delay } from 'rxjs';
import { IProfile } from 'src/app/core/models/profile.model';
import { IRecipe } from 'src/app/core/models/recipe.model';
import { RecipeService } from 'src/app/core/services/recipe.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  recipe!: IRecipe;
  profile! : IProfile;
  showDetails: boolean = false;
  @ViewChild('detailsSection') detailsSection!: ElementRef;
  @ViewChild('mainSection') mainSection!: ElementRef;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router,
    public translate: TranslateService
    ) { }

  ngOnInit(): void {
    this.getRecipeDetails();
  }

  getRecipeDetails(): void{
    this.route.params.subscribe(params => {
      let id = params['id'];
      if(id){
        this.recipeService.getbyId(id).subscribe({
          next: (res) => {
            this.profile = res.data;
            this.recipe = res.data;
          },
          error: (err) => {
            this.router.navigate(['home']);
            Swal.fire('Opps...','Something when wrong, try again later!','error');
          }
        })
      }
    })
  }

  scrollToDetails() {
    this.showDetails = true;
    setTimeout(() => { this.detailsSection.nativeElement.scrollIntoView({ behavior: 'smooth' }) }, 100)
  }

  hideDetails() {
    this.showDetails = false;
    this.mainSection.nativeElement.scrollIntoView();
  }
}
