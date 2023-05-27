import { Recipe } from "./recipe.model";

export interface IProfile
{
    id: number;
    firstName: string;
    lastName: string;
    username: string;
    profileImg: any;
    bannerImg: any;
    biography: any;
    websiteUrl: any;
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
    biography: any;
    websiteUrl: any;
    recipes!: Array<Recipe> | null;
}