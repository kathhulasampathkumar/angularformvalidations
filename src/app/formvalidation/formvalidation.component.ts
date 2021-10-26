import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formvalidation',
  templateUrl: './formvalidation.component.html',
  styleUrls: ['./formvalidation.component.css']
})
export class FormvalidationComponent implements OnInit {
  doLogin(ref:NgForm){
    console.log("data in the form is :" ,ref.value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
