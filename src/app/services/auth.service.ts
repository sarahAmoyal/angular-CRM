import { Injectable } from '@angular/core';
import {
  Auth,
  authState,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithRedirect,
  signOut,
  User,
} from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$: Observable<User | null>;

  user: User | null = null;
  isLogged: boolean = false;
  constructor(private auth: Auth, private router: Router) {
    this.user$ = authState(this.auth);

    this.user$.subscribe((user) => {
      this.user = user;
      this.isLogged = Boolean(user);
    });
  }

  createUser(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }
  loginEmail(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }
  loginWithGoogle() {
    return signInWithRedirect(this.auth, new GoogleAuthProvider());
  }
  async logout() {
    await signOut(this.auth);
    this.router.navigate(['/login']);
  }
}