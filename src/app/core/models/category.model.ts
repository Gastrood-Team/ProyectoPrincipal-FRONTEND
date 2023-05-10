import { Recipe } from "./recipe.model";

export interface IRecipeType
{
    id: number;
    name: string;
    image: any;
    recipes: Array<Recipe> | null;
}
export class RecipeType implements IRecipeType
{
    id!: number;
    name!: string;
    image!: File;
    recipes!: Array<Recipe> | null;
}