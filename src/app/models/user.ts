import { Profile } from "./profile";

export class User{
    id!: number;
    email!: string;
    plainPassword!: string;
    profile: Profile = new Profile;
}