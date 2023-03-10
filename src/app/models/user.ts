import { Profile } from "./profile";

export class User{
    id!: number;
    email!: string;
    password!: string;
    profile: Profile = new Profile;
}