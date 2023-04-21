import { Component, inject, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';



@Component({
  selector: 'app-create-recipes',
  templateUrl: './create-recipes.component.html',
  styleUrls: ['./create-recipes.component.css']
})
export class CreateRecipesComponent implements OnInit {

  titulo: string = "";
  descripcion: string = "";
  recipesListRecipe : string = "";
  imagenSel: File | any = null;

  recipesList : any = [];
  recipe = inject(RecipeService)
  constructor() { }




  ngOnInit(): void {
    const fileInput = document.getElementById('file-input') as HTMLInputElement;
    const previewContainer = document.querySelector('.preview-container') as HTMLDivElement;

    fileInput.addEventListener('change', function (this: HTMLInputElement) {
      const file = this.files?.[0];

      if (file) {
        const reader = new FileReader();

        reader.addEventListener('load', function () {
          const image = new Image();
          image.src = reader.result as string;

          image.addEventListener('load', function () {
            const ratio = Math.min(250 / this.width, 250 / this.height);
            const newWidth = this.width * ratio;
            const newHeight = this.height * ratio;

            previewContainer.innerHTML = '';
            previewContainer.style.display = 'block';

            const previewImage = document.createElement('img');
            previewImage.src = reader.result as string;
            previewImage.style.width = `${newWidth}px`;
            previewImage.style.height = `${newHeight}px`;
            previewContainer.appendChild(previewImage);
          });
        });



        reader.readAsDataURL(file);
      } else {
        previewContainer.style.display = 'none';
      }
    });

    const fileInput2 = document.getElementById('file-input2') as HTMLInputElement;
    const previewContainer2 = document.querySelector('.preview-container2') as HTMLDivElement;


    fileInput2.addEventListener('change', function (this: HTMLInputElement) {
      const file2 = this.files?.[0];

      if (file2) {
        const reader2 = new FileReader();

        reader2.addEventListener('load', function () {
          const image2 = new Image();
          image2.src = reader2.result as string;

          image2.addEventListener('load', function () {
            const ratio = Math.min(250 / this.width, 250 / this.height);
            const newWidth = this.width * ratio;
            const newHeight = this.height * ratio;
            previewContainer2.innerHTML = '';
            previewContainer2.style.display = 'block';
            const previewImage2 = document.createElement('img');
            previewImage2.src = reader2.result as string;
            previewImage2.style.width = `${newWidth}px`;
            previewImage2.style.height = `${newHeight}px`;
            previewContainer2.appendChild(previewImage2);
          });
        });

        reader2.readAsDataURL(file2);
      } else {
        previewContainer2.style.display = 'none';
      }
    });


    // listar tipos de recetas

    this.recipe.lista().subscribe((e:any) =>{
      this.recipesList = e.data;
      console.log(this.recipesList[0].recipeTypeName)
      console.log(e)
    })
  }

  public procesarImagen(evento: any): void {
    const archivo: File = evento.target.files[0];
    const lector: FileReader = new FileReader();
    lector.readAsDataURL(archivo);
    lector.onload = () => {
      this.imagenSel = lector.result;

    };
  }

  createRecipe(): void {

    let formData = new FormData();
    formData.append('recipeName', this.titulo);
    formData.append('recipeDescription', this.descripcion);
    formData.append('recipeImage', this.imagenSel);
    formData.append('recipeTypes', this.recipesListRecipe);
    
    console.log({
      titulo: this.titulo,
      descripcion: this.descripcion,
      lista: this.recipesListRecipe

    });
    console.log(formData)

    this.recipe.create(formData).subscribe((e:any) =>{
      console.log(e)
    })

    console.log(this.imagenSel)

  }
}

