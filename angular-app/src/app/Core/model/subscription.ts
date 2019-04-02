export class subscription {
    tagId: any;
    userId: any;
    notify: number;
    constructor(tagId: any, userId: any, notify: any){
        this.tagId = tagId;
        this.userId = userId;
        this.notify = notify;
    }
}