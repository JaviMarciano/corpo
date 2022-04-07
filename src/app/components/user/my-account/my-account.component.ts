import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoggedUser } from 'src/app/domain/user/logged-user';
import { AccountService } from 'src/app/services/account.service';
import { MemberService } from 'src/app/services/member.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/domain/interfaces/iuser';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss'],
})
export class MyAccountComponent implements OnInit {
  user: User;
  id: number;
  userLogged: LoggedUser;
  userType: number;
  requesting: boolean;
  constructor(private userService: UserService, private memberService: MemberService, private router: Router, private accountService: AccountService) {
    this.userLogged = this.accountService.getLoggedUser();
    console.log("userLogged", this.userLogged);
    this.id = this.userLogged.id;
    this.userType = this.userLogged.userType
  }

  ngOnInit() {
    this.requesting = true;
    if (this.userType == 1) {
      this.userService.getById(this.id).subscribe(
        result => {
          console.log("user getById", result);
          this.user = result;
        },
        error => console.error(error)
      );
    } else {
      this.memberService.getById(this.id).subscribe(
        result => {
          this.requesting = false;
          console.log("getById", result);
          this.user = result;

        },
        error => {
          this.requesting = false;
          console.error(error)
        }
      );
    };
  }

  modifyPersonalInformation() {
    if (this.userType == 1) {
      this.router.navigate(['/user-edit']);
    } else {
      this.router.navigate(['/member-edit']);
    }
  }

  modifyMedicalHistory() {
    this.router.navigate(['/medical-history-edit'], { queryParams: { id: this.id } });
  }


  modifyEmail() {
    this.router.navigate(['/email-edit']);
  }
}
