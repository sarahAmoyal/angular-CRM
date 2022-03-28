import { Component, OnInit } from '@angular/core';
import { User } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/interfaces/customer';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  user$: Observable<User | null>;

  constructor(authService: AuthService) {
    this.user$ = authService.user$;
  }

  ngOnInit(): void {}
}
