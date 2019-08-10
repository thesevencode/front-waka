export class User {
    constructor(
        public email: string,
        public password: string,
        public type: string,
        public terms: boolean,
        public _id?: string
    ) {

    }
}
