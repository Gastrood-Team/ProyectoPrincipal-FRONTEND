export class User{
    id!: number;
    email!: string;
    password!: string;
}

export class SignUpData extends User
{
    firstName!: string;
    lastName!: string;
    username!: string;
}

