import {Deserializable} from "./deserializable";

import { Profile, User } from 'src/app/core';
import { SafeHtml } from '@angular/platform-browser/src/security/dom_sanitization_service';
import {TagGroup} from './TagGroup';
import {department} from './Department';
import {Category} from './Category';
import {Franchise} from './Franchise';

export class UserBookmark {
    articleID: number;
    userID: any;
    ShowInLinks:any;
constructor(ArticleId: any, UserID: any, ShowLink: any){
    this.articleID = ArticleId;
    this.userID = UserID;
    this.ShowInLinks = ShowLink

}
}