
import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";

@Injectable()
export class AuthService {

  constructor(
    private _http: HttpClient
  ) { }


  getusers(): any {
    return this._http.get("https://jsonplaceholder.typicode.com/users");
  }
  getuser(id): any {
    return this._http.get("https://jsonplaceholder.typicode.com/users/" + id);
  }
}
