import { Recipe } from "./recipe";

export class Profile{
    id!: number;
    firstName!: string;
    lastName!: string;
    username!: string;
    profilePic!: File | null;
    bannerPic!: File | null;
    recipes!: Array<Recipe> | null;
}