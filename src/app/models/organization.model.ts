export class Organization {
    constructor(
        public _id: string,
        public name: string,
        public email: string,
        public type: string,
        public phones: Array<number>,
        public address: string,
        public url?: string,
        public members?: Array<Object>,
        public user_id?: string,
    ) {

    }
}
