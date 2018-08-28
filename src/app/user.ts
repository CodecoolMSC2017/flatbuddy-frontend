export class User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    flatmate: boolean;
    age: number;
    gender: string;
    description: string;
    destination: string;
    enabled: boolean;
    authorities: String[] = [];
    pictures: Object[]=[];
}