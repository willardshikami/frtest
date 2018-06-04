import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userList: AngularFireList<any>;
  selectedUser: User = new User();

  constructor(private firebase: AngularFireDatabase) { }

  getData(){
    this.userList = this.firebase.list('users');
    return this.userList;
  }

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

  deleteUser($key: string){
    this.userList.remove($key);
  }
}
