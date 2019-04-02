export interface Tag {
    TagID: number;
    content: String;
}
export class Tag {
    TagID: number
    tagContent: String
    constructor(Content: String, TagID: number){
        this.tagContent = Content;
        this.TagID = TagID;
    }
}