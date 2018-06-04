import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';

import{ NgForm } from '@angular/forms';

@Component({
  selector: 'new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {


  subcategoryList = ['Sports', 'Leisure', 'Office']

  //Adding form builder service to constructor
  constructor(private userService: UserService) { }


  ngOnInit() {
    this.userService.getData();
    this.resetForm();
  }
  
  onSubmit(userForm: NgForm){
    this.userService.insertUser(userForm.value);
    this.resetForm(userForm);
  }

  resetForm(userForm?: NgForm){
    if(!userForm !=null)
    userForm.resetForm();
    this.userService.selectedUser = {
      $key: null,
      firstname: "",
      lastname: "",
      rating: "",
      category: "",
      subcategory: "",
      amount: 0
    }
  }

}
