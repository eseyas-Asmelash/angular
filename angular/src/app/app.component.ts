import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public countAdmin?: string;
  public sortbyOrganization?: any;
  public sortbyRole?: any;
  public sortbyJob?: any;
  public searchName?: any;
  public countUser?: string;
  public users?: Personalnfo[];
  constructor(http: HttpClient) {

    http.get<Personalnfo[]>('/Personalnfo').subscribe(result => {
      this.users = result;
      this.countAdmin = this.users.filter(user => user.role == "Admin").length.toString();
      this.countUser = this.users.filter(user => user.role == "Self User").length.toString();
      this.sortbyOrganization = function () {
        if (this.users != undefined) {
          this.users.sort((a, b) => {
            return b.organizationUnit < a.organizationUnit ? 1 
              : b.organizationUnit > a.organizationUnit ? -1 
                : 0;
          })
          }
      };
      this.sortbyRole = function () {
        if (this.users != undefined) {
          this.users.sort((a, b) => {
            return b.role < a.role ? 1 
              : b.role > a.role ? -1 
                : 0;
          })
        }
      };
      this.sortbyJob = function () {
        if (this.users != undefined) {
          this.users.sort((a, b) => {
            return b.jobTitle < a.jobTitle ? 1 
              : b.jobTitle > a.jobTitle ? -1 
                : 0;
          })
        }
      };
      this.searchName = function (value?: string) {
        if (this.users != undefined) {
          if (value?.includes("@"))
            return this.users.filter(user => user.email == value);
          else
            return this.users.filter(user => user.firstName || user.lastName == value);
        }
        else
          return this.users;
      }
    }, error => console.error(error));
  }
  title = 'angular';
}

interface Personalnfo {
  firstName: string;
  lastName: string;
  email: string;
  jobTitle: string;
  organizationUnit: string;
  role: string;
}
