import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getUsers(){
     var url = 'https://jsonplaceholder.typicode.com/users';
    return this.http.get(url);
  }

  getUserDetail(userid:any){
    return this.http.get('https://jsonplaceholder.typicode.com/users/'+userid);
  }

  getPosts(){

    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
}
