import {Deserializable} from "./deserializable";

import { Profile, User } from 'src/app/core';
import { SafeHtml } from '@angular/platform-browser/src/security/dom_sanitization_service';
import {TagGroup} from './TagGroup';
import {department} from './Department';
import {Category} from './Category';
import {Franchise} from './Franchise';
export interface Article{

  ArticleID: number;
  ArticleTitle: string;
  ArticleContent: string;
  ArticleType: string;
  createdAt: String;
  Comments: Comment[];
  User: User;
  TagGroup: TagGroup;
  Franchise: Franchise;
  Department: department;
  ArchiveID: number;
  slug: String;
  Type: String;
  ArticleImg: SafeHtml;
  Category: Category;
  Url: String;

  
}
export class Article {
  ArticleID: number;
  ArticleTitle: string;
  ArticleContent: string;
  ArticleType: string;
  createdAt: String;
  Comments: Comment[];
  User: User;
  TagGroup: TagGroup;
  Franchise: Franchise;
  Department: department;
  ArchiveID: number;
  slug: String;
  Type: String;
  ArticleImg: SafeHtml;
  Category: Category;
  Url: String;
constructor(){

}
}