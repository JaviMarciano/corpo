import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from 'src/app/domain/user/account';
import { AccountService } from 'src/app/services/account.service';
import { CustomAlertService } from 'src/app/services/custom-alert.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  sent: boolean = false;
  return: string = '';
  requesting: boolean;

  constructor(private formBuilder: FormBuilder, private accountService: AccountService, private customAlertService: CustomAlertService, private router: Router, private route: ActivatedRoute) {
    this.formLogin = this.formBuilder.group({
      email: ['lucaslopez@gmail.com', [Validators.required, Validators.email]],
      password: ['Abcd1234', Validators.required]
    });
  }

  ngOnInit() {
  }

  get f() {
    return this.formLogin.controls;
  }

  logIn() {
    this.sent = true;
    if (this.formLogin.valid) {
      let account = new Account()
      {
        account.email = this.formLogin.value.email,
          account.password = this.formLogin.value.password
      };
      this.requesting = true;
      this.accountService.logIn(account).subscribe(
        result => {
          this.requesting = false;
          console.log(result);
          this.accountService.setToken(result.token);
          this.accountService.setAuthenticated(true);
          this.accountService.setLoggedUser(result.user);
          this.router.navigate(['/']);
        },
        error => {
          this.requesting = false;
          console.error(error);
          if (error.status === 400) {
            this.customAlertService.displayAlert("Gestión de Autenticación de Usuarios", error.error.errores);
          }
          if (error.status === 500) {
            this.customAlertService.displayAlert("Gestión de Autenticación de Usuarios", ["Hubo un problema al intentar iniciar sesión."]);
          }
        });
    }

  }

}
