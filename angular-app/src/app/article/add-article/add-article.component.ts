import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { first } from 'rxjs/internal/operators/first';
import { Article } from 'src/app/core/model/article';
import {ArticlesService} from '../../Core/service/Article.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {options} from '../../Core/model/options';
import { Category } from 'src/app/Core/model/Category';
import { ApiService } from 'src/app/Core';
import { Tag } from 'src/app/Core/model/Tag';
import { UploadFileService } from 'src/app/Core/service/UploadFile.service';
import { HttpResponse } from '@angular/common/http';
declare var $: any;
@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css'],
  providers: [UploadFileService]

})
export class AddArticleComponent implements OnInit {
  [x: string]: any;
  form: FormGroup;
  category: string;
  id: FormControl;
  content: FormControl;
  type: FormControl;
  url: FormControl;
  publishDate: FormControl;
  franchiseID: FormControl;
  departmentID: FormControl;
  CategoryID: FormControl;
  archiveID: FormControl;
  author: FormControl;
      //tags: ['', [Validators.required, Validators.minLength(6)]],
  title: FormControl;
  RestService: ArticlesService;
  powers = ['Really Smart', 'Super Flexible',
  'Super Hot', 'Weather Changer'];
  categorys: any;
  array = Array<options>();
  dataArr: any;
  selectedValue: string;
  typeArr = ["Training", "Project", "Article"]
  subCat = Array<Category>();
  subTemp = Array<Category>();
  loading = false;
  submitted = false;
  HasSub: boolean;
  newTag:any;
  selectedFiles: FileList;
  currentFileUpload: File;
  tagArray: any;
  config = {
    height: '200px',
    uploadImagePath: '/api/upload'
  };
  editorDisabled = false;
  
  get sanitizedHtml() {
    return this.sanitizer.bypassSecurityTrustHtml(this.form.get('html').value);
  }

  constructor(private uploadService: UploadFileService, private sanitizer: DomSanitizer,private restService: ArticlesService, private f: FormBuilder,private route: ActivatedRoute, private  ApiService: ApiService) {

  }

  enableEditor() {
    this.editorDisabled = false;
  }

  disableEditor() {
    this.editorDisabled = true;
  }

  onBlur() {
    console.log('Blur');
  }


  ngOnInit() {

    this.route.data.subscribe(data => { 
      console.log('Data :', data)
      this.categorys = data.Category.categoryName;
      this.dataArr = data.Category;
      for(let i = 0; i < this.dataArr.length; i++){
        if(this.dataArr[i].parentCategory != null){
            this.subCat.push(new Category(
              this.dataArr[i].categoryID,
              this.dataArr[i].categoryName,
              this.dataArr[i].parentCategory
            ));
        } else {
        this.array.push(new options(
          this.dataArr[i].categoryID,
          this.dataArr[i].categoryName));
      }
    }
      console.log(this.array);
      
    });
      
    const number = Number(window.sessionStorage.getItem("depoKey"));
    console.log(this.number);
    let date = new Date();
    this.form = this.f.group({
      id: "",
      content:['', <any>Validators.required],
      type: "",
      url: "",
      publishdate: date,
      Tags: ['', <any>Validators.required],
      categoryId: 2, 
      departmentID: Number(window.sessionStorage.getItem("DepoKey")),
      frachiseId: Number(window.sessionStorage.getItem("FranchiseKey")),
      archiveid: 0,
      userID: window.sessionStorage.getItem("userID"),
      title: ['', <any>Validators.required]
    });
   ///https://github.com/summernote/awesome-summernote
    $('#summernote').summernote('createLink', {
      text: "This is the Summernote's Official Site",
      url: 'http://summernote.org',
      isNewWindow: true
    });
    $('#summernote').summernote('unlink');
    $('#summernote').summernote({
      callbacks: {
        onKeyup: function(e) {
          console.log('Key is released:', e.keyCode);
        }
      }
    });
    
    $('#summernote').summernote('insertNode',document.createElement('div'));
}

  


  onSubmit(article) {

    this.submitted = true;

    console.log('Form Submitted!');
    // tslint:disable-next-line:no-unused-expression
    article = this.form.value;
    let tags = this.form.value.Tags;
    console.log(tags);
    this.tagArray = tags.split('#');
   
    this.restService.add(article).subscribe(status => console.log(JSON.stringify(status))); 
     for(let i = 1; i < this.tagArray.length; i++){
      this.newTag = new Tag(
      this.tagArray[1],
      1
    );
    console.log(this.newTag)
    this.ApiService.postTag('Tag/Post/' + article.title, this.newTag).subscribe(status => console.log(JSON.stringify(status)));
    this.fi  
  
  }
    
    this.form.reset;
    //location.reload(true);
    //location.href = "http://webapp-190214214406.azurewebsites.net"
    
    //location.href = "http://localhost:4200/"
    


}

applySelectFilter(Strin: any) {
  this.subTemp = [];
  for(let i = 0; i < this.subCat.length; i++){
    if(this.subCat[i].Parent === Strin.value){
      this.subTemp.push(this.subCat[i]);
    }
    /*if(this.subTemp.length > 1){
      this.HasSub = false;
    } */
    }

} 
selectFile(event) {
  this.selectedFiles = event.target.files;
}
upload() {
  this.currentFileUpload = this.selectedFiles.item(0);
  this.uploadService.pushFileToStorage(this.currentFileUpload, this.id).subscribe(event => {
   if (event instanceof HttpResponse) {
      console.log('File is completely uploaded!');
    }
  });
  this.selectedFiles = undefined;
}
}