import { AuthService } from '../../Core/auth/auth.service';
import { TokenStorageService } from '../../Core/auth/token-storage.service';
import { AuthLoginInfo } from '../../Core/auth/login-info';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserService } from 'src/app/Core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  [x: string]: any;
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string;
  private loginInfo: AuthLoginInfo;
  public Username: String;

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private UserService: UserService) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getAuthorities();
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
  }
  shownav(): boolean {
    const currentUser = this.authService.currentUserValue;
        if (currentUser && currentUser.accessToken) {
             
            this.show = true;
           
        } else {
         
            this.show = false;
        
          }
          return this.show;
    }
  onSubmit() {
    console.log(this.form);
    //this.reloadPage();
    this.loginInfo = new AuthLoginInfo(
      this.form.username,
      this.form.password);

    this.authService.attemptAuth(this.loginInfo).toPromise().then(
      data => {
        
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUsername(data.username);
    
          
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getAuthorities();
   

      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isLoginFailed = true;
        console.log(this.isLoginFailed)
      });
     
      this.UserService.findByUserName(this.form.username).toPromise().then(
        data =>{
          //Add to user token
          //Query for User with Username
          console.log(data);
          this.tokenStorage.saveDepartment(data.department.departmentID);
          this.tokenStorage.saveId(data.userID);
          this.tokenStorage.saveFranchise(data.franchise.franchiseID);
          this.tokenStorage.saveAuthorities(data.roles.designationID);
          this.reloadPage();
     
        }, error => {
          console.log(error);
          this.errorMessage = error.error.message;
          this.isLoginFailed = true;
          console.log(this.isLoginFailed)
        },
);
  
  
   
  }

  reloadPage() {
    //window.location.reload(true);
    let environment = 'localhost:4200'
    window.location.href = environment + "/User";
    //this.router.navigate(['/home']);

  }
}