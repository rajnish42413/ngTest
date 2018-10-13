import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from './auth-service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})

export class AppComponent implements OnInit {
  title = 'app';
  private result: any;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.getusers().subscribe(
      res => {
        this.result = res;
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Client Side Error !");
        } else {
          console.log("Server Side Error !");
        }
      }
    );
  }

  public clickMe(data) {
    alert(data);
      }

}
