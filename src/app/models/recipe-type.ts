import { Recipe } from "./recipe";

export class RecipeType{
    id!: number;
    name!: string;
    image!: File;
    recipes!: Array<Recipe> | null;
}