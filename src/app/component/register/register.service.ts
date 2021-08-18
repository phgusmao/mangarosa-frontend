import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Register } from './register';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  url = 'http://localhost:3939/api/users';

  constructor( private httpClient: HttpClient){
    
  }


  retriveAll()  {
    return this.httpClient.get(this.url).toPromise();
  }

  retriveById(id: number) {
    return this.httpClient.get(`${this.url}/${id}`).toPromise();
  }

  save(register: Register): void {
    this.httpClient.post(this.url, register).toPromise();
  }
}

const REGISTERS: Register[] | any = [
  
]




