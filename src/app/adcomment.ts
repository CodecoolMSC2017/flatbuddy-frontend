import { User } from "./user";

export class Adcomment{
    id: number;
    adId: number;
    user: User;
    comment: string;
    commentType: number;
    date: Date;
}