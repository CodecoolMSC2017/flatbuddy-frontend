export class Message {
    id: number;
    receiverId: number;
    senderId: number;
    subject: string;
    content: string;
    date: Date;
    isEnabledToSender: boolean;
    isEnabledToReceiver: boolean;
}