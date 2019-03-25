import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlmaService {

  constructor(private http: HttpClient) { }

  alimentos() {
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:9999/teste').subscribe(res => resolve(res))
    })
  }
}
