// import { User } from './user.model';

export class Client {
    constructor(
        public name: string,
        public lastName: string,
        public phones: Array<number>,
        public document: any,
        // public document: any = {
        //     type: null,
        //     number: null
        // },
        public card: Array<Object>,
        // public card: Array<Object> = [{
        //     name: null,
        //     type: null,
        //     number: null,
        //     cvc: null,
        //     country: null,
        //     expiration: null,
        // }],
        public user_id?: string,
        public _id?: string
    ) {
        // super('', '', '');
    }
}
