import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  private username: string;
  private client_id = '07946ffd3dab210ac8a9';
  private client_secret = 'aab10a5a5b59b31160711a8131ecedf28d4fa720';
  // private client_id: string;
  // private client_secret: string;

  constructor(private _http: Http){
    // this._http.get('./keys.json')
    //   .map((res: Response) => {
    //     res.json()
    //       .subscribe( res => console.log("howdy"), error => console.log("error"))
    //   });

    console.log('Github Service ready');
    this.username = 'eugenehiggins';
  }

  getUser(){
    return this._http.get('http://api.github.com/users/' + this.username + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
      .map(res => res.json());
  }

  getRepos(){
    return this._http.get('http://api.github.com/users/' + this.username + '/repos?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
      .map(res => res.json());
  }

  updateUser(username:string){
    this.username = username;
  }
}