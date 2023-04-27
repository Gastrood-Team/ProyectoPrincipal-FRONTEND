import { Profile } from "./profile";
import { RecipeType } from "./recipe-type";

export class Recipe{
    id!: number;
    name!: string;
    description!: string;
    image!: File;
    types!: Array<RecipeType> | null;
    profile!: Profile;
}