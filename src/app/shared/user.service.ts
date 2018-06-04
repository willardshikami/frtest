import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userList: AngularFireList<any>;
  userDetail: AngularFireObject<any>;
  selectedUser: User = new User();

  constructor(private firebase: AngularFireDatabase) { }

  //Get user data
  getData(){
    this.userList = this.firebase.list('users');
    return this.userList;
  }

  getUser($key: string){
    this.userDetail = this.firebase.object('user/'+$key);
    return this.userDetail;
  }

  //add user data
  insertUser(user: User){
    this.userList.push({
      firstname: user.firstname,
      lastname: user.lastname,
      rating: user.rating,
      category: user.category,
      subcategory: user.subcategory,
      amount: user.amount
    });
  }

  //update user data
  updateUser(user: User){
    this.userList.update(user.$key, 
      {
        firstname: user.firstname,
        lastname: user.lastname,
        rating: user.rating,
        category: user.category,
        subcategory: user.subcategory,
        amount: user.amount
      });
  }

  //delete user data
  deleteUser($key: string){
    this.userList.remove($key);
  }
}
