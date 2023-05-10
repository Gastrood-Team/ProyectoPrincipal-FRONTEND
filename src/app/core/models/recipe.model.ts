import { Profile } from "./profile.model";
import { RecipeType } from "./category.model";

export interface IRecipe
{
    id: number;
    name: string;
    description: string;
    image: any;
    types: Array<RecipeType> | null;
    profile: Profile;
}

export class Recipe implements IRecipe
{
    name!: string;
    description!: string;
    image!: File; 
    types!: RecipeType[] | null;
    profile!: Profile;
    id!: number;
}