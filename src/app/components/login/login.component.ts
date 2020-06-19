import { Component, OnInit } from '@angular/core';
import { AuthenticationService, TokenPayload } from '../../authentication.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials: TokenPayload = {
    emp_id: 0,
    emp_name: '',
    emp_email: '',
    emp_password: ''
  }

  constructor(private auth: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }

  login () {
    this.auth.login(this.credentials).subscribe(
      () => {
        this.router.navigateByUrl('/home')
      },
      err => {
        console.error(err)
      }
    )
  }

}
