import { Profile } from "./profile";

export class User{
    id!: number;
    username!: string;
    firstName!: string;
    lastName!: string;
    email!: string;
    password!: string;
    profile: Profile = new Profile;
}