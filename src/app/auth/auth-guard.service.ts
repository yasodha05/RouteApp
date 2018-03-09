import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from './auth.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/take';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private af: AngularFireAuth,
              private authService: AuthService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {


    if (!this.authService.isAuthenticated()) {
            this.router.navigate(['login'], { queryParams: { returnUrl: state.url }});
          return false;
            }
        return true;
      }

   }
