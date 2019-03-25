import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AlmaService } from './alma.service';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements Resolve<any> {

  constructor(private almaService: AlmaService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log('entrou')
    return this.almaService.alimentos().then(data => {
      return data;
    })
  }
}
