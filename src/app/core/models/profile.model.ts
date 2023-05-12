import { Recipe } from "./recipe.model";

export interface IProfile
{
    id: number;
    firstName: string;
    lastName: string;
    username: string;
    profileImg: any;
    bannerImg: any;
    recipes: Array<Recipe> | null;
}

export class Profile implements IProfile
{
    id!: number;
    firstName!: string;
    lastName!: string;
    username!: string;
    profileImg!: File;
    bannerImg!: File;
    recipes!: Array<Recipe> | null;
}