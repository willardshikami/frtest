import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { User } from '../shared/user.model';


@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],

})
export class UserListComponent implements OnInit {

  userList : User[];

  constructor(private userService: UserService) {}

  ngOnInit() {
    var single = this.userService.getData();
    single.snapshotChanges().subscribe(item => {
      this.userList = [];
      item.forEach(element => {
        var all = element.payload.toJSON();
        all["$key"] = element.key; 
        this.userList.push(all as User);
      })
    });
  }

}
