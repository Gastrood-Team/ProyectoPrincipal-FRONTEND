import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { IRecipeType } from 'src/app/core/models/category.model';
import { RecipeAux } from 'src/app/core/models/recipe.model';
import { RecipeTypeService } from 'src/app/core/services/recipe-type.service';
import { RecipeService } from 'src/app/core/services/recipe.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent implements OnInit {

  recipe: RecipeAux = new RecipeAux();
  recipeTypes!: IRecipeType[];
  types: number[] = [];
  selectedTypes: number[] = [];
  imageUrl: any;
  fetching: boolean = false;

  constructor(
    private recipeService: RecipeService,
    private recipeTypeService: RecipeTypeService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private translate: TranslateService
    ) { }

  ngOnInit(): void {
    this.readById()
    this.readAll();
  }

  readById(){
    this.route.params.subscribe(params => {
      let id = params['id'];
      if(id){
        this.fetching = true;
        this.recipeService.getbyId(id).subscribe({
          next: (res) => {
            let types = res.data.types
            this.recipe = res.data
            this.imageUrl = res.data.image
            types.forEach((type: any) => {
              this.types?.push(type.id)
              this.fetching = false;
            })
          this.recipe.types = this.types;
          },
          error: (err) => {
            this.router.navigate(['home']);
            this.fetching = false;
            Swal.fire('Opps!', "Something when wrong while loading the data, try again later!", 'error');
          }
        })
      }
    })
  }

  readAll(): void {
    this.recipeTypeService.getAll().subscribe(res => {
      this.recipeTypes = res.data;
    })
  }

  onFileSelect(event: any): void {
    const reader = new FileReader()
    const file: File = event.target.files[0];
    this.recipe.image = file;

    reader.onload = (e: any) => {
      this.imageUrl = e.target.result;
    }
    reader.readAsDataURL(file);
  }

  create(): void {
    
    if(!this.recipe.name || !this.recipe.description || !this.recipe.types || !this.recipe.image){
      Swal.fire('Ooops', 'Please fill in all fields.', 'error');
      return;
    }

    let actionBtn = document.getElementById('action-btn');
    actionBtn!.innerHTML = `${this.translate.instant('commons.validating')}`

    this.recipeService.create(this.recipe).subscribe({
      next: (res) => {
        this.back();
        Swal.fire("Recipe created successfully", res.message, 'success')
      },
      error: () => {
        Swal.fire('Opps...', 'Something when wrong, try again later!', 'error');
        actionBtn!.innerHTML = `${this.translate.instant('commons.createBtn')}`
      }
    })
  }

  update(): void {

    if(!this.recipe.name || !this.recipe.description || !this.recipe.types || !this.recipe.image){
      Swal.fire('Opps...', 'Please fill in all fields.', 'error');
      return;
    }

    let actionBtn = document.getElementById('action-btn');
    actionBtn!.innerHTML = `${this.translate.instant('commons.validating')}`    
    
    this.recipeService.update(this.recipe).subscribe({
      next: (res) => {
        this.back();
        Swal.fire("Recipe updated successfully", res.message, 'success')
      },
      error: () => {
        this.back();
        Swal.fire('Ooops', 'Something when wrong, try again later!', 'error');
      }
    })
  }

  back(): void{
    this.location.back();
  }
}
