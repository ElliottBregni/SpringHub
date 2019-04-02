import {Deserializable} from "./deserializable";

import { Profile, User } from 'src/app/core';
import { SafeHtml } from '@angular/platform-browser/src/security/dom_sanitization_service';
import {TagGroup} from './TagGroup';
import {department} from './Department';
import {Category} from './Category';
import {Franchise} from './Franchise';
export interface UserSubscription{

  TagID: number;
  UserID: any;
  notifyOnNewArticle:any;

  
}
export class UserSubscription {
    TagID: number;
    UserID: any;
    notifyOnNewArticle:any;
constructor(TagID: any, UserID: any, notifyOnNewArticle: any){
    this.TagID = TagID;
    this.UserID = UserID;
    this.notifyOnNewArticle = notifyOnNewArticle

}
}