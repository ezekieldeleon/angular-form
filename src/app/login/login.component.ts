import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  val = {
    email: "ezekiel@email.com",
    password: "122222",
  };
  constructor() {}

  ngOnInit() {}

  login(loginForm: NgForm, submit) {
    console.log(loginForm.value, loginForm.valid, submit);
    console.log("VAL:", this.val);
  }
}
