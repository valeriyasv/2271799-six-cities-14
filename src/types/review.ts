import { Host } from './host';

export type ReviewType = {
    id: string;
    user: Host;
    rating: number;
    comment: string;
    date: string;
};

export type ReviewSendType = {
    rating: number;
    comment: string;
};
