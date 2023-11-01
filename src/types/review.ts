import { Host } from './host';

export type ReviewType = {
    id: number;
    user: Host;
    rating: number;
    comment: string;
    date: string;
};
