import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  //Declare var type to FormGroup
  myForm: FormGroup;

  subcategory = new FormControl();

  subcategoryList = ['Sports', 'Leisure', 'Office']

  //Adding form builder service to constructor
  constructor(private fb: FormBuilder) { }


  ngOnInit() {}
  

}
