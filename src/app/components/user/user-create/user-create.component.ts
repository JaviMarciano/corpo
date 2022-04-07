import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MemberService } from 'src/app/services/member.service';
import { UserService } from 'src/app/services/user.service';
import { MemberFormComponent } from '../member-form/member-form.component';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss'],
})
export class UserCreateComponent implements OnInit {

  step: number = 1;

  @ViewChild(MemberFormComponent, { static: false }) formUser: MemberFormComponent;

  constructor(private userService: UserService, private router: Router/*, private customAlertService: CustomAlertService*/,
    private memberService: MemberService) { }

  ngOnInit() {
  }


  public async submit(): Promise<void> {
    const newUser = this.formUser.createMember();
    if (newUser !== null) {
      /*await this.memberService.add(newUser)
        .then(() => {
          this.step = 2;
        })
        .catch((response) => {
          console.log(response);
          if (response.status === 400) {
            //this.customAlertService.displayAlert("Gestión de Usuarios", response.error.errores);
          }
          if (response.status === 500) {
            //this.customAlertService.displayAlert("Gestión de Usuarios", ["No se pudo guardar el usuario."]);
          }

        });*/
    }
  }

}
