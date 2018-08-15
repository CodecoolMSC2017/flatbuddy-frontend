export class Message {
    id: number;
    receiverId: number;
    senderId: number;
    senderName: string;
    receiverName: string;
    subject: string;
    content: string;
    date: Date;
    isEnabledToSender: boolean;
    isEnabledToReceiver: boolean;
    isSeen: boolean;
}